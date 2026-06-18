"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    num: "01",
    title: "Frontend\nDevelopment",
    desc: "Pixel-perfect interfaces with React & Next.js. I care deeply about performance, accessibility, and animations that feel alive.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    num: "02",
    title: "Backend\nEngineering",
    desc: "Scalable APIs and robust server-side logic. From database design to containerised deployments that don't break at 3am.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker", "REST / GraphQL"],
  },
  {
    num: "03",
    title: "Full-Stack\nSolutions",
    desc: "End-to-end product ownership. I design the schema, write the API, build the UI, and ship it. No hand-offs needed.",
    tags: ["Architecture", "CI/CD", "Auth", "Deployment", "Monitoring"],
  },
];

function TiltCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 30,
  });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: EASE }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="bg-white dark:bg-[#070710] p-8 lg:p-10 flex flex-col h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
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
          02 ──
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          WHAT I DO
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.07] dark:bg-white/[0.07] border border-black/[0.07] dark:border-white/[0.07]">
        {SERVICES.map((svc, i) => (
          <TiltCard key={svc.num} delay={i * 0.12}>
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-700 mb-8">
              {svc.num}
            </span>
            <h3
              className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-5 whitespace-pre-line leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {svc.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-1 mb-8">
              {svc.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-zinc-500 dark:text-zinc-600 border border-black/[0.08] dark:border-white/[0.08] px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
