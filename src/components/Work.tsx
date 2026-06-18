"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    num: "01",
    title: "PORTFOLIO V3",
    desc: "Personal portfolio with bento grid layout, dark mode, and full i18n support.",
    tags: ["React", "TypeScript", "Vite"],
    year: "2025",
    href: "https://github.com/matheofontaine",
  },
  {
    num: "02",
    title: "PROJECT TWO",
    desc: "Full-stack application featuring modern auth, real-time updates, and a REST API.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    year: "2025",
    href: "#",
  },
  {
    num: "03",
    title: "PROJECT THREE",
    desc: "Containerised microservices architecture with automated CI/CD and monitoring.",
    tags: ["Node.js", "Docker", "Redis"],
    year: "2024",
    href: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-40 max-w-[1440px] mx-auto px-8 lg:px-16">
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

      <div>
        {PROJECTS.map((p, i) => (
          <div key={p.num} className="relative">
            {/* Line draws in from left on entry */}
            <motion.div
              className="h-px bg-black/[0.07] dark:bg-white/[0.07]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: EASE }}
              style={{ originX: 0 }}
            />

            <motion.a
              href={p.href}
              target={p.href !== "#" ? "_blank" : undefined}
              rel={p.href !== "#" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 + i * 0.1, duration: 0.65, ease: EASE }}
              className="group flex items-start gap-6 md:gap-10 py-8 -mx-4 px-4 rounded-xl hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Number */}
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-700 mt-2 shrink-0 w-6">
                {p.num}
              </span>

              {/* Title + desc */}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors duration-300 mb-2">
                  {p.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="hidden lg:flex flex-wrap gap-2 shrink-0 pt-1">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] border border-black/10 dark:border-white/10 text-zinc-500 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Year */}
              <span className="hidden md:block text-xs text-zinc-400 dark:text-zinc-700 font-mono shrink-0 mt-2">
                {p.year}
              </span>

              {/* Arrow */}
              <motion.span
                className="text-violet-500 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                whileHover={{ x: 3, y: -3 }}
              >
                <ArrowUpRight size={20} />
              </motion.span>
            </motion.a>
          </div>
        ))}

        {/* Final closing line */}
        <motion.div
          className="h-px bg-white/[0.07]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ originX: 0 }}
        />
      </div>
    </section>
  );
}
