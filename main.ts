import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "You will one day inherit code written by a stranger who shares your name and none of your memory.";

if ([...entry].length > 120 || entry.trim().length === 0) {
  throw new Error("Entry must be 1 to 120 characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
