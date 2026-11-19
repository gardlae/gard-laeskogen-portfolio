// The simulation behind the homepage's planner: a point drone flown by a small sampling-based
// controller (MPPI). Each control tick it samples candidate futures, scores them against a moving target
// and follows the weighted best. The "computers" set how many futures fit in a tick and how often the
// plan arrives late. Toy physics, not data. Kept free of React so scripts/planner-check.ts can run it.

// Plain names with a rough price as the scale a visitor knows (user, 2026-11-19: "Jetson" means nothing to most
// people). The prices are the research's real devices: an RTX 5080, a Jetson Orin Nano kit, a Raspberry Pi 5.
// The samples and late rates are illustrative, not measurements.
export type Computer = { id: string; label: string; price: string; samples: number; lateRate: number };

export const COMPUTERS: Computer[] = [
  { id: "gpu", label: "Desktop GPU", price: "~$1,000", samples: 512, lateRate: 0 },
  { id: "jetson", label: "Drone computer", price: "~$250", samples: 32, lateRate: 0.15 },
  { id: "pi", label: "Raspberry Pi", price: "~$60", samples: 8, lateRate: 0.45 },
];

export const DT = 1 / 30; // control tick, s
export const HORIZON = 30; // planning horizon in ticks (1 s)
export const ARENA = { w: 4, h: 3 }; // m
const A_MAX = 7; // m/s^2
const DRAG = 0.8;
const SIGMA = 3.5;
export const DRAWN_FUTURES = 36;
export const STRIP = 72; // ticks shown in the deadline strip

export function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gaussian(rand: () => number) {
  const u = Math.max(rand(), 1e-9);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rand());
}

// Figure-eight reference (lemniscate of Gerono), one lap in LAP seconds.
export const LAP = 7;
export function figureEight(t: number): [number, number] {
  const a = (2 * Math.PI * t) / LAP;
  return [ARENA.w / 2 + 1.45 * Math.sin(a), ARENA.h / 2 + 1.05 * Math.sin(a) * Math.cos(a)];
}

export type Sim = {
  t: number;
  x: number; y: number; vx: number; vy: number;
  plan: Float32Array; // HORIZON x 2 accelerations
  futures: number[][]; // drawn sample rollouts (flattened xy)
  best: number[];
  trail: number[];
  strip: boolean[]; // true = on time
  errors: number[];
  pointer: [number, number] | null;
  pointerBlend: number;
  late: boolean;
};

export function newSim(): Sim {
  const [x, y] = figureEight(0);
  return {
    t: 0, x, y, vx: 0, vy: 0,
    plan: new Float32Array(HORIZON * 2),
    futures: [], best: [], trail: [], strip: [], errors: [],
    pointer: null, pointerBlend: 0, late: false,
  };
}

export function reference(sim: Sim, dt: number): [number, number] {
  const [fx, fy] = figureEight(sim.t + dt);
  if (!sim.pointer || sim.pointerBlend <= 0) return [fx, fy];
  const b = sim.pointerBlend;
  return [fx * (1 - b) + sim.pointer[0] * b, fy * (1 - b) + sim.pointer[1] * b];
}

