import type { ReactNode } from "react"
import { cn } from "../lib/cn"

type PromptProps = { className?: string }

export function Prompt({ className }: PromptProps) {
  return (
    <span
      className={cn(
        "font-mono whitespace-nowrap text-base",
        className,
      )}
    >
      <span className="text-amber-accent">mohammed</span>
      <span className="text-term-dim">@</span>
      <span className="text-term-blue">portfolio</span>
      <span className="text-term-dim">:</span>
      <span className="text-term-yellow">~</span>
      <span className="text-term-fg">$</span>
    </span>
  )
}

type CmdProps = { cmd: string; className?: string }

export function Cmd({ cmd, className }: CmdProps) {
  return (
    <div
      className={cn(
        "flex flex-nowrap items-baseline gap-2 whitespace-nowrap overflow-hidden",
        className,
      )}
    >
      <Prompt />
      <span className="font-mono text-term-fg text-base truncate">
        {cmd}
      </span>
    </div>
  )
}

type ChipProps = { children: ReactNode; className?: string }

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[5px] whitespace-nowrap font-mono text-sm px-2 py-[3px] bg-ink-chip border border-term-border rounded-[2px] text-term-fg",
        className,
      )}
    >
      <Dot />
      {children}
    </span>
  )
}

type DotProps = { className?: string; size?: number }

export default function Dot({ className, size = 6 }: DotProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-amber-300 mr-[6px] align-[1px]",
        className,
      )}
      style={{ width: size, height: size }}
    />
  )
}

type TrafficSize = "sm" | "md"

export function TrafficDots({ size = "md", className }: { size?: TrafficSize; className?: string }) {
  const dim = size === "sm" ? 10 : 11
  return (
    <div className={cn("flex", size === "sm" ? "gap-[5px]" : "gap-2", className)}>
      <span className="rounded-full bg-[#ff5f56]" style={{ width: dim, height: dim }} />
      <span className="rounded-full bg-[#ffbd2e]" style={{ width: dim, height: dim }} />
      <span className="rounded-full bg-[#27c93f]" style={{ width: dim, height: dim }} />
    </div>
  )
}
