import type { ReactNode } from "react"
import { MobileHeader } from "@/components/mobile-header"
import { MobileNav } from "@/components/mobile-nav"
import { SiteSidebar } from "@/components/site-sidebar"

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col">
      <SiteSidebar />
      <div className="flex min-w-0 flex-1 flex-col lg:pl-[280px]">
        <MobileHeader />
        <main className="flex-1">{children}</main>
      </div>
      <MobileNav />
    </div>
  )
}
