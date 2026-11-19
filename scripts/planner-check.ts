// Checks that the homepage planner shows what its caption claims: a slower computer tracks worse.
// node --experimental-strip-types scripts/planner-check.ts
import { COMPUTERS, DT, newSim, rng, step } from "../app/planner-sim.ts";

const SECONDS = 40, WARMUP = 5, SEEDS = 4;
const results = COMPUTERS.map((computer) => {
  let total = 0;
  for (let seed = 1; seed <= SEEDS; seed++) {
    const sim = newSim();
    const rand = rng(seed);
    let sum = 0, n = 0;
    for (let i = 0; i < SECONDS / DT; i++) {
      step(sim, computer, rand);
      if (i * DT > WARMUP) { sum += sim.errors[sim.errors.length - 1] ** 2; n++; }
    }
    total += Math.sqrt(sum / n) / SEEDS;
  }
  return { computer: computer.label, error: total };
});

for (const r of results) console.log(`${r.computer.padEnd(14)} ${r.error.toFixed(3)} m`);
const ordered = results.every((r, i) => i === 0 || r.error > results[i - 1].error * 1.3);
if (!ordered) {
  console.error("planner-check: each slower computer should track at least 30% worse than the faster one");
  process.exit(1);
}
console.log("planner-check: the slower the computer, the worse the tracking.");
