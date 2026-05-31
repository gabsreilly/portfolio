# Gabriella — Portfolio

A minimal, editorial portfolio. Built like a small printed thing that
happens to live on the web.

> Set in **Instrument Serif** + **Geist**.
> Next.js 16 (App Router, Turbopack), Tailwind v4, `motion` for the
> one interactive flourish.

---

## Running it

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (all pages prerender statically)
npm run start    # serve the production build locally
npm run lint
```

## Editing the content

All the words and projects live in `content/` as plain TypeScript.
Edit a file, save, the site updates.

| File                      | What it controls                                    |
| ------------------------- | --------------------------------------------------- |
| `content/projects.ts`     | The **Selected Work** index and `/work/[slug]` pages |
| `content/writing.ts`      | The **Writing** list and `/writing/[slug]` pages    |
| `content/playground.ts`   | The **Playground** collage                          |
| `content/about.ts`        | The hero, About section, footer, and `<NowLine />`  |

Project & sketch tiles render a soft `tones` gradient as a placeholder
until you add real art. To use a real image: drop it into
`public/work/your-file.jpg` and set `image: "/work/your-file.jpg"` on
the project.

## File map

```
app/
  page.tsx                   ← the long editorial home
  layout.tsx                 ← fonts, metadata
  globals.css                ← design tokens (paper, ink, accent)
  work/[slug]/page.tsx       ← case-study detail
  writing/[slug]/page.tsx    ← essay detail
  not-found.tsx              ← 404, in character

components/
  site-header.tsx            ← sticky wordmark + nav
  site-footer.tsx            ← contact, colophon
  work-index.tsx             ← numbered list w/ cursor-following preview
  reveal.tsx                 ← scroll-reveal wrapper
  now-line.tsx               ← live local-time line in the hero

content/                     ← all editable copy lives here
```

## Design notes

- **Paper & ink** — `--paper`, `--paper-2`, `--ink`, `--ink-2`, `--ink-3`,
  with one warm accent (`--accent`) used sparingly. Tokens in
  `app/globals.css`.
- **Type stack** — display serif (Instrument), sans (Geist), mono
  (Geist Mono) for the marginalia labels.
- **Motion** — restrained. Each first-paint of a section fades-and-rises
  once via the `<Reveal />` IntersectionObserver. The cursor-following
  preview on the work index is the only "live" interaction; it's hidden
  on touch / coarse pointers and disabled entirely under
  `prefers-reduced-motion`.

## Deploying

This is a Vercel-ready Next.js app. Push to GitHub and import on
Vercel, or run `vercel` from this directory once the CLI is installed
(`npm i -g vercel`).

Everything prerenders statically — no env vars required to ship.
