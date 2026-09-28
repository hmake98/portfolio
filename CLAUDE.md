# portfolio

Personal portfolio — single-page, dark-mode only. Next.js (App Router) + TypeScript + Tailwind CSS 4. Deployed on Vercel.

## Structure

- `src/app/` — routes (App Router). `layout.tsx` holds metadata/JSON-LD/fonts, `page.tsx` is the only page, `sitemap.ts`/`robots.ts` are Next's file-convention SEO routes.
- `src/components/` — presentational components, one per file, no barrel exports. All server components — no `"use client"` anywhere; don't add one unless a component actually needs interactivity/hooks.
- `public/` — static assets (resume, `llms.txt` for AI-crawler discovery).

Site is intentionally single-page: no nav bar, no blog. New sections go directly in `src/app/page.tsx`.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` / `npm run start` — production build/serve
- `npm run lint` / `npm run lint:fix` — ESLint (flat config, `eslint.config.mjs`)
- `npm run format` / `npm run format:check` — Prettier (Tailwind class sorting via `prettier-plugin-tailwindcss`)
- `npm run typecheck` — `tsc --noEmit`

Run lint + typecheck + format:check before considering a change done.

## Conventions

- ESLint pinned to `^9` — `eslint-config-next@16`'s bundled `eslint-plugin-react` is not yet ESLint 10-compatible (breaks on `context.getFilename`). Don't bump to ESLint 10 until that's fixed upstream.
- `eslint.config.mjs` imports `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` directly — do not reintroduce `FlatCompat`/`compat.extends("next/...")`, it crashes (eslint-config-next 16 ships flat config natively, not legacy eslintrc shareable configs).
- Colors/fonts are CSS variables in `src/app/globals.css`, mapped into Tailwind via `tailwind.config.js`. Both files only define tokens actually used by a component — check usage with `grep` before adding a new one back, and delete it from both places if you remove its last use.
- No component library, no client state management — keep it that way unless the site's scope actually grows.
- `metadata`/JSON-LD in `layout.tsx` must stay in sync with the bio in `page.tsx` — they're currently hand-copied, not derived from one source. Google Search Console verification (`metadata.verification`) isn't set up yet; add it for real once the site is registered, don't ship a placeholder string.
- All dependencies are kept at latest except `eslint` (see above). Run `npm outdated` before assuming something needs a bump.
