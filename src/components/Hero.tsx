"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const wordVariants = {
  hidden: { y: "110%", opacity: 0 },
  show: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.3 + i * 0.18 },
  }),
};

function HeroArt() {
  return (
    <motion.div
      aria-hidden
      className="absolute right-0 top-0 bottom-0 hidden xl:flex items-center pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 2.5 }}
    >
      <div className="relative w-[560px] h-[560px]">
        {/* Main violet blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            top: "50%",
            left: "50%",
            marginTop: -210,
            marginLeft: -210,
            background:
              "radial-gradient(circle, rgba(124,58,237,0.38) 0%, rgba(109,40,217,0.14) 45%, transparent 70%)",
            filter: "blur(64px)",
          }}
          animate={{ scale: [1, 1.14, 1], opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cyan blob — upper right */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            top: 50,
            right: 20,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.3) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)",
            filter: "blur(56px)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />

        {/* Indigo blob — lower left */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 240,
            height: 240,
            bottom: 50,
            left: 30,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const rawY = useTransform(scrollY, [0, 700], [0, -110]);
  const rawOpacity = useTransform(scrollY, [0, 420], [1, 0]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-dvh flex flex-col justify-center max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 pt-20 overflow-hidden"
    >
      <HeroArt />

      {/* Scroll-parallax wrapper */}
      <motion.div className="relative z-10" style={{ y, opacity: rawOpacity }}>
        {/* Label */}
        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="text-xs tracking-[0.2em] text-zinc-600 dark:text-zinc-500 flex items-center gap-4 uppercase"
          >
            <span className="inline-block w-10 h-px bg-zinc-300 dark:bg-zinc-700" />
            Software Engineer · France
          </motion.p>
        </div>

        {/* Name lines */}
        <div className="overflow-hidden leading-none">
          <motion.h1
            custom={0}
            variants={wordVariants}
            initial="hidden"
            animate="show"
            className="leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(44px, 14vw, 210px)" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #22d3ee 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              MATHEO
            </span>
          </motion.h1>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.h1
            custom={1}
            variants={wordVariants}
            initial="hidden"
            animate="show"
            className="text-zinc-900 dark:text-white leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(44px, 14vw, 210px)" }}
          >
            FONTAINE
          </motion.h1>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: EASE }}
            style={{ originX: 0 }}
            className="hidden sm:block flex-1 h-px bg-black/10 dark:bg-white/10 mr-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm"
          >
            I build modern, performant web experiences — from solid architecture
            to pixel-perfect interfaces.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll hint — not parallaxed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-12 left-8 lg:left-16 flex items-center gap-3 text-zinc-500 dark:text-zinc-600 text-xs tracking-widest uppercase z-10"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={13} />
        </motion.span>
        Scroll
      </motion.div>
    </section>
  );
}
