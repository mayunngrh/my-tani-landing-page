This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Internationalization

English and Indonesian are available at `/en` and `/id`, including the design system preview. Unprefixed page URLs redirect using a saved language choice, then the browser's `Accept-Language` preferences, with English as the fallback. The language dropdown saves the choice for one year and preserves the current page, query parameters and anchor. The site does not request geographic location.

Translations live in `src/i18n/id.json`. English source text is the dictionary key; `getTranslator` checks keys at compile time. Translate new visible text, accessible labels and metadata when adding content.

With Node.js 22.18+ (native TypeScript support), run `npm run test:i18n` for language negotiation tests. For production HTTP checks, run `npm run build`, start `npm run start -- --port 3012 --hostname 127.0.0.1`, then run `npm run test:i18n:http` in another terminal. `MYTANI_TEST_URL` can override the test server URL.

## Photo performance

The three supplied coconut photos are resized, orientation-corrected WebP exports with camera metadata removed. Run `npm run test:images` to enforce the 300 KiB per-photo / 700 KiB combined source budget and check dimensions and metadata. The homepage uses responsive `next/image` delivery, a high-priority hero, and lazy-loaded lower photos. Originals and videos remain outside the deployed site. Source-photo provenance is recorded in `DESIGN.md`.

## Content coverage checks

After `npm run build`, run `npm run test:content` to verify the approved specifications, grade ranges, packing, MOQ/trade terms and product applications in both rendered languages, and preserve navigation section order. `docs/content-review.md` records coverage and the one unresolved water-content measurement.
