import { STAT_ITEMS } from "../data/stats"

export default function StatsBlock() {
  return (
    <div className="py-4 border-y border-dashed border-term-border font-mono flex flex-col gap-2 sm:grid sm:grid-cols-3 sm:gap-5">
      {STAT_ITEMS.map(([k, v, small]) => (
        <div
          key={k}
          className="flex justify-between items-baseline sm:block"
        >
          <div className="text-sm text-term-dimmer tracking-[0.15em]">{k}</div>
          <div className="text-base text-amber-accent sm:mt-1">
            {v} {small != null && <span className="text-term-dim text-xl">{small}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}
