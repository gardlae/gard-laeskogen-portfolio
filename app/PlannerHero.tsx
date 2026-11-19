"use client";

import { useEffect, useRef, useState } from "react";

// The homepage's live planner: draws the simulation in app/planner-sim.ts and lets the visitor steer the
// target and switch computers.
import { ARENA, COMPUTERS, DT, LAP, STRIP, figureEight, newSim, reference, rng, step, type Sim } from "./planner-sim";

function cssVar(name: string, fallback: string) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

function draw(canvas: HTMLCanvasElement, sim: Sim) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const dpr = window.devicePixelRatio || 1;
  const W = canvas.width / dpr, H = canvas.height / dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);
  const s = Math.min(W / ARENA.w, H / ARENA.h);
  const ox = (W - ARENA.w * s) / 2, oy = (H - ARENA.h * s) / 2;
  const X = (x: number) => ox + x * s, Y = (y: number) => oy + y * s;
  const signal = cssVar("--signal", "#2a6b55"), warm = cssVar("--warm", "#d9480f");
  const ink = cssVar("--ink", "#1f2328"), line = cssVar("--line", "#e2e4e8");

  // grid, 0.5 m
  ctx.strokeStyle = line; ctx.lineWidth = 1;
  ctx.beginPath();
  for (let gx = 0; gx <= ARENA.w + 1e-6; gx += 0.5) { ctx.moveTo(X(gx), Y(0)); ctx.lineTo(X(gx), Y(ARENA.h)); }
  for (let gy = 0; gy <= ARENA.h + 1e-6; gy += 0.5) { ctx.moveTo(X(0), Y(gy)); ctx.lineTo(X(ARENA.w), Y(gy)); }
  ctx.stroke();

  // the reference path
  ctx.save();
  ctx.globalAlpha = 0.5 * (1 - sim.pointerBlend);
  ctx.setLineDash([4, 5]); ctx.strokeStyle = ink; ctx.lineWidth = 1.2;
  ctx.beginPath();
  for (let i = 0; i <= 180; i++) {
    const [x, y] = figureEight((i / 180) * LAP);
    if (i) ctx.lineTo(X(x), Y(y)); else ctx.moveTo(X(x), Y(y));
  }
  ctx.stroke();
  ctx.restore();

  // candidate futures
  ctx.save();
  ctx.strokeStyle = signal; ctx.lineWidth = 1; ctx.globalAlpha = 0.16;
  for (const f of sim.futures) {
    ctx.beginPath();
    for (let i = 0; i < f.length; i += 2) {
      if (i) ctx.lineTo(X(f[i]), Y(f[i + 1])); else ctx.moveTo(X(f[i]), Y(f[i + 1]));
    }
    ctx.stroke();
  }
  ctx.restore();

  // the plan it follows
  if (sim.best.length) {
    ctx.strokeStyle = signal; ctx.lineWidth = 2.4; ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i < sim.best.length; i += 2) {
      if (i) ctx.lineTo(X(sim.best[i]), Y(sim.best[i + 1])); else ctx.moveTo(X(sim.best[i]), Y(sim.best[i + 1]));
    }
    ctx.stroke();
  }

  // where it has been
  ctx.save();
  ctx.strokeStyle = ink; ctx.globalAlpha = 0.28; ctx.lineWidth = 1.4;
  ctx.beginPath();
  for (let i = 0; i < sim.trail.length; i += 2) {
    if (i) ctx.lineTo(X(sim.trail[i]), Y(sim.trail[i + 1])); else ctx.moveTo(X(sim.trail[i]), Y(sim.trail[i + 1]));
  }
  ctx.stroke();
  ctx.restore();

  // target
  const [rx, ry] = reference(sim, 0);
  ctx.strokeStyle = ink; ctx.lineWidth = 1.6;
  ctx.beginPath(); ctx.arc(X(rx), Y(ry), 7, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.arc(X(rx), Y(ry), 1.8, 0, Math.PI * 2); ctx.fillStyle = ink; ctx.fill();

  // drone: an X with four rotors, orange while it acts on a late plan
  const cx = X(sim.x), cy = Y(sim.y), r = 9;
  const body = sim.late ? warm : ink;
  ctx.strokeStyle = body; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - r, cy - r); ctx.lineTo(cx + r, cy + r);
  ctx.moveTo(cx + r, cy - r); ctx.lineTo(cx - r, cy + r);
  ctx.stroke();
  for (const [dx, dy] of [[-r, -r], [r, -r], [-r, r], [r, r]]) {
    ctx.beginPath(); ctx.arc(cx + dx, cy + dy, 4.5, 0, Math.PI * 2); ctx.stroke();
  }
}

