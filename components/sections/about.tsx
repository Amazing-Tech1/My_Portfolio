import { ArrowUpRight, CircleCheck, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { serviceIconMap } from "@/components/icon-map";
import { profile, quickFacts, services, workflow } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5  sm:px-8  lg:px-14 ">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="01"
          eyebrow="About"
          title={
            <>
              Engineer by craft, <span className="font-serif italic text-primary">leader</span> by
              practice.
            </>
          }
          description="I sit at the intersection of product thinking and solid engineering — close enough to the code to build it, senior enough to lead the team that ships it."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <Reveal className="space-y-5">
            {profile.bio.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 24)}
                className={
                  index === 0
                    ? "text-pretty text-[15px] leading-7 text-foreground/90 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-primary text-justify lg:text-left"
                    : "text-pretty text-[15px] leading-7 text-muted-foreground text-justify lg:text-left"
                }
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {["Team leadership", "Product architecture", "Mentoring", "Clean delivery"].map(
                (label) => (
                  <Badge
                    key={label}
                    variant="secondary"
                    className="rounded-full bg-secondary/70 px-3 py-1 text-[10px] font-semibold tracking-wide text-secondary-foreground"
                  >
                    {label}
                  </Badge>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4 lg:sticky lg:top-8">
            <Card className="border border-border/60 bg-card/55 shadow-[0_25px_70px_-50px_rgba(0,0,0,0.65)] backdrop-blur">
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    At a glance
                  </p>
                  <Badge
                    variant="outline"
                    className="gap-1.5 rounded-full border-emerald-500/30 bg-emerald-500/10 text-[10px] text-emerald-600 dark:text-emerald-400"
                  >
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Available
                  </Badge>
                </div>

                <dl className="mt-4 space-y-3">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start justify-between gap-4">
                      <dt className="text-xs text-muted-foreground">{fact.label}</dt>
                      <dd className="max-w-[60%] text-right text-xs font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Separator className="my-4 bg-border/70" />

                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    Based in Nigeria, collaborating with teams across time zones. {profile.timezone}
                    .
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border border-border/60 bg-card/55 shadow-none backdrop-blur">
              <CardContent className="relative">
                <p className="text-[10px] font-semibold tracking-[0.18em] text-primary uppercase">
                  Current chapter
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{profile.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {profile.company} · 2024 — 2026
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Leading multiple full-stack products",
                    "Owning architecture and delivery",
                    "Mentoring front-end and back-end engineers",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground"
                    >
                      <CircleCheck className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#experience"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                >
                  Read the full story <ArrowUpRight className="size-3" />
                </a>
              </CardContent>
            </Card>
          </Reveal>
        </div>
        <Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {workflow.map((step) => (
              <StaggerItem key={step.step}>
                <Card
                  size="sm"
                  className="h-full border border-border/60 bg-card/45 shadow-none backdrop-blur transition-colors hover:border-primary/30 hover:bg-card/70"
                >
                  <CardContent className="flex gap-3">
                    <span className="font-mono text-[11px] font-semibold text-primary">
                      {step.step}
                    </span>
                    <div>
                      <p className="text-xs font-semibold">{step.title}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
        <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <StaggerItem key={service.title}>
                <Card className="group h-full border border-border/60 bg-card/40 shadow-none backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70">
                  <CardContent>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold tracking-tight">{service.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {service.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full border border-border/70 px-2 py-0.5 text-[9px] font-medium text-muted-foreground"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
