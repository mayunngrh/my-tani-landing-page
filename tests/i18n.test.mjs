import assert from "node:assert/strict";
import { test } from "node:test";
import { detectLocale, isLocale } from "../src/i18n/config.ts";

const cases = [
  [null, "en"],
  ["", "en"],
  ["id", "id"],
  ["id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7", "id"],
  ["en-AU,en;q=0.9,id;q=0.8", "en"],
  ["en;q=0.5,id;q=0.9", "id"],
  ["fr-FR,zh-CN;q=0.9", "en"],
  ["fr-FR,id-ID;q=0.8,en;q=0.6", "id"],
  ["ID-id, en;q=0.5", "id"],
  ["id;q=0,en;q=0.5", "en"],
  ["id;q=invalid,en;q=0.5", "en"],
  ["id;q=2,en;q=0.5", "en"],
  ["en;q=0.8,id;q=0.8", "en"],
  ["id;q=0.8,en;q=0.8", "id"],
  ["*", "en"],
];

for (const [header, expected] of cases) {
  test(`language preference ${JSON.stringify(header)} selects ${expected}`, () => {
    assert.equal(detectLocale(header), expected);
  });
}

test("only explicit supported locale segments are accepted", () => {
  for (const value of ["en", "id"]) assert.equal(isLocale(value), true);
  for (const value of [undefined, "", "fr", "en-US", "ID", "constructor", "__proto__"]) {
    assert.equal(isLocale(value), false);
  }
});
