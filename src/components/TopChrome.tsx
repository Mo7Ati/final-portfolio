import { useState, useEffect } from "react"
import { Link } from "react-router"
import { NAV_ITEMS } from "../data/site"
import { TrafficDots } from "./shared"

export default function TopChrome() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <div className="sticky top-0 z-20 bg-[rgba(13,20,17,0.92)] backdrop-blur-md border-b border-term-border">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-7 lg:px-10 py-2.5 sm:py-3 grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4">
          <TrafficDots />
          <div className="font-mono text-xs text-term-dim text-center truncate">
            <span className="text-amber-accent">mohammed</span>@portfolio: ~ — zsh
          </div>

          <nav className="hidden lg:flex gap-1 font-mono text-sm">
            {NAV_ITEMS.map((x) => (
              <Link
                key={x}
                to={`/#${x}`}
                className="text-term-dim hover:text-amber-accent px-2.5 py-1 transition-colors"
              >
                $ {x}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-[30px] h-[26px] flex flex-col justify-center gap-[4px] border border-term-border rounded-[3px] px-[7px] py-[5px]"
          >
            <span className="h-[1.5px] bg-amber-accent" />
            <span className="h-[1.5px] bg-amber-accent w-[70%]" />
            <span className="h-[1.5px] bg-amber-accent" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-ink-deep/95 backdrop-blur-lg lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-term-border">
            <div className="font-mono text-sm text-term-dim">
              <span className="text-amber-accent">mohammed</span>@portfolio
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="font-mono text-amber-accent text-sm px-3 py-1 border border-term-border rounded-[3px]"
            >
              ✕ close
            </button>
          </div>
          <nav className="px-6 py-8 flex flex-col gap-4 font-mono">
            {NAV_ITEMS.map((x, i) => (
              <Link
                key={x}
                to={`/#${x}`}
                onClick={() => setOpen(false)}
                className="text-term-fg text-2xl hover:text-amber-accent flex items-baseline gap-3"
              >
                <span className="text-amber-accent text-sm">
                  0{i + 1}
                </span>
                $ {x}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
