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
            I&apos;m a software engineer with a passion for building{" "}
            <span className="text-amber-accent">modern digital products</span> and solving real-world
            problems through technology.
          </p>
          <p className="mb-4">
            I enjoy working across the full development process — from{" "}
            <span className="text-amber-accent">schema design</span> and{" "}
            <span className="text-amber-accent">API architecture</span> to{" "}
            <span className="text-amber-accent">polished UI</span> — and I&apos;m continuously learning
            new tools and approaches.
          </p>
          <p className="m-0">
            With a few years of experience, I focus on creating{" "}
            <span className="text-amber-accent">efficient</span>,{" "}
            <span className="text-amber-accent">user-friendly</span>, and{" "}
            <span className="text-amber-accent">scalable</span> solutions.
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
