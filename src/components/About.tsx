"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATEMENT =
  "I turn ideas into digital products that are fast, beautiful, and built to last.";

const wordVariant = {
  hidden: { y: "115%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.045 },
  }),
};

export default function About() {
  const words = STATEMENT.split(" ");

  return (
    <section id="about" className="py-20 lg:py-40 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mb-20"
      >
        <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 tracking-[0.25em] mb-4 uppercase">
          04 ──
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          ABOUT
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Word-by-word reveal statement */}
        <motion.p
          className="text-3xl lg:text-4xl font-semibold leading-tight text-zinc-800 dark:text-zinc-200 tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom mr-[0.28em]"
            >
              <motion.span
                className="inline-block"
                custom={i}
                variants={wordVariant}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="space-y-5 text-zinc-600 dark:text-zinc-400 text-[15px] leading-relaxed"
        >
          <p>
            I&apos;m Matheo, a software engineer based in France. I&apos;m
            currently studying at Epitech, where intense project-based learning
            has shaped me into someone who ships first and iterates fast.
          </p>
          <p>
            I live at the intersection of engineering and design — I care about
            code that&apos;s maintainable and interfaces that are a pleasure to
            use. Whether it&apos;s a backend API, a UI component, or a
            performance bottleneck, I like owning the full picture.
          </p>
          <p>
            When I&apos;m not building things, I&apos;m experimenting with 3D
            graphics in Three.js, contributing to open source, or exploring
            whatever&apos;s trending in the web ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
