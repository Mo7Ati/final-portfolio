export default function Photo() {
  return (
    <div className="group relative animate-float">
      {/* Ambient glow that intensifies on hover */}
      <div
        aria-hidden
        className="absolute -inset-2 rounded-[6px] bg-amber-accent/0 blur-2xl transition-all duration-500 group-hover:bg-amber-accent/25"
      />

      <div className="relative border border-term-border bg-ink-panel p-[6px] rounded-[3px] transition-all duration-500 group-hover:border-amber-accent group-hover:shadow-[0_0_30px_rgba(255,180,84,0.35)] group-hover:-translate-y-1">
        <div
          className="aspect-[3/4] overflow-hidden relative bg-ink-chip transition-[filter] duration-500 group-hover:[filter:grayscale(0)_contrast(1.1)]"
          style={{ filter: "grayscale(0.35) contrast(1.05)" }}
        >
          <img
            src="/mohammed.jpeg"
            alt="Mohammed Abd Al Ati"
            className="w-full h-full object-cover transition-all duration-[600ms] ease-out group-hover:scale-[1.06] group-hover:[mix-blend-mode:normal] group-hover:[filter:contrast(1.1)_brightness(1.08)]"
            style={{ mixBlendMode: "luminosity", filter: "contrast(1.15) brightness(1.05)" }}
          />

          {/* static scanlines layer */}
          <div className="scanlines absolute inset-0 pointer-events-none" />

          {/* moving scan beam */}
          <div
            aria-hidden
            className="absolute inset-x-0 h-[40%] pointer-events-none animate-scan opacity-70"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(255,180,84,0.18), transparent)",
            }}
          />

          {/* hover crosshair corners */}
          <span className="absolute top-2 left-2 w-3 h-3 border-l border-t border-amber-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-2 right-2 w-3 h-3 border-r border-t border-amber-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-amber-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-amber-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex justify-between items-center font-mono text-xs text-term-dimmer pt-[6px]">
          <span className="transition-colors group-hover:text-term-dim">ID_0x7A3F</span>
          <span className="text-amber-accent inline-flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-accent animate-pulse-dot" />
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
}
