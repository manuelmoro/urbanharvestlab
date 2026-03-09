import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const cacheDirs = ['.astro', 'node_modules/.astro'];

await Promise.all(
  cacheDirs.map((dir) =>
    rm(resolve(process.cwd(), dir), {
      recursive: true,
      force: true,
    }),
  ),
);
