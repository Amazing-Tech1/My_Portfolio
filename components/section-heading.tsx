import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Badge
        variant="outline"
        className="mb-4 h-6 gap-2 rounded-full border-border/80 bg-card/50 px-3 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase backdrop-blur"
      >
        <span className="size-1.5 rounded-full bg-primary" />
        {index} / {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
