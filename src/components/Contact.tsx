import { useState } from "react"
import { EMAIL, SOCIAL_LINKS } from "../data/contact"
import { Cmd } from "./shared"
import { SocialIcon } from "./SocialIcons"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // clipboard unavailable — silently ignore
    }
  }

  return (
    <section id="contact" className="mt-12 sm:mt-14 scroll-mt-24">
      <Cmd cmd="cat ./get_in_touch" />

      <div className="mt-6 max-w-[760px] mx-auto text-center">
        <div className="font-mono text-xs text-term-dimmer tracking-[0.15em] mb-2">
          <span className="text-amber-accent">// </span>GET IN TOUCH
        </div>
        <h2 className="font-mono text-2xl sm:text-3xl text-term-fg font-semibold mb-3">
          <span className="text-amber-accent mr-2">&gt;</span>
          let&apos;s build something
        </h2>
        <p className="font-mono text-sm text-term-dim leading-[1.7] max-w-[56ch] mx-auto mb-7">
          Open to new projects and freelance work. Drop a line — I usually reply within a day.
        </p>

        <button
          type="button"
          onClick={copyEmail}
          aria-label={copied ? "Email copied to clipboard" : `Copy email ${EMAIL}`}
          className={
            "group inline-flex items-center gap-3 font-mono text-sm py-[10px] px-4 rounded-[3px] bg-ink-chip cursor-pointer mb-8 " +
            "transition-[border-color,background,box-shadow,transform] duration-200 " +
            "hover:-translate-y-[1px] hover:bg-amber-soft hover:shadow-amber-glow " +
            "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_rgba(255,180,84,0.35)] " +
            "max-[560px]:flex-wrap max-[560px]:px-[14px] max-[560px]:gap-x-[10px] max-[560px]:gap-y-[6px] " +
            "max-[400px]:text-xs max-[400px]:py-[9px] max-[400px]:px-3 " +
            (copied
              ? "border border-amber-accent bg-amber-soft"
              : "border border-term-border hover:border-amber-accent")
          }
        >
          <span className="text-amber-accent font-medium">$</span>
          <span className="text-term-fg tracking-[0.02em]">{EMAIL}</span>
          <span
            className={
              "ml-2 pl-3 border-l border-dashed border-term-border text-[11px] tracking-[0.12em] uppercase " +
              "transition-colors duration-200 group-hover:text-amber-accent " +
              "max-[560px]:ml-0 max-[560px]:pl-0 max-[560px]:border-l-0 " +
              (copied ? "text-amber-accent" : "text-term-dimmer")
            }
          >
            {copied ? "copied ✓" : "click to copy"}
          </span>
        </button>

        <ul
          aria-label="Social profiles"
          className="list-none m-0 p-0 flex flex-wrap items-center justify-center gap-3 max-[560px]:gap-[10px]"
        >
          {SOCIAL_LINKS.map(({ id, label, href }) => (
            <li key={id} className="m-0">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
                className={
                  "inline-flex items-center justify-center w-11 h-11 rounded-full " +
                  "border border-term-border bg-ink-chip text-term-dim no-underline " +
                  "transition-[color,border-color,background,box-shadow,transform] duration-200 " +
                  "hover:text-amber-accent hover:border-amber-accent hover:bg-amber-soft hover:-translate-y-[1px] " +
                  "focus-visible:outline-none focus-visible:text-amber-accent focus-visible:border-amber-accent focus-visible:shadow-[0_0_0_2px_rgba(255,180,84,0.3)] " +
                  "max-[400px]:w-10 max-[400px]:h-10"
                }
              >
                <SocialIcon id={id} />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-term-dim py-1.5 px-3 rounded-[3px] border border-term-border bg-ink-chip">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-accent shadow-dot-glow animate-pulse-dot" />
          <span>
            Currently <span className="text-term-fg font-medium">available</span> for new projects
          </span>
        </div>
      </div>
    </section>
  )
}
