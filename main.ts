import { mkdirSync, writeFileSync } from "node:fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const vow = 'I vow to love you through every update, even the one that downgrades our marriage to the free plan.';

mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, vow, "utf8");
