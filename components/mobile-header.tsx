import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { profile } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/60 bg-background/75 px-4 py-3 backdrop-blur-2xl lg:hidden">
      <Link href="/#home" className="flex min-w-0 items-center gap-2.5">
        <div className="relative size-9 shrink-0 overflow-hidden rounded-xl ring-1 ring-border/80">
          <Image
            src={profile.logo}
            alt={`${profile.name} logo`}
            fill
            sizes="36px"
            className="object-cover"
            priority
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold leading-tight">
            {profile.name}
          </p>
          <p className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {profile.role}
          </p>
        </div>
      </Link>
      <div className="flex shrink-0 items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground"
          aria-label="Download résumé"
          nativeButton={false}
          render={<a href={profile.resume} download />}
        >
          <Download className="size-4" />
        </Button>
        <ThemeToggle className="shrink-0 text-muted-foreground" />
      </div>
    </header>
  )
}
