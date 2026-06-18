"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-40 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 border-t border-black/[0.07] dark:border-white/[0.07]"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-[10px] font-mono text-zinc-500 dark:text-zinc-600 tracking-[0.25em] mb-16 uppercase"
      >
        06 ──
      </motion.p>

      {/* Big CTA heading */}
      <div className="mb-16">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-extrabold leading-[0.9] tracking-tight text-zinc-900 dark:text-white"
            style={{ fontSize: "clamp(44px, 10vw, 150px)" }}
          >
            GET IN
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12, ease: EASE }}
            className="font-extrabold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(44px, 10vw, 150px)",
              background:
                "linear-gradient(135deg, #a78bfa 0%, #818cf8 40%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            TOUCH
          </motion.h2>
        </div>
      </div>

      {/* Availability + tagline */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex flex-col gap-3 mb-10"
      >
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500">
            Open to opportunities
          </span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
          Have a project in mind, a role to discuss, or just want to say hi?
          My inbox is always open.
        </p>
      </motion.div>

      {/* Email link */}
      <motion.a
        href="mailto:matheofontainepro@gmail.com"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="group inline-flex items-center gap-3 text-sm sm:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors duration-200 border-b border-black/10 dark:border-white/10 pb-1 hover:border-black/40 dark:hover:border-white/40 break-all sm:break-normal"
      >
        matheofontainepro@gmail.com
        <motion.span
          className="text-violet-400"
          initial={{ x: 0, y: 0 }}
          whileHover={{ x: 4, y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowUpRight size={22} />
        </motion.span>
      </motion.a>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex gap-6 mt-10"
      >
        {[
          {
            icon: GithubIcon,
            label: "GitHub",
            href: "https://github.com/matheoftne",
          },
          {
            icon: LinkedinIcon,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/matheoftnepro/",
          },
        ].map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors duration-200"
          >
            <Icon size={14} />
            {label}
            <ArrowUpRight size={11} className="opacity-60" />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
