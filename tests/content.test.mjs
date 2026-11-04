import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

// Verify rendered section text, excluding serialized dictionaries and client scripts.
function sectionText(html, id) {
  const section = html.split(`<section id="${id}"`)[1]?.split("</section>")[0];
  assert.ok(section, `Missing section: ${id}`);
  return section.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
}

for (const locale of ["en", "id"]) {
  test(`${locale}: approved source details are in rendered content`, async () => {
    const html = await readFile(new URL(`../.next/server/app/${locale}.html`, import.meta.url), "utf8");
    const specs = sectionText(html, "specifications");
    for (const text of ["11–12", "20–30%", "45–60", "25–30", "Mesh/PP", "Grade A", "Grade B", "Grade C"]) {
      assert.ok(specs.includes(text), `${locale}: missing ${text}`);
    }
    for (const weight of locale === "en" ? ["1,000–2,000+ g", "800–1,000 g", "500–800 g"] : ["1.000–2.000+ g", "800–1.000 g", "500–800 g"]) {
      assert.ok(specs.includes(weight), `${locale}: missing grade range ${weight}`);
    }
    assert.ok(!specs.includes("max 20%"), "Undefined water metric must not be published");
    const exportText = sectionText(html, "export");
    for (const text of ["14", "20", "EXW", "FOB", "CF"]) assert.ok(exportText.includes(text));
    const product = sectionText(html, "product");
    for (const text of locale === "en" ? ["Our advantages", "cargo", "Mesh/PP", "coconut milk", "oil", "sustainable"] : ["Keunggulan kami", "kargo", "Mesh/PP", "santan", "minyak", "berkelanjutan"]) {
      assert.ok(product.includes(text), `${locale}: missing source topic ${text}`);
    }
    const order = [...html.matchAll(/<section id="([^"]+)"/g)].map((match) => match[1]);
    assert.deepEqual(order, ["home", "about", "people", "product", "specifications", "process", "export", "insights", "contact"]);
  });
}
