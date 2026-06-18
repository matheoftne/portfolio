"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const LINKS = ["Work", "Stack", "About", "Contact"];

function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-[14px]">
      <motion.span
        className="absolute inset-x-0 top-0 h-[1.5px] bg-zinc-800 dark:bg-white rounded-full"
        animate={open ? { y: 6.25, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="absolute inset-x-0 top-[6px] h-[1.5px] bg-zinc-800 dark:bg-white rounded-full"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute inset-x-0 bottom-0 h-[1.5px] bg-zinc-800 dark:bg-white rounded-full"
        animate={open ? { y: -6.25, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "backdrop-blur-xl bg-[#f5f5fa]/80 dark:bg-[#070710]/80 border-b border-black/[0.06] dark:border-white/[0.06]"
            : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white"
            style={{ fontFamily: "var(--font-syne)" }}
            onClick={() => setMenuOpen(false)}
          >
            MF<span className="text-violet-500 dark:text-violet-400">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8">
            {LINKS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: theme toggle + hamburger */}
          <div className="sm:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              className="flex items-center justify-center w-10 h-10 -mr-2"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <Hamburger open={menuOpen} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#f5f5fa] dark:bg-[#070710] sm:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {LINKS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.07,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setMenuOpen(false)}
                  className="text-5xl font-extrabold tracking-tight text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
