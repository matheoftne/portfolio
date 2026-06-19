"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STACK = [
  "Node.js",
  ".NET",
  "Docker",
  "CosmoDB",
  "AWS",
  "MongoDB",
  "TypeScript",
  "Python",
  "Azure",
  "Next",
  "Terraform",
  "GitHub",
  "Jenkins",
  "JavaScript",
  "SQLDB",
  "GitHub Actions",
  "PostgreSQL",
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 lg:py-40 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-20"
      >
        <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 tracking-[0.25em] mb-4 uppercase">
          03 ──
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          TECH STACK
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {STACK.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.035, duration: 0.4, ease: EASE }}
            className="px-5 py-2.5 rounded-full border border-zinc-200 dark:border-white/10 text-sm text-zinc-600 dark:text-zinc-400 hover:border-violet-400 dark:hover:border-violet-500/60 hover:text-violet-600 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-500/[0.06] transition-colors duration-200"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
