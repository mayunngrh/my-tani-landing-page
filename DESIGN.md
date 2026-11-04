# MyTani — website design system

Status: **proposed foundation** · Scope: B2B coconut export website · Visual direction: **Coconut Lens**

This document translates the supplied logo and the conversation into a working starting point. Palette samples, typography, layout, and the section plan are proposals. They are not a replacement for the original logo or official brand guidelines. No product or business claim in the source brief should be published without confirmation.

## Purpose and audience

MyTani's primary audience is international importers, distributors, and business buyers looking for semi-husked coconuts from Bali. The website should communicate the product and its origin clearly, help buyers find specifications and export information, and make it easy to enquire. A secondary story is the company's stated ambition to support local farmers and create employment; describe actual outcomes only when substantiated.

Voice: warm, direct, confident and practical. English is the proposed primary website language. Explain the product in plain language and avoid vague superlatives or claims about certification, supply, shipping, or impact without evidence.

## Creative direction: Coconut Lens

The logo's alternate coconut halves provide the visual signature. Translate their arc into large, intentional image masks, section silhouettes, or a distinctive graphic frame. Let the product and the people behind it remain recognizable. Olive, coconut-shell brown, and warm cream give the brand its grounded character; visible, layered liquid-glass surfaces bring the contemporary layer to the complete landing page.

- Make one strong visual gesture per section. Avoid turning the whole page into repeated rounded cards.
- Use the supplied logo as an asset, preserving its proportions, colors and distinctive letterforms. The full supplied image stays at `public/images/mytani-logo-source.png`; `public/images/mytani-wordmark.png` is a close crop from that original canvas for the website. Keep the cropped image proportional with `object-fit: contain`, never zoom or crop it again. A clean original vector or high-resolution transparent file is still welcome.
- Favor genuine imagery of semi-husked coconuts, local sourcing, packing and handling when available. Treat generated imagery as illustrative and never present it as evidence of real facilities, people or business activity.
- The previously generated moodboard is an exploratory reference, not an exact UI specification; its claims and photography are illustrative.

## Color

Approximate values sampled from the logo image; confirm against original brand files when available.

| Token | Value | Intended role |
| --- | --- | --- |
| `--color-olive-900` | `#262c14` | High-contrast text, dark glass fallback |
| `--color-olive-800` | `#39401e` | Brand olive, inverse surfaces, primary action |
| `--color-olive-700` | `#4a532b` | Supporting olive; verify contrast per use |
| `--color-brown-800` | `#512f1a` | Coconut-shell accent |
| `--color-cream-100` | `#f7f1e3` | Main background and light text on dark surfaces |
| `--color-cream-200` | `#ede4d3` | Quiet surface variation |
| `--color-husk-300` | `#e4d9c5` | Secondary surface, decorative accents |

Use semantic aliases such as `--color-surface-page`, `--color-text-primary`, and `--color-brand-primary` in components. Tailwind aliases include `bg-background`, `text-foreground`, `bg-brand`, `text-shell`, `bg-cream`, and `bg-husk`.

Check actual foreground/background combinations, including glass composited over images, for at least 4.5:1 for normal text and 3:1 for large text and essential UI boundaries. Do not assume a color on a moving or varied photograph stays readable. Provide an opaque backing or increase tint when needed. States must not rely on color alone.

## Typography

The logo's distinctive wordmark is its own asset; it is not a font for general UI. The present implementation uses offline-safe fallback stacks, so its display serif does not pretend to match the custom logo. A final typeface pairing can be chosen and licensed after visual review.

| Role | Token | Starting use |
| --- | --- | --- |
| Display | `--font-heading`, `--font-size-display` | Large brand moments; short lines, line-height 1.05 |
| Heading | `--font-heading`, `--font-size-heading` | Clear section titles |
| Lead | `--font-body`, `--font-size-lead` | Introductory copy |
| Body | `--font-body`, `--font-size-body` | Product details, navigation, forms; 1.6 line-height |
| Small | `--font-size-small` | Supporting labels; never use for essential dense content |

Avoid artificially mimicking the logo, over-tracked all-caps labels, and decorative microcopy. Keep body lines comfortably readable and text resizable. Tailwind aliases: `font-display` and `font-sans`.

## Layout and spacing

Base spacing uses a 4 px progression (`--space-1` through `--space-24`). `--space-section` scales from 4 rem to 8 rem, and `--space-page-gutter` from 1.25 rem to 3 rem. Cap normal content at `--container-content` (80 rem). Use fluid sizing rather than fixing a desktop composition to mobile.

Use the logo's half-circle motif with variation and purpose; it is not a required shape for every section. Contrast full-bleed photographs and calmer information sections. Keep product tables and contact forms straightforward rather than forcing curved layouts around the content.

