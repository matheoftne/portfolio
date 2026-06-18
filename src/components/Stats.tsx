"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: 2, suffix: "+", label: "Years of\nexperience" },
  { value: 10, suffix: "+", label: "Projects\nshipped" },
  { value: 9, suffix: "", label: "Technologies\nmastered" },
  { value: 100, suffix: "%", label: "Commitment\nto quality" },
];

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), value);
      setCount(current);
      if (current >= value) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 lg:py-28 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: EASE }}
          >
            <p
              className="font-extrabold leading-none tracking-tight text-zinc-900 dark:text-white mb-3"
              style={{
                fontSize: "clamp(52px, 7vw, 96px)",
                fontFamily: "var(--font-syne)",
              }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-xs text-zinc-500 leading-snug whitespace-pre-line">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
