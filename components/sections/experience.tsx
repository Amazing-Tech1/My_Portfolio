import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  Quote,
  Sparkles,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { experience, profile, referee, training } from "@/lib/data"

export function ExperienceSection() {
  const role = experience[0]
  const course = training[0]

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={
            <>
              Leading the build,{" "}
              <span className="font-serif italic text-primary">not just</span>{" "}
              the code.
            </>
          }
          description="From hands-on full-stack delivery to owning architecture, reviews, client communication, and the team's pace."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="h-full overflow-hidden border border-border/60 bg-card/50 shadow-none backdrop-blur">
              <CardContent className="p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <BriefcaseBusiness className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                        {role.role}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {role.company} · {role.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <Badge
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/50 font-mono text-[10px] font-medium"
                    >
                      {role.period}
                    </Badge>
                    {role.current ? (
                      <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-500" />
                        Current
                      </span>
                    ) : null}
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
                  {role.description}
                </p>

                <div className="relative mt-6 border-l border-border/70 pl-5">
                  <span className="absolute -left-[4.5px] top-1.5 size-2 rounded-full bg-primary ring-4 ring-primary/15" />
                  <ul className="space-y-3.5">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative text-pretty text-[12px] leading-relaxed text-foreground/85"
                      >
                        <span className="absolute -left-[21px] top-2 size-1 rounded-full bg-border" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {role.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border/60 pt-5">
                  <div>
                    <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                      Promoted
                    </p>
                    <p className="mt-0.5 text-xs font-semibold">Team Lead · 2025</p>
                  </div>
                  <span className="h-7 w-px bg-border" />
                  <div>
                    <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                      Scope
                    </p>
                    <p className="mt-0.5 text-xs font-semibold">
                      Multiple concurrent products
                    </p>
                  </div>
                  <span className="h-7 w-px bg-border" />
                  <div>
                    <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                      Focus
                    </p>
                    <p className="mt-0.5 text-xs font-semibold">
                      Architecture & delivery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="space-y-4">
            <Reveal delay={0.08}>
              <Card className="border border-border/60 bg-card/50 shadow-none backdrop-blur">
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground ring-1 ring-border/60">
                      <GraduationCap className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{course.title}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {course.period}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
                    {course.description}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {course.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground"
                      >
                        <Sparkles className="mt-0.5 size-3 shrink-0 text-muted-foreground" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.14}>
              <Card className="relative overflow-hidden border border-border/60 bg-card/50 shadow-none backdrop-blur">
                <CardContent className="relative">
                  <Quote className="size-4 text-primary/70" />
                  <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                    {referee.name} · {referee.role}, {referee.company}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <a
                      href={`tel:${referee.phoneLink}`}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
                    >
                      {referee.phone}
                      <ArrowUpRight className="size-3" />
                    </a>
                    <Badge
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/40 text-[9px] text-muted-foreground"
                    >
                      Referee
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border/60 bg-card/40 px-4 py-3 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <p className="text-[11px] font-medium">{profile.availability}</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="ml-auto inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
                >
                  Email me <ArrowUpRight className="size-3" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
