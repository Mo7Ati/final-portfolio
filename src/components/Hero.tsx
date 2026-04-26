import { Link } from "react-router"
import { HERO } from "../data/hero"
import { Cmd } from "./shared"

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <Cmd cmd="whoami --verbose" />
      <h1
        className="font-mono font-bold leading-[1.02] tracking-[-0.02em] text-term-fg text-7xl"
        style={{ margin: "14px 0 6px" }}
      >
        {HERO.firstName}
        <br />
        <span className="text-amber-accent glow-text">{HERO.lastName}</span>
        <span
          className="inline-block w-[0.45em] h-[0.9em] align-[-0.1em] ml-[10px] animate-blink"
          style={{ backgroundColor: "#ffb454", boxShadow: "0 0 12px rgba(255,180,84,0.28)" }}
          aria-hidden
        />
      </h1>
      <p
        className="font-mono text-term-dim max-w-[60ch] text-lg"
        style={{ lineHeight: 1.65, margin: "16px 0 24px" }}
      >
        <span className="text-amber-accent">&gt;</span> {HERO.lead}
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-7">
        <a
          href="/cv.pdf"
          download
          className="font-mono text-base px-4 py-[9px] border border-amber-accent bg-amber-soft text-amber-accent rounded-[3px] inline-flex items-center gap-2 hover:bg-amber-dim/40 transition-colors"
        >
          ./download_cv <span>↓</span>
        </a>
        <Link
          to="/#contact"
          className="font-mono text-base px-4 py-[9px] border border-term-border bg-ink-panel text-term-fg rounded-[3px] hover:border-amber-accent hover:text-amber-accent transition-colors"
        >
          ./get_in_touch
        </Link>
      </div>
    </section>
  )
}
