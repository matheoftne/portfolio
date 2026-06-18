@AGENTS.md

# Portfolio v4 — Matheo Fontaine

## Project overview
Personal portfolio website for Matheo Fontaine, a Software Engineer. Goal: a modern, polished single-page site showcasing projects, professional experience, skills, and contact information.

## Tech stack
- **Framework**: Next.js 16 (App Router) with React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Syne (headings) via `next/font/google`
- **Language**: TypeScript

## Design system
- **Background**: `#070710` (near-black dark)
- **Text**: `#fafafa`
- **Font vars**: `--font-inter` (body), `--font-syne` (headings via `--font-heading`)
- **Style direction**: modern, dark, animated — use the `ui-ux-pro-max` skill for all UI design and implementation decisions

## Page structure (`src/app/page.tsx`)
Single-page layout with these sections in order:
1. `Hero` — intro, name, tagline, CTA
2. `Marquee` — scrolling tech/keyword band
3. `Stats` — key numbers (years of experience, projects, etc.)
4. `Projects` — showcase of personal/professional projects
5. `Services` — what the user offers
6. `Stack` — tech stack icons/list
7. `About` — bio and personal details
8. `Experience` — professional timeline
9. `Contact` — contact form or links
10. `Footer`

## Layout (`src/app/layout.tsx`)
Global wrappers rendered on every page:
- `ScrollProgress` — top progress bar
- `Cursor` — custom cursor (adds `.has-custom-cursor` to body)
- `GradientOrbs` — ambient background blobs
- `Nav` — sticky navigation

## Components (`src/components/`)
All section and UI components live here as `.tsx` files. No sub-folders currently.

## Key conventions
- Use the `ui-ux-pro-max` skill for any UI design, component creation, or styling work
- Tailwind v4 (`@import "tailwindcss"` — no config file needed)
- `overflow-x: clip` on body (intentional — preserves IntersectionObserver on iOS Safari)
- `scroll-behavior: smooth` on html; paused under `prefers-reduced-motion`
- Path alias `@/` maps to `src/`
