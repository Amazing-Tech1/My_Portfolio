import { Braces, Infinity as InfinityIcon, Layers, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { skillIconMap } from "@/components/icon-map"
import {
  profile,
  skillGroups,
  softSkills,
  techStack,
} from "@/lib/data"

function SkillList({ index }: { index: number }) {
  const group = skillGroups[index]
  return (
    <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {group.skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground">
              {skill.name}
            </span>
            <span className="text-[10px] font-medium tabular-nums text-muted-foreground">
              {skill.level}%
            </span>
          </div>
          <Progress value={skill.level} className="mt-2 gap-0" />
        </div>
      ))}
    </div>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title={
            <>
              A toolkit built for{" "}
              <span className="font-serif italic text-primary">shipping</span>.
            </>
          }
          description="The technologies I reach for most — from interface work and typed APIs to data modelling and deployment."
        />

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal className="min-w-0">
            <Card className="h-full min-w-0 border border-border/60 bg-card/50 shadow-none backdrop-blur">
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Layers className="size-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Technical toolkit</p>
                    <p className="text-[11px] text-muted-foreground">
                      Switch between disciplines to see how I work.
                    </p>
                  </div>
                </div>

                <Tabs defaultValue={skillGroups[0].title} className="mt-6">
                  <TabsList
                    variant="line"
                    className="no-scrollbar w-full justify-start overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
                  >
                    {skillGroups.map((group) => {
                      const Icon = skillIconMap[group.icon]
                      return (
                        <TabsTrigger
                          key={group.title}
                          value={group.title}
                          className="flex-none gap-1.5 px-3 text-[11px]"
                        >
                          <Icon className="size-3.5" />
                          {group.title}
                        </TabsTrigger>
                      )
                    })}
                  </TabsList>

                  {skillGroups.map((group, index) => (
                    <TabsContent key={group.title} value={group.title}>
                      <div className="mt-4 rounded-2xl border border-border/60 bg-background/50 p-4 sm:p-5">
                        <p className="mb-4 text-[11px] text-muted-foreground">
                          {group.description}
                        </p>
                        <SkillList index={index} />
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid min-w-0 gap-4">
            <Reveal delay={0.08} className="min-w-0">
              <Card className="border border-border/60 bg-card/50 shadow-none backdrop-blur">
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" />
                    <p className="text-xs font-semibold">Soft skills</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {softSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-secondary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.14}>
              <Card className="relative overflow-hidden border border-border/60 bg-card/50 shadow-none backdrop-blur">
                <CardContent className="relative">
                  <div className="flex items-center gap-2">
                    <Braces className="size-4 text-primary" />
                    <p className="text-xs font-semibold">How I keep growing</p>
                  </div>
                  <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                    I learn by building. Every project pushes me into a new
                    corner of the stack — from payment flows and background
                    jobs to design systems and AI-assisted tooling.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-primary">
                    <InfinityIcon className="size-3.5" />
                    {profile.yearsExperience}+ years of continuous practice
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="mask-fade-x relative overflow-hidden border-y border-border/60 py-4">
            <div className="flex w-max animate-marquee items-center gap-3">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1.5 backdrop-blur"
                >
                  <span className="size-1 rounded-full bg-primary/70" />
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