export function step(sim: Sim, computer: Computer, rand: () => number) {
  sim.pointerBlend = Math.max(0, Math.min(1, sim.pointerBlend + (sim.pointer ? 0.08 : -0.04)));
  const late = rand() < computer.lateRate;
  sim.late = late;

  if (!late) {
    const K = computer.samples;
    const costs = new Float32Array(K);
    const noise = new Float32Array(K * HORIZON * 2);
    const keep = Math.min(K, DRAWN_FUTURES);
    const futures: number[][] = [];
    const refs = new Float32Array(HORIZON * 2);
    for (let h = 0; h < HORIZON; h++) {
      const [rx, ry] = reference(sim, (h + 1) * DT);
      refs[h * 2] = rx; refs[h * 2 + 1] = ry;
    }
    for (let k = 0; k < K; k++) {
      let x = sim.x, y = sim.y, vx = sim.vx, vy = sim.vy, c = 0;
      const path: number[] | null = k < keep ? [x, y] : null;
      for (let h = 0; h < HORIZON; h++) {
        const i = (k * HORIZON + h) * 2;
        const ex = gaussian(rand) * SIGMA, ey = gaussian(rand) * SIGMA;
        noise[i] = ex; noise[i + 1] = ey;
        let ax = sim.plan[h * 2] + ex, ay = sim.plan[h * 2 + 1] + ey;
        const n = Math.hypot(ax, ay);
        if (n > A_MAX) { ax *= A_MAX / n; ay *= A_MAX / n; }
        vx += (ax - DRAG * vx) * DT; vy += (ay - DRAG * vy) * DT;
        x += vx * DT; y += vy * DT;
        const rx = refs[h * 2], ry = refs[h * 2 + 1];
        c += (x - rx) ** 2 + (y - ry) ** 2 + 0.002 * (ax * ax + ay * ay);
        if (x < 0 || x > ARENA.w || y < 0 || y > ARENA.h) c += 4;
        if (path) path.push(x, y);
      }
      costs[k] = c;
      if (path) futures.push(path);
    }
    let cmin = Infinity, cmean = 0;
    for (let k = 0; k < K; k++) { cmin = Math.min(cmin, costs[k]); cmean += costs[k] / K; }
    const lambda = Math.max(1e-6, (cmean - cmin) * 0.2);
    const w = new Float32Array(K);
    let wsum = 0;
    for (let k = 0; k < K; k++) { w[k] = Math.exp(-(costs[k] - cmin) / lambda); wsum += w[k]; }
    const next = new Float32Array(HORIZON * 2);
    for (let h = 0; h < HORIZON; h++) {
      let ax = 0, ay = 0;
      for (let k = 0; k < K; k++) {
        const i = (k * HORIZON + h) * 2;
        ax += w[k] * noise[i]; ay += w[k] * noise[i + 1];
      }
      let nx = sim.plan[h * 2] + ax / wsum, ny = sim.plan[h * 2 + 1] + ay / wsum;
      const m = Math.hypot(nx, ny); // keep the plan within reach, or sampling noise stops steering it
      if (m > A_MAX) { nx *= A_MAX / m; ny *= A_MAX / m; }
      next[h * 2] = nx; next[h * 2 + 1] = ny;
    }
    sim.plan = next;
    sim.futures = futures;
    // the plan the drone will follow, for drawing
    let x = sim.x, y = sim.y, vx = sim.vx, vy = sim.vy;
    const best = [x, y];
    for (let h = 0; h < HORIZON; h++) {
      vx += (next[h * 2] - DRAG * vx) * DT; vy += (next[h * 2 + 1] - DRAG * vy) * DT;
      x += vx * DT; y += vy * DT; best.push(x, y);
    }
    sim.best = best;
  }

  // apply the first command (a late tick acts on the previous plan, shifted by one step)
  let ax = sim.plan[0], ay = sim.plan[1];
  const n = Math.hypot(ax, ay);
  if (n > A_MAX) { ax *= A_MAX / n; ay *= A_MAX / n; }
  sim.vx += (ax - DRAG * sim.vx) * DT; sim.vy += (ay - DRAG * sim.vy) * DT;
  sim.x += sim.vx * DT; sim.y += sim.vy * DT;
  sim.plan.copyWithin(0, 2);
  sim.plan[HORIZON * 2 - 2] = sim.plan[HORIZON * 2 - 4];
  sim.plan[HORIZON * 2 - 1] = sim.plan[HORIZON * 2 - 3];
  sim.t += DT;

  const [rx, ry] = reference(sim, 0);
  sim.errors.push(Math.hypot(sim.x - rx, sim.y - ry));
  if (sim.errors.length > 180) sim.errors.shift(); // the readout averages the last 6 s
  sim.trail.push(sim.x, sim.y);
  if (sim.trail.length > 120) sim.trail.splice(0, 2);
  sim.strip.push(!late);
  if (sim.strip.length > STRIP) sim.strip.shift();
}

