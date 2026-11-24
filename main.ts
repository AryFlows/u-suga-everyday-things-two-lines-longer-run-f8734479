// Everyday Things, Two Lines — "Frost Toaster Sun"
// Writes the two-line explanation to entry.txt in the output dir.
//
// Why this pair: line 1 gives a 10-year-old one concrete picture (a sun
// in a box tanning bread) and nothing else; line 2 names exactly what the
// picture covers (heat browns bread like sun browns skin) and three things
// it leaves out (time scale, the pop-up, the lever), so the analogy stays
// honest instead of just clever.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line1 =
  "A toaster is a tiny sun trapped in a box that gives your bread a tan.";
const line2 =
  "It maps how heat browns bread the way sun browns skin, but it leaves out that the real sun takes hours, never pops your toast up, and has no lever to stop it.";

const entry = line1 + "\n" + line2 + "\n";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