Radii: small `0.5rem`, medium `1rem`, large `1.5rem`, pill `9999px`. Use pill geometry for a small number of controls, not for every surface. Target interactive controls at least 44 × 44 CSS pixels; the button sizing token defaults to 48 px in height.

## Liquid glass material

The material is a visibly translucent interface layer, with a softened backdrop, olive or cream tint, a fine reflective edge, and layered depth. Give every homepage section at least one deliberate glass surface so the material reads throughout the page while preserving clear hierarchy and accessible text. It is not an imitation of a particular operating system, nor does CSS blur by itself reproduce physical refraction.

### Implementation

The usable surface is `.glass-surface` in `src/app/globals.css`. Use `.glass-surface.glass-surface--dark` for the inverse variant. The classes set material and text only; the component must set its own layout, radius, padding and accessible semantic markup.

```tsx
<nav aria-label="Main navigation" className="glass-surface rounded-full px-6 py-3">
  {/* navigation links */}
</nav>
```

| Property | Default |
| --- | --- |
| Light tint | cream at 58% opacity by default; adjust per surface for contrast |
| Dark tint | deep olive at 80% opacity by default; adjust per surface for contrast |
| Backdrop | 24px blur, 165% saturation where supported |
| Edge | 1px, brighter upper rim with a soft lower edge |
| Depth | tinted shadow, glossy gradient, and inner edge highlights |
| Fallback | opaque cream or olive if blur is unsupported |

Use the material deliberately throughout the page: navigation and calls to action, narrative and product information, specifications, process steps, export details, FAQ, contact details, and footer. Let warm color washes or real photography sit behind important glass panels so refraction is visibly apparent. Avoid stacking translucent layers directly on each other, hiding essential text in busy photographs, or adding large animated distortions. Re-check contrast over the lightest and darkest imagery.

When the browser supports `prefers-reduced-transparency: reduce` or `prefers-contrast: more`, the glass becomes solid and drops blur and shadow. Since support for preference queries varies, the solid `@supports` fallback is also provided; test target browsers. Use accessible text and control contrast in every state. Limit blur areas on mobile to manage performance.

## Interaction and components

The starter components live in `src/components/ui`: `Button`, `ButtonLink`, `GlassPanel`, and `TextField`. The visual reference at `/design-system` shows their current appearance and states. The homepage contains the planned navigation, product details, export information and direct contact links. A contact form remains a future specification; the site does not currently collect or submit form data.

```tsx
import { Button, ButtonLink } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TextField } from "@/components/ui/text-field";

<Button type="submit">Send enquiry</Button>
<ButtonLink href="#product" variant="secondary">View product</ButtonLink>
<GlassPanel tone="dark">Supporting information</GlassPanel>
<TextField id="email" label="Email" type="email" required />
```

`Button` defaults to `type="button"`; use `type="submit"` only in an actual form. `ButtonLink` is for navigation, and has no disabled state. `TextField` requires a unique `id` and visible `label`, and supports `hint` or `error` with accessible descriptions. The example fields on the preview do not submit data.

- **Navigation:** semantic `nav`; readable light or dark glass; links and a clear enquiry CTA. Keep it available while scrolling, mark the current section with `aria-current`, provide a keyboard-operable mobile menu, visible focus, and a solid fallback.
- **Primary button:** high-contrast cream or olive glass with a clear bright edge, 48 px minimum height, pill radius, concise action label. Include hover, pressed, disabled, loading (if relevant) and focus-visible states. Keep the action prominent through contrast and placement.
- **Secondary button:** outlined or glass depending on context, with a visible boundary and sufficient contrast in every state. Use a real `button` for actions and a link for navigation.
- **Product details:** prefer a structured list or table for specifications and grades. Tables must remain readable at narrow widths, with headings associated with their data.
- **Inputs:** persistent visible labels, 16 px body text, 44 px minimum control height, clear focus and inline error messages. Avoid treating placeholder text as a label.
- **Image masks:** derive shapes from the coconut-half motif; keep product content visible and include meaningful alt text. Avoid using a mask when it conceals product details.
- **Contact CTA:** link to confirmed contact channels; do not make a form appear to submit until a real delivery mechanism exists.

## Motion and accessibility

Motion should clarify an action or a change of state. Use a 150–240 ms transition as a starting point for simple hover/focus changes; more complex gestures need deliberate, interruptible behavior. Do not place continuous motion behind reading content or animate each section by default. Honor `prefers-reduced-motion` with static or immediate state changes. Preserve visible focus indicators on every surface; on an inverse section, set a contrasting local `--color-focus`.

The selected navigation item uses a brief 240 ms horizontal slide with a restrained wiggle to make the section change clear. The site-wide reduced-motion rule shortens that movement to an almost immediate state change.

Use semantic landmarks, a logical heading hierarchy, keyboard-operable controls, alt text, adequate touch targets, and responsive layouts without horizontal page overflow. Never rely on color or motion alone to convey an action or status.

## Proposed homepage structure

