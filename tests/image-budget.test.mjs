import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { test } from "node:test";
import sharp from "sharp";

const photos = [
  ["coconut-hero.webp", 1000, 1000],
  ["coconut-detail.webp", 800, 1067],
  ["coconut-handling.webp", 1440, 1080],
];

test("homepage photos stay within the compressed image budget", async () => {
  let total = 0;
  for (const [name, width, height] of photos) {
    const path = new URL(`../public/images/${name}`, import.meta.url);
    const bytes = (await stat(path)).size;
    assert.ok(bytes <= 300 * 1024, `${name} exceeds 300 KiB`);
    const metadata = await sharp(await readFile(path)).metadata();
    assert.equal(metadata.format, "webp");
    assert.equal(metadata.width, width);
    assert.equal(metadata.height, height);
    assert.equal(metadata.exif, undefined, `${name} contains camera metadata`);
    total += bytes;
  }
  assert.ok(total <= 700 * 1024, `Photos total ${total} bytes; budget is 700 KiB`);
});
