export default function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 py-10 border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-700 tracking-widest uppercase">
        <span>Matheo Fontaine</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
