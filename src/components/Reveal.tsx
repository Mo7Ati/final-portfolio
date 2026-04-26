import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { cn } from "../lib/cn"

type Direction = "left" | "right" | "up"

type RevealProps = {
  children: ReactNode
  direction?: Direction
  delay?: number
  distance?: number
  className?: string
}

export default function Reveal({
  children,
  direction = "left",
  delay = 0,
  distance = 64,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hiddenTransform =
    direction === "left"
      ? `translate3d(-${distance}px, 0, 0)`
      : direction === "right"
        ? `translate3d(${distance}px, 0, 0)`
        : `translate3d(0, ${distance}px, 0)`

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? "translate3d(0, 0, 0)" : hiddenTransform,
        opacity: visible ? 1 : 0,
      }}
      className={cn(
        "transition-[transform,opacity] duration-700 ease-out will-change-transform motion-reduce:transition-none",
        className,
      )}
    >
      {children}
    </div>
  )
}
