"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type Entry = {
  period: string;
  role: string;
  org: string;
  logo?: string;
  desc: string;
};

const ENTRIES: Entry[] = [
  {
    period: "Jan 2025 → Present",
    role: "Software Engineer Assistant .NET — Payment",
    org: "Betclic Group",
    logo: "/logos/betclic.svg",
    desc: "Part of the Payment domain team, owning microservices end-to-end: .NET backend, CI/CD pipelines, observability with Datadog, security with Wiz and SonarQube, hosted on AWS and Azure.",
  },
  {
    period: "Sep 2024 → Present",
    role: "Master in Computer Science",
    org: "Epitech — European Institute of Technology",
    logo: "/logos/epitech.svg",
    desc: "Intensive project-based curriculum: systems programming, algorithms, full-stack web, DevOps, and a strong culture of shipping real software fast.",
  },
  {
    period: "Mar 2024 → Jul 2024",
    role: "Full-Stack Developer Intern",
    org: "Aptimiz",
    logo: "/logos/aptimiz.svg",
    desc: "5-month internship building full-stack features with TypeScript, Next.js, Vue, and Nuxt — delivering UI components, REST APIs, and test coverage with Jest.",
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
                {entry.logo && (
                  <div className="h-10 w-32 mb-4 flex items-center overflow-hidden">
                    <img
                      src={entry.logo}
                      alt={entry.org}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
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