export function PlannerHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [computerId, setComputerId] = useState("gpu");
  const [error, setError] = useState<number | null>(null);
  const computerRef = useRef(COMPUTERS[0]);
  const simRef = useRef<Sim | null>(null);

  useEffect(() => {
    computerRef.current = COMPUTERS.find((c) => c.id === computerId) ?? COMPUTERS[0];
  }, [computerId]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const sim = newSim();
    simRef.current = sim;
    const rand = rng(7);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0, visible = true, acc = 0, last = performance.now(), lastReport = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      draw(canvas, sim);
    };
    const renderStrip = () => {
      const el = stripRef.current;
      if (!el) return;
      const cells = el.children;
      for (let i = 0; i < STRIP; i++) {
        const v = sim.strip[sim.strip.length - STRIP + i];
        (cells[i] as HTMLElement).dataset.state = v === undefined ? "" : v ? "ok" : "late";
      }
    };
    const report = () => {
      const e = sim.errors;
      setError(e.length ? Math.sqrt(e.reduce((a, b) => a + b * b, 0) / e.length) : null);
    };

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) { last = now; return; }
      acc += Math.min(0.1, (now - last) / 1000); last = now;
      while (acc >= DT) { step(sim, computerRef.current, rand); acc -= DT; }
      draw(canvas, sim);
      renderStrip();
      if (now - lastReport > 500) { report(); lastReport = now; }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting && !document.hidden; });
    io.observe(canvas);
    const onVisibility = () => { visible = !document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      for (let i = 0; i < 120; i++) step(sim, computerRef.current, rand);
      resize(); renderStrip(); report();
    } else {
      resize();
      raf = requestAnimationFrame(tick);
    }

    const toArena = (ev: PointerEvent): [number, number] => {
      const b = canvas.getBoundingClientRect();
      const s = Math.min(b.width / ARENA.w, b.height / ARENA.h);
      const ox = (b.width - ARENA.w * s) / 2, oy = (b.height - ARENA.h * s) / 2;
      return [
        Math.max(0.2, Math.min(ARENA.w - 0.2, (ev.clientX - b.left - ox) / s)),
        Math.max(0.2, Math.min(ARENA.h - 0.2, (ev.clientY - b.top - oy) / s)),
      ];
    };
    let release = 0;
    const onMove = (ev: PointerEvent) => { window.clearTimeout(release); sim.pointer = toArena(ev); };
    const onLeave = () => { release = window.setTimeout(() => { sim.pointer = null; }, 600); };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onMove);
    canvas.addEventListener("pointerleave", onLeave);
    canvas.addEventListener("pointerup", (ev) => { if (ev.pointerType !== "mouse") onLeave(); });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect(); io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      window.clearTimeout(release);
    };
  }, []);

  const computer = COMPUTERS.find((c) => c.id === computerId) ?? COMPUTERS[0];

  return (
    <figure className="planner">
      <div className="planner-stage">
        <canvas
          aria-label="A drone following a moving target by trying many possible futures each step and flying the best one"
          ref={canvasRef}
          role="img"
        />
        <div aria-hidden="true" className="planner-strip" ref={stripRef} title="Each mark is one control step: green on time, orange late">
          {Array.from({ length: STRIP }, (_, i) => <i key={i} />)}
        </div>
      </div>
      <div className="planner-controls">
        <div aria-label="Computer on board" className="planner-switch" role="radiogroup">
          {COMPUTERS.map((c) => (
            <button
              aria-checked={c.id === computerId}
              key={c.id}
              onClick={() => setComputerId(c.id)}
              role="radio"
              type="button"
            >
              <span>{c.label}</span>
              <small title="Rough power draw">{c.power}</small>
            </button>
          ))}
        </div>
        <p className="planner-readout" aria-live="polite">
          <span><strong>{computer.samples}</strong> futures per step</span>
          <span><strong>{error === null ? "–" : `${error.toFixed(2)} m`}</strong> tracking error</span>
        </p>
      </div>
      <figcaption>
        A toy drone planning live in your browser: every step it tries {computer.samples} possible futures (thin lines) and
        flies the best; orange marks a late plan. Steer the target with your pointer and switch computers to see what a
        smaller one costs. Watts are rough power draw; the planner settings are illustrative, and the real measurements are
        on <a href="/research">the Exploration page</a>. Drone 2027 is a projection: NVIDIA&rsquo;s Jetson Orin Nano 2, due
        in the first half of 2027 and claimed to run inference twice as fast, with a leaner world model.
      </figcaption>
    </figure>
  );
}
