import { Link } from "react-router";
import { Cmd } from "./shared.jsx";

export default function Hero() {
  return (
    <section id="top">
      <Cmd cmd="whoami --verbose" />
      <h1
        className="font-mono font-bold leading-[1.02] tracking-[-0.02em] text-term-fg text-7xl"
        style={{ margin: "14px 0 6px" }}
      >
        Mohammed
        <br />
        <span className="text-amber-accent glow-text">Abd Al Ati</span>
        <span
          className="inline-block w-[0.45em] h-[0.9em] align-[-0.1em] ml-[10px] animate-blink"
          style={{ backgroundColor: '#ffb454', boxShadow: '0 0 12px rgba(255,180,84,0.28)' }}
          aria-hidden
        />
      </h1>
      <p
        className="font-mono text-term-dim max-w-[60ch] text-lg"
        style={{ lineHeight: 1.65, margin: "16px 0 24px" }}
      >
        <span className="text-amber-accent">&gt;</span> Software engineer. I turn rough ideas into products that ship — Laravel holding the line on the backend, React making it feel effortless up front. Obsessed with the details users never notice, except when they're missing.
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7">
        <Link
          to="/#projects"
          className="font-mono text-base px-4 py-[9px] border border-amber-accent bg-amber-soft text-amber-accent rounded-[3px] inline-flex items-center gap-2 hover:bg-amber-dim/40 transition-colors"
        >
          ./view_projects <span>→</span>
        </Link>
        <Link
          to="/#contact"
          className="font-mono text-base px-4 py-[9px] border border-term-border bg-ink-panel text-term-fg rounded-[3px] hover:border-amber-accent hover:text-amber-accent transition-colors"
        >
          ./get_in_touch
        </Link>
      </div>
    </section>
  );
}
