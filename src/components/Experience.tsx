import { Cmd, Chip } from "./shared"
import { EXPERIENCE } from "../data/experience"

export default function Experience() {
  return (
    <section id="experience" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="cat experience.log" />
      <div className="mt-5 pl-6 border-l border-term-border relative">
        <div className="absolute -left-[6px] top-1.5 w-[11px] h-[11px] rounded-full bg-amber-accent shadow-dot-glow" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 mt-1.5 mb-4">
          <div className="font-mono text-2xl text-term-fg font-medium">
            {EXPERIENCE.title} <span className="text-amber-accent">@ {EXPERIENCE.company}</span>
          </div>
          <div className="font-mono text-sm text-term-dimmer sm:text-amber-accent sm:inline-flex sm:border sm:border-amber-dim sm:px-2 sm:py-[2px] sm:rounded-[2px] items-center gap-1.5 tracking-[0.1em] self-start shrink-0">
            {EXPERIENCE.period}
          </div>
        </div>

        <ul className="m-0 p-0 list-none font-mono text-base text-term-fg leading-[1.7]">
          {EXPERIENCE.bullets.map((b) => (
            <li key={b} className="pl-4 relative mb-1">
              <span className="absolute left-0  text-amber-accent">▸</span>
              <div className="text-base">
                {b}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {EXPERIENCE.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </section>
  )
}
