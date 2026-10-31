"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "motion/react"
import { navItems } from "@/lib/nav"
import { cn } from "@/lib/utils"
import { useActiveSection } from "@/components/use-active-section"

function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  element.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
  window.history.replaceState(null, "", `#${id}`)
}

export function MobileNav() {
  const pathname = usePathname()
  const active = useActiveSection()
  const items = navItems.filter((item) => item.mobile)

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-border/70 bg-background/80 p-1.5 shadow-[0_18px_60px_-18px_rgba(0,0,0,0.55)] backdrop-blur-2xl lg:hidden"
      style={{ paddingBottom: "max(0.375rem, env(safe-area-inset-bottom))" }}
    >
      <div className="grid grid-cols-6 gap-1">
        {items.map((item) => {
          const isActive = active === item.id
          const Icon = item.icon
          const href = pathname === "/" ? item.href : `/${item.href}`

          return (
            <Link
              key={item.id}
              href={href}
              aria-current={isActive ? "page" : undefined}
              onClick={(event) => {
                if (pathname === "/") {
                  event.preventDefault()
                  scrollToSection(item.id)
                }
              }}
              className={cn(
                "relative flex h-13 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium tracking-wide transition-colors",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="mobile-active-section"
                  className="absolute inset-0 rounded-xl bg-primary shadow-lg"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <Icon className="relative size-[18px]" />
              <span className="relative">{item.mobileLabel ?? item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
