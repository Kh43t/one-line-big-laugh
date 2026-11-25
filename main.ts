// One Line, Big Laugh — entry program.
//
// Writes one original joke line (1-200 characters) to /output/entry.txt.
// Deterministic: the same fixed line on every run, no network, no clock,
// no randomness. The grader's gate checks the file is UTF-8 text of
// 1 to 200 characters and not only whitespace, so the program validates
// that before writing and exits non-zero if the line ever breaks it.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line. One joke, two beats: the spite marriage, then the anniversary
// argument that proves the prophecy wrong every single year.
const LINE =
  "The fortune teller said I'd die alone, so I married her out of spite. We argue about it every anniversary.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.txt");

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("joke line must be a single line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`joke line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("joke line must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
