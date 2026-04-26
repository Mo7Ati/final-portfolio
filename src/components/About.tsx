import { Cmd } from "./shared"
import { ABOUT_ID, ABOUT_IDENTITY } from "../data/about"

export default function About() {
  return (
    <section id="about" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="cat about.md" />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-start">
        <div className="font-mono font-thin text-base sm:text-lg leading-[1.75] text-term-fg max-w-[62ch]">
          <div className="text-term-dimmer italic mb-3 text-sm"># About</div>
          <p className="mb-4">
            I build software the way I like to use it —{" "}
            <span className="text-amber-accent">fast</span>,{" "}
            <span className="text-amber-accent">intentional</span>, and a little{" "}
            <span className="text-amber-accent">opinionated</span>.
          </p>
          <p className="mb-4">
            I move fluently between <span className="text-amber-accent">Laravel APIs</span> and{" "}
            <span className="text-amber-accent">React interfaces</span>, designing schemas that
            scale, endpoints that don&apos;t leak, and UIs that feel responsive{" "}
            <span className="text-amber-accent">down to the millisecond</span>.
          </p>
          <p className="mb-4">
            I care less about stack debates and more about{" "}
            <span className="text-amber-accent">shipping</span> — writing code other engineers can
            read at 2 AM, refactoring without fear, and treating{" "}
            <span className="text-amber-accent">performance</span> and{" "}
            <span className="text-amber-accent">user experience</span> as the same conversation.
          </p>
          <p className="m-0">
            <span className="text-amber-accent">Curious by default</span>, allergic to bloat, and
            always one deploy away from learning something new.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
          <div className="rounded-[4px] border border-term-border bg-ink-panel/60 p-4 sm:p-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-xs sm:text-[13px] text-amber-accent tracking-[0.12em]">
                // IDENTITY
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-term-dimmer tabular-nums">
                {ABOUT_ID}
              </span>
            </div>

            <div className="mt-3 sm:mt-4 border-t border-dotted border-term-border" />

            <dl className="mt-3 sm:mt-4 font-mono text-xs sm:text-sm flex flex-col">
              {ABOUT_IDENTITY.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between gap-3 py-2 sm:py-2.5"
                >
                  <dt className="text-term-dimmer tracking-[0.04em] flex-shrink-0">
                    {k}
                  </dt>
                  <dd className="text-term-fg text-right break-words">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
