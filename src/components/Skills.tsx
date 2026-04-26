import { Cmd, Chip } from "./shared"
import { SKILL_GROUPS } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="ls -la ./stack/" />
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-stretch">
        {SKILL_GROUPS.map(([cat, items]) => (
          <div
            key={cat}
            className="group h-full flex flex-col border border-term-border bg-ink-panel rounded-[3px] px-4 py-4 transition-all duration-300 ease-out hover:border-amber-accent hover:-translate-y-1 hover:shadow-[0_10px_24px_-10px_rgba(255,180,84,0.3)] hover:bg-ink-chip"
          >
            <div className="font-mono text-xs text-term-dimmer tracking-[0.15em] mb-2.5 transition-colors group-hover:text-amber-accent">
              <span className="text-amber-accent">// </span>
              {cat.toUpperCase()}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((it) => (
                <Chip key={it}>{it}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
