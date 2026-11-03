<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## MyTani design workflow

- Read `DESIGN.md` before making visual, interaction, or copy decisions. It is the current proposed direction and identifies facts that still require confirmation.
- Use the installed `design-system` skill when changing tokens or component specifications; use `frontend-design` or `design-taste-frontend` for visual direction; use `apple-design` for translucent materials and fluid interaction. Apply `ui-ux-pro-max` for accessibility and responsive review. Use `imagegen` only when imagery is needed and requested or justified.
- Reuse the semantic tokens in `src/styles/tokens.css` and the glass surface utilities in `src/app/globals.css`. Keep contrast, keyboard focus, reduced-motion and reduced-transparency fallbacks intact.
- Preserve the user's supplied logo. Approximate palette samples and the proposed fonts are not final brand assets. Do not state draft specifications, certifications, business claims, or social impact as verified facts without confirmation.
- The existing homepage is a starter. Do not treat the design-system setup as approval to implement the full landing page.

## Git workflow

- After completing a requested change, commit and push it to the configured GitHub remote when possible. Keep commits focused and use a short, single-line conventional commit message, such as `feat: add product section`.
- Do not include a commit body, co-author trailer, or other attribution trailer. Do not include unrelated changes or secrets. Report any push failure and keep local work intact.
