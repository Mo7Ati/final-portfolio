import Dot, { Cmd } from "./shared"
import { ABOUT_META } from "../data/about"

export default function About() {
  return (
    <section id="about" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="cat about.md" />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-10">
        <div className="font-mono font-thin text-lg leading-[1.75] text-term-fg max-w-[62ch]">
          <div className="text-term-dimmer italic mb-3 text-sm"># About</div>
          <p className="mb-4">
            I build software the way I like to use it —{" "}
            <span className="text-amber-accent">fast, intentional, and a little opinionated</span>.
          </p>
          <p className="mb-4">
            I move fluently between{" "}
            <span className="text-amber-accent">Laravel APIs</span> and{" "}
            <span className="text-amber-accent">React interfaces</span>, designing schemas that scale,
            endpoints that don&apos;t leak, and UIs that feel responsive down to the millisecond.
          </p>
          <p className="mb-4">
            I care less about stack debates and more about{" "}
            <span className="text-amber-accent">shipping</span> — writing code other engineers can read
            at 2 AM, refactoring without fear, and treating performance and user experience as the same
            conversation.
          </p>
          <p className="m-0">
            <span className="text-amber-accent">Curious by default</span>, allergic to bloat, and always
            one deploy away from learning something new.
          </p>
        </div>

        <div className="font-mono text-sm h-full flex flex-col justify-between lg:border-l lg:border-term-border lg:pl-6">
          {ABOUT_META.map(([k, v], i) => (
            <div
              key={k}
              className={`flex justify-between items-baseline flex-1 ${i === ABOUT_META.length - 1 ? "" : "border-b border-dotted border-term-border"
                }`}
            >
              <span className="text-term-dimmer tracking-[0.08em]">{k}</span>
              <span
                className={`flex items-center gap-1.5 ${k === "status" ? "text-amber-accent" : "text-term-fg"
                  }`}
              >
                {k === "status" && <Dot size={7} />} {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
