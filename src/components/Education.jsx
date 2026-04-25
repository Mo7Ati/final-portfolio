import Dot, { Cmd } from "./shared.jsx";

export default function Education() {
  return (
    <section id="education" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="cat education.md" />

      <div className="mt-5 group relative overflow-hidden border border-term-border rounded-[4px] bg-ink-panel transition-all duration-500 hover:border-amber-accent hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,180,84,0.18)]">
        {/* animated ambient sweep */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500 edu-sweep"
        />
        {/* hover-only radial glow following top-left */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(600px circle at 0% 0%, rgba(255,180,84,0.08), transparent 40%)",
          }}
        />

        <div className="relative p-4 sm:p-5 lg:p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
            <h3 className="font-mono text-xl text-term-fg font-medium transition-colors group-hover:text-amber-accent">
              B.Sc — Computer Systems Engineering
            </h3>
            <div className="hidden sm:inline-flex font-mono text-sm text-amber-accent border border-amber-dim px-2 py-[2px] rounded-[2px] items-center gap-1.5 tracking-[0.1em] self-start shrink-0">
              <Dot />
              Sep 2022 → Present
            </div>
          </div>
          <div className="mt-1.5 flex flex-wrap justify-between items-baseline gap-x-2 font-mono text-sm">
            <span className="text-amber-accent">Al Azhar University — Gaza</span>
            <span className="sm:hidden mt-2 text-term-dimmer text-xs tracking-[0.1em]">
              Sep 2022 → Present
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
