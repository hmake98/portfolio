# Harsh Makwana — Portfolio

Single-page, dark-mode-only portfolio. Name and short bio, preferred tech stack, open-source project list, links, and location. No blog, no nav bar.

## Tech stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS 4 (CSS-variable color tokens in `src/app/globals.css`)
- **Fonts**: Geist Sans/Mono + Space Grotesk
- **Icons**: react-icons (Feather set)
- **Analytics**: Vercel Analytics + Speed Insights

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Purpose                |
| ---------------------- | ---------------------- |
| `npm run dev`          | Dev server             |
| `npm run build`        | Production build       |
| `npm run start`        | Serve production build |
| `npm run lint`         | ESLint                 |
| `npm run lint:fix`     | ESLint with auto-fix   |
| `npm run format`       | Prettier write         |
| `npm run format:check` | Prettier check (CI)    |
| `npm run typecheck`    | `tsc --noEmit`         |

## Structure

```
src/
  app/
    layout.tsx    # metadata, JSON-LD, fonts, global providers
    page.tsx      # the entire site
    globals.css   # color tokens + base styles
  components/
    Footer.tsx       # location + copyright
    OssShowcase.tsx  # open-source project list
public/
  resume.pdf
```

See [CLAUDE.md](CLAUDE.md) for conventions and known tooling constraints.

## License

MIT
