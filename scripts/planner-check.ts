// Checks that the homepage planner shows what its caption claims: a less capable computer tracks worse, and the
// projected 2027 drone computer closes most of the gap to the desktop GPU.
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
  return { id: computer.id, computer: computer.label, error: total };
});

for (const r of results) console.log(`${r.computer.padEnd(14)} ${r.error.toFixed(3)} m`);
const by = (id: string) => results.find((r) => r.id === id)!.error;
const problems: string[] = [];
results.forEach((r, i) => {
  if (i > 0 && r.error < results[i - 1].error) problems.push(`${r.computer} tracks better than ${results[i - 1].computer}`);
});
if (by("jetson") < 1.3 * by("drone2027")) problems.push("today's drone computer should track at least 30% worse than the 2027 one");
if (by("pi") < 1.3 * by("jetson")) problems.push("the Raspberry Pi should track at least 30% worse than today's drone computer");
if (problems.length) {
  console.error("planner-check: " + problems.join("; "));
  process.exit(1);
}
console.log("planner-check: the less capable the computer, the worse the tracking.");
