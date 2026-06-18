"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ─── Project visual previews ──────────────────────────────── */

function PortfolioPreview() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #1a1040 100%)",
      }}
    >
      {/* Giant faint letters */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none"
        style={{
          fontSize: 108,
          fontWeight: 900,
          color: "rgba(139,92,246,0.08)",
          fontFamily: "var(--font-syne)",
          letterSpacing: "-0.04em",
        }}
      >
        MF
      </div>

      {/* Nav bar skeleton */}
      <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
        <div className="w-6 h-1.5 rounded-full bg-violet-400/30" />
        <div className="flex-1" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-10 h-1 rounded-full bg-white/[0.06]" />
        ))}
      </div>

      {/* Hero text skeleton */}
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <div className="h-2.5 rounded bg-violet-400/15 w-2/3" />
        <div className="h-1.5 rounded bg-white/[0.05] w-2/5" />
      </div>

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines overlay */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="pg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.025" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
    </div>
  );
}

function DashboardPreview() {
  const bars = [55, 80, 42, 90, 68, 50, 75, 60];
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0c2a40 50%, #0a1628 100%)",
      }}
    >
      {/* Sidebar */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-white/[0.025] border-r border-white/[0.05]">
        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="w-5 h-5 rounded bg-cyan-400/20" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-5 h-1 rounded-full bg-white/[0.06]" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="absolute left-14 right-3 top-3 bottom-3">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-1.5 mb-3">
          {[
            { val: "2.4K", color: "rgba(34,211,238,0.5)" },
            { val: "98%", color: "rgba(124,58,237,0.5)" },
            { val: "+12%", color: "rgba(52,211,153,0.5)" },
          ].map(({ val, color }) => (
            <div
              key={val}
              className="bg-white/[0.025] border border-white/[0.05] rounded p-1.5"
            >
              <div
                className="text-[7px] font-mono mb-1"
                style={{ color }}
              >
                {val}
              </div>
              <div className="h-0.5 rounded-full bg-white/[0.06]" />
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/[0.02] border border-white/[0.04] rounded p-2 flex items-end gap-1 h-28">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background:
                  i === 3
                    ? "linear-gradient(to top, #22d3ee80, #0891b260)"
                    : i === 6
                    ? "linear-gradient(to top, #7c3aed60, #4f46e540)"
                    : "rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 40%, rgba(34,211,238,0.08) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

function MicroservicesPreview() {
  const nodes = [
    { cx: 50, cy: 30, label: "API GW", color: "#7c3aed" },
    { cx: 20, cy: 60, label: "Auth",   color: "#22d3ee" },
    { cx: 80, cy: 60, label: "Users",  color: "#22d3ee" },
    { cx: 20, cy: 88, label: "Cache",  color: "#a78bfa" },
    { cx: 50, cy: 88, label: "DB",     color: "#a78bfa" },
    { cx: 80, cy: 88, label: "Queue",  color: "#a78bfa" },
  ];
  const edges = [
    [0, 1], [0, 2],
    [1, 3], [1, 4],
    [2, 4], [2, 5],
  ];

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #120e2a 0%, #1c1440 50%, #120e2a 100%)",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        aria-hidden
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="white"
            strokeOpacity="0.07"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r="8"
              fill={n.color}
              fillOpacity="0.1"
              stroke={n.color}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
            <text
              x={n.cx}
              y={n.cy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="3"
              fill="white"
              fillOpacity="0.7"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(124,58,237,0.15) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}

/* ─── Project data ──────────────────────────────────────────── */

const PROJECTS = [
  {
    num: "01",
    title: "Portfolio V4",
    subtitle: "This very site",
    desc: "Editorial/cinematic personal portfolio built with Next.js 16, Tailwind v4, and Framer Motion 12. Giant typography, scroll-driven animations, custom spring cursor, and word-by-word text reveals.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind v4"],
    year: "2025",
    href: "#",
    github: "https://github.com/matheofontaine",
    Visual: PortfolioPreview,
  },
  {
    num: "02",
    title: "Full-Stack App",
    subtitle: "Auth · REST API · Real-time",
    desc: "End-to-end web application with JWT authentication, a RESTful API, real-time WebSocket updates, and a responsive React dashboard.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Node.js"],
    year: "2025",
    href: "#",
    github: "https://github.com/matheofontaine",
    Visual: DashboardPreview,
  },
  {
    num: "03",
    title: "Microservices",
    subtitle: "Docker · CI/CD · Monitoring",
    desc: "Containerised microservices architecture with an API gateway, dedicated auth and user services, Redis caching, and a fully automated CI/CD pipeline.",
    tags: ["Node.js", "Docker", "Redis", "GitHub Actions"],
    year: "2024",
    href: "#",
    github: "https://github.com/matheofontaine",
    Visual: MicroservicesPreview,
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function Projects() {
  return (
    <section id="work" className="py-20 lg:py-40 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-20"
      >
        <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 tracking-[0.25em] mb-4 uppercase">
          01 ──
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          SELECTED WORK
        </h2>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/[0.07] dark:bg-white/[0.07] border border-black/[0.07] dark:border-white/[0.07]">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.65, ease: EASE }}
            className="bg-white dark:bg-[#070710] flex flex-col group"
          >
            {/* Visual preview */}
            <div className="relative h-52 overflow-hidden">
              <project.Visual />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

              {/* Links appear on hover */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full bg-white/80 dark:bg-[#070710]/80 backdrop-blur border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <GithubIcon size={14} />
                </a>
                {project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live site"
                    className="w-8 h-8 rounded-full bg-white/80 dark:bg-[#070710]/80 backdrop-blur border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              {/* Year badge */}
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-500 dark:text-zinc-600 bg-white/70 dark:bg-[#070710]/70 px-2 py-0.5 rounded border border-black/[0.06] dark:border-white/[0.06]">
                {project.year}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-700 block mb-1">
                    {project.num}
                  </span>
                  <h3
                    className="text-lg font-bold text-zinc-900 dark:text-white leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-600 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-zinc-500 dark:text-zinc-600 border border-black/[0.07] dark:border-white/[0.07] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mt-10 flex justify-end"
      >
        <a
          href="https://github.com/matheofontaine"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group"
        >
          More on GitHub
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </motion.div>
    </section>
  );
}
