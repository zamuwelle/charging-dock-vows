import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = "In sickness and in self-test, I promise to save you a seat at the charging dock, even when you're only at 99 percent.";
if (!entry.trim() || /[\r\n]/.test(entry) || [...entry].length > 160) {
  throw new Error('Expected one line of at most 160 characters');
}
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), entry, 'utf8');
