import Link from "next/link"
import { ArrowLeft, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center px-5 py-20">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
          <Compass className="size-6" />
        </div>
        <p className="mt-6 font-mono text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          404 — Page not found
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          This page took a different route.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist, but there&apos;s
          plenty more to explore.
        </p>
        <Button
          className="mt-6 h-10 rounded-full px-5 text-xs"
          nativeButton={false}
          render={<Link href="/" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to the portfolio
        </Button>
      </div>
    </div>
  )
}