Navigation → Hero → About → Farmer Story → Semi-husked Coconut → Specifications → Process → Export Information → FAQ → Contact → Footer. The About and Farmer Story sections form one continuous Story navigation group; Product and Specifications form the next group. Scrolling down must follow the navigation order without returning to an earlier item. Prioritize a clear enquiry path. The FAQ provides initial educational content; longer insights can be added when verified material is ready.

## Editorial and verification checklist

- Confirm legal company name, actual address, contact channels, imagery rights and business language.
- Verify product grade boundaries, maturity, husk percentage, shelf life, packing, MOQ, capacity and export terms before publishing. Clarify what the draft's moisture figure measures.
- Confirm any HACCP, quality, cargo partnership, sustainability, farm impact or export-track-record claims before publishing. Do not invent certifications, statistics or destination countries.
- The existing brand image and extracted colors are provisional; replace with approved source assets once provided.
- Validate the real UI at mobile and desktop widths, on light and dark imagery, with keyboard navigation, reduced-motion and reduced-transparency settings, and with no backdrop-filter support.

## Skill workflow

Project agents should follow `AGENTS.md` and select only the skills relevant to a task:

1. `design-system`: extend semantic tokens and component specifications.
2. `frontend-design` or `design-taste-frontend`: develop distinctive, brand-specific layouts.
3. `apple-design`: translucent materials and responsive, interruptible interaction.
4. `ui-ux-pro-max`: accessible controls, responsive layout and usability checks.
5. `imagegen`: produce reference or illustrative imagery when needed; clearly distinguish generated images from actual company photography.

These skills are already installed in the current environment. They are invoked as needed; this project does not silently install or duplicate them.

## Language selection

All pages have English (`/en`) and Indonesian (`/id`) routes. An explicit URL determines the language; otherwise, a saved `mytani-locale` cookie takes priority over the browser’s quality-ranked `Accept-Language` preferences. Regional Indonesian tags match Indonesian; unsupported languages fall back to English. No physical location is requested.

The custom language dropdown sits immediately before the contact button and shows “English” and “Indonesia” on both pages, including mobile. It has a localized accessible label, a minimum 44 px touch target, semantic surface/text/border tokens, and the shared visible keyboard focus. The floating cream glass menu marks the selected language with a checkmark, supports arrow keys, Home/End and letter navigation, and closes on Escape, outside press or focus leaving the control. Escape returns focus to the trigger. Choosing a different language saves a one-year preference and preserves the page path, query, and section anchor. Text, image descriptions, metadata, and enquiry messages are localized through the shared, typed dictionary in `src/i18n`.

## Supplied coconut photography

The homepage uses three real photos supplied in the Semi Husked Coconut folder: `IMG_3997.HEIC` for the hero, `IMG_3970.HEIC` for the product detail, and `IMG_3988.HEIC` for the people section. The last image shows coconut handling; do not describe it as a farm or assert ownership of the facility. Their web exports are `coconut-hero.webp` (1000 × 1000), `coconut-detail.webp` (800 × 1067), and `coconut-handling.webp` (1440 × 1080). Orientation is normalized and embedded metadata is stripped. Original HEIC and video files are not shipped. These real photographs do not carry illustrative-image labels.

Keep image exports below 300 KiB each and the combined source budget below 700 KiB. Use responsive Next.js image sizes, eager/high-priority loading only for the hero, lazy loading for lower photos, and existing reserved image frames to avoid layout shifts. Preserve the supplied logo.

## FAQ interaction

Each FAQ card is one native button, including its padding and visible answer, so the entire card toggles on click, Enter or Space. Cards expand independently. `aria-expanded`, `aria-controls`, and the expanded answer description expose the state and content. Expansion and collapse use a reversible 240 ms CSS grid transition with a short opacity transition and a plus-to-minus icon. The answer remains mounted so quick repeated clicks reverse the current transition. Reduced-motion preference disables these transitions. No animation library is added.

## Contact cards

The email, WhatsApp and location cards are single full-card links with decorative outline icons, visible labels and values, and the shared keyboard focus. Email opens a localized mail enquiry; WhatsApp opens the existing enquiry link; location opens a general Bali, Indonesia map search, without suggesting a confirmed office address. External links use a new tab with `noopener noreferrer`.

## Source-content coverage review

The bilingual source-copy review is tracked in `docs/content-review.md`. The owner confirmed publication of the supplied specifications and business claims. About, product applications, advantages, specifications, weight grades, packaging, and export details now reflect that approval in both languages. Source weight ranges are preserved, with boundary grading agreed in the quotation. The source term “CF” is retained as cost and freight without inventing a different formal code. The ambiguous “water content max 20%” is still excluded until its measurement basis is defined; both languages use the supplied English fresh-coconut-water statement. Owner approval is not independent verification or certification. Keep the checklist synchronized when corrections arrive.
