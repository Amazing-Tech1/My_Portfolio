"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "Full-stack", "Frontend"] as const;

function ProjectCover({ project, featured }: { project: Project; featured: boolean }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        featured ? "aspect-16/10 lg:aspect-auto lg:h-full" : "aspect-16/10",
      )}
    >
      <Image
        src={project.image}
        alt={`${project.title} project preview`}
        fill
        sizes={featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 45vw"}
        className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
      {/* <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
        <Badge className="rounded-full border-white/20 bg-black/35 text-[9px] font-semibold tracking-wide text-white backdrop-blur-md">
          {project.category}
        </Badge>
        <Badge
          variant="outline"
          className="gap-1.5 rounded-full border-white/25 bg-black/25 text-[9px] font-medium text-white backdrop-blur-md"
        >
          <span className="size-1.5 rounded-full bg-emerald-400" />
          {project.status}
        </Badge>
      </div> */}
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-white/70 uppercase">
          {project.year} · {project.company}
        </p>
        <div className="flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover/card:-translate-y-1 group-hover/card:bg-white group-hover/card:text-black">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <Card
        className={cn(
          "group/card h-full gap-0 overflow-hidden border border-border/60 bg-card/55 py-0 shadow-none backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)]",
          featured && "lg:col-span-2",
          featured && "lg:grid lg:grid-cols-[1.08fr_0.92fr]",
        )}
      >
        <ProjectCover project={project} featured={featured} />
        <CardContent className="flex flex-1 flex-col px-5 py-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {project.featured ? <Star className="size-3 fill-primary text-primary" /> : null}
              {project.role}
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/70">{project.year}</span>
          </div>

          <h3 className="mt-2 text-lg font-semibold tracking-tight transition-colors group-hover/card:text-primary sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2 max-w-xl text-pretty text-[12px] leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, featured ? 5 : 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full bg-secondary/60 px-2 py-0.5 text-[9px] font-medium text-secondary-foreground"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > (featured ? 5 : 4) ? (
              <span className="px-1 py-0.5 text-[9px] font-medium text-muted-foreground">
                +{project.tech.length - (featured ? 5 : 4)}
              </span>
            ) : null}
          </div>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <div className="flex items-center gap-3">
              {project.metrics.slice(0, 2).map((metric) => (
                <div key={metric.label}>
                  <p className="text-[11px] font-semibold text-foreground">{metric.value}</p>
                  <p className="text-[9px] text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary">
              View case study
              <ArrowRight className="size-3 transition-transform group-hover/card:translate-x-0.5" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const reduceMotion = useReducedMotion();

  const visibleProjects = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="scroll-mt-24 px-5  sm:px-8  lg:px-14 ">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title={
              <>
                Products built to be <span className="font-serif italic text-primary">used</span>.
              </>
            }
            description="Production systems across commerce, government, education, property, food delivery, and organisational platforms."
          />

          <Reveal delay={0.1} className="flex flex-wrap gap-1.5">
            {filters.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={filter === item ? "default" : "outline"}
                onClick={() => setFilter(item)}
                className={cn(
                  "h-8 rounded-full px-3.5 text-[11px]",
                  filter !== item &&
                    "border-border/70 bg-card/40 text-muted-foreground backdrop-blur hover:text-foreground",
                )}
              >
                {item}
                <span
                  className={cn(
                    "ml-0.5 text-[9px] tabular-nums",
                    filter === item ? "text-primary-foreground/70" : "text-muted-foreground/60",
                  )}
                >
                  {item === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === item).length}
                </span>
              </Button>
            ))}
          </Reveal>
        </div>

        <motion.div layout className="mt-9 grid gap-4 sm:grid-cols-2 lg:gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.slug}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: -10 }}
                transition={{
                  duration: 0.35,
                  delay: reduceMotion ? 0 : index * 0.035,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className={cn(project.featured && filter === "All" && "lg:col-span-2")}
              >
                <ProjectCard project={project} featured={project.featured && filter === "All"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleProjects.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border/70 p-10 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </div>
        ) : null}
      </div>
    </section>
  );
}
