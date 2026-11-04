import assert from 'node:assert/strict';
// Run against a local production server; override with MYTANI_TEST_URL if needed.
const base = process.env.MYTANI_TEST_URL ?? 'http://127.0.0.1:3012';
const cases = [
  ['/', {'accept-language':'id-ID,id;q=0.9,en;q=0.8'}, '/id'],
  ['/', {'accept-language':'en-AU,en;q=0.9'}, '/en'],
  ['/', {'accept-language':'zh-CN'}, '/en'],
  ['/', {'accept-language':'id',cookie:'mytani-locale=en'}, '/en'],
  ['/', {'accept-language':'en',cookie:'mytani-locale=id'}, '/id'],
  ['/', {'accept-language':'id',cookie:'mytani-locale=garbage'}, '/id'],
  ['/design-system?from=test', {'accept-language':'id'}, '/id/design-system?from=test'],
];
for(const [path,headers,target] of cases){
 const r=await fetch(base+path,{headers,redirect:'manual'});
 assert.equal(r.status,307);assert.equal(new URL(r.headers.get('location'),base).pathname+new URL(r.headers.get('location'),base).search,target);
 assert.match(r.headers.get('cache-control'),/no-store/);
 console.log('PASS redirect',path,target);
}
for(const locale of ['en','id'])for(const page of ['','/design-system']){
 const r=await fetch(base+'/'+locale+page,{headers:{'accept-language':locale==='en'?'id':'en',cookie:`mytani-locale=${locale==='en'?'id':'en'}`},redirect:'manual'});
 assert.equal(r.status,200);const html=await r.text();
 assert.match(html,new RegExp(`<html lang="${locale}"`));
 assert.ok(html.includes(locale==='en'?'English':'Indonesia'));
 assert.ok(html.includes(page ? (locale==='en'?'Design system | MyTani':'Sistem desain | MyTani') : (locale==='en'?'Rooted in Bali.':'Berakar di Bali.')));
 assert.match(html,/hreflang="en"/i);assert.match(html,/hreflang="id"/i);
 console.log('PASS explicit locale, metadata and content',locale+page);
}
for(const asset of ['/images/mytani-wordmark-transparent.png','/images/coconut-product.png']){
 const r=await fetch(base+asset,{redirect:'manual'});assert.equal(r.status,200);console.log('PASS asset bypass',asset);
}
const missing=await fetch(base+'/fr');assert.equal(missing.status,404);console.log('PASS unknown route returns 404');
