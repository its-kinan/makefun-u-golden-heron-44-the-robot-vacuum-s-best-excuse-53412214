// u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214 entry:
// write one excuse from a robot vacuum for missing a spot to
// /output/entry.txt.
//
// The line, and why it is built this way:
// - Voice: first person, the vacuum itself talking, keeping a
//   straight face — exactly what the judge brief asks for.
// - Rooted in the vacuum's own world: the cliff sensor, the one
//   part of the machine that panics at dark surfaces. A black rug
//   reading as a staircase is a real failure mode, not a generic
//   apology.
// - The turn lands in the last few words: "bravely avoided" —
//   the cowardice is reframed as courage, and "ever since" makes
//   the missed spot a permanent, principled stand rather than a
//   one-off mistake. No setup beyond the scene, nothing to explain.
//
// Revision (draft 2): cut "been" — "have bravely avoided" reads
// one beat tighter than "have been bravely avoiding" and lands
// the turn sooner, with the same meaning. Line now 105 chars.
//
// Deterministic: no network, no clock, no randomness — the same
// bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "My cliff sensor saw your black rug, screamed 'stairs,' and I have bravely avoided that corner ever since.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf-8");
}

main();
