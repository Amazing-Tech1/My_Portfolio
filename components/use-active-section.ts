"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { sectionIds } from "@/lib/nav"

export function useActiveSection() {
  const pathname = usePathname()
  const [active, setActive] = useState("home")

  useEffect(() => {
    if (pathname !== "/") {
      return
    }

    let frame = 0

    const update = () => {
      const marker = window.scrollY + window.innerHeight * 0.35
      let current = sectionIds[0]

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) {
          current = id
        }
      }

      setActive(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  if (pathname.startsWith("/projects")) return "projects"
  if (pathname !== "/") return ""
  return active
}
