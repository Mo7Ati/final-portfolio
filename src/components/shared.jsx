import { cn } from "../lib/cn";

export function Prompt({ className }) {
  return (
    <span
      className={cn(
        "font-mono whitespace-nowrap text-base",
        className
      )}
    >
      <span className="text-amber-accent">mohammed</span>
      <span className="text-term-dim">@</span>
      <span className="text-term-blue">portfolio</span>
      <span className="text-term-dim">:</span>
      <span className="text-term-yellow">~</span>
      <span className="text-term-fg">$</span>
    </span>
  );
}

export function Cmd({ cmd, className }) {
  return (
    <div
      className={cn(
        "flex flex-nowrap items-baseline gap-2 whitespace-nowrap overflow-hidden",
        className
      )}
    >
      <Prompt />
      <span className="font-mono text-term-fg text-base truncate">
        {cmd}
      </span>
    </div>
  );
}

export function Chip({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[5px] whitespace-nowrap font-mono text-sm px-2 py-[3px] bg-ink-chip border border-term-border rounded-[2px] text-term-fg",
        className
      )}
    >
      <Dot />
      {children}
    </span>
  );
}

export default function Dot({ className }) {
  return (
    <span
      className={cn(
        "inline-block w-[6px] h-[6px] rounded-full bg-amber-300 mr-[6px] align-[1px]",
        className
      )}
    />
  );
}

export function TrafficDots({ size = "md", className }) {
  const dim = size === "sm" ? 10 : 11;
  return (
    <div className={cn("flex", size === "sm" ? "gap-[5px]" : "gap-2", className)}>
      <span className="rounded-full bg-[#ff5f56]" style={{ width: dim, height: dim }} />
      <span className="rounded-full bg-[#ffbd2e]" style={{ width: dim, height: dim }} />
      <span className="rounded-full bg-[#27c93f]" style={{ width: dim, height: dim }} />
    </div>
  );
}
