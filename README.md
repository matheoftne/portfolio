# Portfolio — Matheo Fontaine

Personal portfolio website. A modern, dark-themed and light-themed single-page site showcasing projects, experience, skills, and contact information.

## Deployment state
![Vercel Deploy](https://deploy-badge.vercel.app/vercel/project-y58e3?style=for-the-badge)

## Tech stack

- **Framework** — Next.js 16 (App Router) + React 19
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Fonts** — Inter (body) + Syne (headings)
- **Language** — TypeScript

## Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Intro, name, tagline, and CTA |
| 2 | Marquee | Scrolling tech/keyword band |
| 3 | Stats | Key numbers (years of exp, projects, etc.) |
| 4 | Projects | Personal and professional project showcase |
| 5 | Services | What I offer |
| 6 | Stack | Tech stack icons and list |
| 7 | About | Bio and personal details |
| 8 | Experience | Professional timeline |
| 9 | Contact | Contact links |
| 10 | Footer | — |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/
│   ├── layout.tsx      # Global wrappers (Nav, Cursor, ScrollProgress, GradientOrbs)
│   └── page.tsx        # Single-page composition of all sections
└── components/         # Section and UI components
```
