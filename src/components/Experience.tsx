"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const ENTRIES = [
  {
    period: "2023 → Present",
    role: "Computer Science Student",
    org: "Epitech — European Institute of Technology",
    desc: "Intensive project-based curriculum: systems programming in C/C++, algorithms, full-stack web, DevOps, and a strong culture of shipping real software fast.",
  },
  {
    period: "2025",
    role: "Portfolio & Open Source",
    org: "Personal Projects",
    desc: "Designing and building side projects — 3D graphics experiments with Three.js, open-source contributions, and this very portfolio.",
  },
  {
    period: "2024",
    role: "Full-Stack Development",
    org: "Freelance & School Projects",
    desc: "Delivered web applications end-to-end: REST APIs, React frontends, PostgreSQL databases, deployed on Linux with Docker.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-40 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-20"
      >
        <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 tracking-[0.25em] mb-4 uppercase">
          05 ──
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          EXPERIENCE
        </h2>
      </motion.div>

      <div>
        {ENTRIES.map((entry, i) => (
          <div key={i} className="relative">
            {/* Animated border line */}
            <motion.div
              className="h-px bg-black/[0.12] dark:bg-white/[0.12]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
              style={{ originX: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: EASE }}
              className="grid grid-cols-1 lg:grid-cols-[180px_1fr_2fr] gap-4 lg:gap-12 py-10"
            >
              {/* Period */}
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-600 pt-0.5 whitespace-nowrap">
                {entry.period}
              </p>

              {/* Role + org */}
              <div>
                <p
                  className="text-base font-bold text-zinc-900 dark:text-white mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {entry.role}
                </p>
                <p className="text-xs text-violet-400">{entry.org}</p>
              </div>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {entry.desc}
              </p>
            </motion.div>
          </div>
        ))}

        {/* Final closing line */}
        <motion.div
          className="h-px bg-black/[0.12] dark:bg-white/[0.12]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{ originX: 0 }}
        />
      </div>
    </section>
  );
}
