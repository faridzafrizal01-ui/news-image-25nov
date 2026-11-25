// The World Today: Wednesday 25 November 2026. The entry's image is the entry.png beside this
// file; this program puts a copy where the grader expects it, at /output/entry.png (or the
// directory MAKEFUN_OUTPUT_DIR names outside the grader's container). Node 22, standard
// library only.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
copyFileSync(source, join(outputDir, 'entry.png'));
