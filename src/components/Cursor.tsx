"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const dotX = useSpring(mx, { stiffness: 800, damping: 40 });
  const dotY = useSpring(my, { stiffness: 800, damping: 40 });
  const ringX = useSpring(mx, { stiffness: 150, damping: 20 });
  const ringY = useSpring(my, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.body.classList.add("has-custom-cursor");
    const move = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [mx, my]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-zinc-900 dark:bg-white pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-zinc-900/25 dark:border-white/25 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
