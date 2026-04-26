import { Link } from "react-router"
import { Cmd } from "./shared"
import { PROJECTS } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="ls projects/ --detail" />

      <div className="sm:hidden mt-5 flex flex-col gap-2.5">
        {PROJECTS.map((p) => (
          <Link
            key={p.n}
            to={`/projects/${p.slug}`}
            className="group text-left border border-term-border bg-ink-panel hover:bg-ink-chip rounded-[3px] px-4 py-3.5 grid grid-cols-[1fr_auto] gap-2.5 items-start hover:border-amber-accent hover:translate-x-1 transition-all duration-300 ease-out"
          >
            <div>
              <div className="font-mono text-xs text-term-dimmer mb-0.5">{p.n}</div>
              <div className="font-mono text-base text-term-fg group-hover:text-amber-accent font-medium mb-1 transition-colors duration-300">{p.name}</div>
              <div className="font-mono text-sm text-term-dim mb-2">{p.desc}</div>
              <div className="flex flex-wrap gap-1 font-mono text-xs text-term-dim">
                {p.tags.map((t) => (
                  <span key={t}>[{t}]</span>
                ))}
              </div>
            </div>
            <div className="font-mono text-base text-term-dimmer group-hover:text-amber-accent group-hover:translate-x-1 transition-all duration-300">→</div>
          </Link>
        ))}
      </div>

      <div className="hidden sm:block mt-5 border-t border-term-border">
        {PROJECTS.map((p) => (
          <Link
            key={p.n}
            to={`/projects/${p.slug}`}
            className="w-full text-left grid grid-cols-[44px_1fr_auto] gap-5 items-center py-4 border-b border-term-border group hover:bg-ink-panel hover:translate-x-1 transition-all duration-300 ease-out px-2 -mx-2 cursor-pointer"
          >
            <div className="font-mono text-sm text-term-dimmer">{p.n}</div>
            <div>
              <div className="font-mono text-lg text-term-fg font-medium mb-0.5 group-hover:text-amber-accent transition-colors duration-300">
                {p.name}
              </div>
              <div className="font-mono text-sm text-term-dim mb-1.5">{p.desc}</div>
              <div className="flex flex-wrap gap-1 font-mono text-xs text-term-dim">
                {p.tags.map((t) => (
                  <span key={t}>[{t}]</span>
                ))}
              </div>
            </div>
            <div className="font-mono text-base text-term-dimmer group-hover:text-amber-accent group-hover:translate-x-1 transition-all duration-300">
              →
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
