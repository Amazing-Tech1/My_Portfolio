import { Suspense } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  Layers,
  Sparkles,
} from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import {
  getAdjacentProjects,
  getProject,
  profile,
  projects,
} from "@/lib/data"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return { title: "Project not found" }
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.tagline,
      type: "article",
      images: [
        {
          url: project.image,
          width: 1080,
          height: 864,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${profile.name}`,
      description: project.tagline,
      images: [project.image],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectDetailSkeleton />}>
      <ProjectDetails params={params} />
    </Suspense>
  )
}

function ProjectDetailSkeleton() {
  return (
    <div className="mx-auto w-full max-w-[1440px] pb-24 lg:pb-0">
      <section className="px-5 pb-10 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pb-14 lg:pt-10">
        <div className="mx-auto w-full max-w-6xl">
          <Skeleton className="h-4 w-36" />
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_1.02fr] lg:gap-10">
            <div className="space-y-4">
              <Skeleton className="h-5 w-40 rounded-full" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="mt-6 h-20 w-full max-w-lg rounded-2xl" />
              <Skeleton className="h-10 w-40 rounded-full" />
            </div>
            <Skeleton className="aspect-[16/11] w-full rounded-[1.8rem]" />
          </div>
        </div>
      </section>
      <section className="px-5 pb-14 sm:px-8 lg:px-14">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </section>
    </div>
  )
}

async function ProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const { previous, next } = getAdjacentProjects(project.slug)
  const demoHost = project.links.demo
    ? new URL(project.links.demo).hostname.replace(/^www\./, "")
    : project.title

  return (
    <article className="mx-auto w-full max-w-[1440px] pb-24 lg:pb-0">
      <section className="relative overflow-hidden px-5 pb-10 pt-6 sm:px-8 sm:pt-8 lg:px-14 lg:pb-14 lg:pt-10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_65%_60%_at_50%_0%,black,transparent)]" />

        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Back to selected work
            </Link>
          </Reveal>

          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_1.02fr] lg:gap-10">
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge
                  variant="outline"
                  className="rounded-full border-border/70 bg-card/50 text-[10px] font-semibold"
                >
                  {project.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="gap-1.5 rounded-full border-emerald-500/30 bg-emerald-500/10 text-[10px] font-medium text-emerald-600 dark:text-emerald-400"
                >
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {project.status}
                </Badge>
                <span className="ml-1 font-mono text-[10px] text-muted-foreground">
                  {project.year}
                </span>
              </div>

              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.03]">
                {project.title}
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.tagline}
              </p>

              <dl className="mt-6 grid max-w-lg grid-cols-3 divide-x divide-border/70 rounded-2xl border border-border/60 bg-card/40 py-3.5 backdrop-blur">
                <div className="px-4">
                  <dt className="text-[9px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Role
                  </dt>
                  <dd className="mt-1 text-[11px] font-semibold">
                    {project.role}
                  </dd>
                </div>
                <div className="px-4">
                  <dt className="text-[9px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Company
                  </dt>
                  <dd className="mt-1 text-[11px] font-semibold">
                    Trinixbyte
                  </dd>
                </div>
                <div className="px-4">
                  <dt className="text-[9px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    Year
                  </dt>
                  <dd className="mt-1 text-[11px] font-semibold">
                    {project.year}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                {project.links.demo ? (
                  <Button
                    className="h-10 rounded-full px-4 text-xs"
                    nativeButton={false}
                    render={
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      />
                    }
                  >
                    Visit live site
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                ) : null}
                <Button
                  variant="outline"
                  className="h-10 rounded-full border-border/70 bg-card/40 px-4 text-xs backdrop-blur"
                  nativeButton={false}
                  render={
                    <a href={`mailto:${profile.email}?subject=About%20${encodeURIComponent(project.title)}`} />
                  }
                >
                  Ask about this build
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="rounded-full bg-secondary/60 px-2.5 py-1 text-[10px] font-medium text-secondary-foreground"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[1.8rem] border border-border/70 bg-card/70 p-2 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.9)] backdrop-blur">
                <div className="flex items-center gap-1.5 px-2 py-1.5">
                  <span className="size-2 rounded-full bg-red-400/80" />
                  <span className="size-2 rounded-full bg-amber-400/80" />
                  <span className="size-2 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 flex-1 truncate rounded-md bg-background/60 px-2 py-1 font-mono text-[9px] text-muted-foreground">
                    {demoHost}
                  </span>
                </div>
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-semibold tracking-[0.18em] text-white/60 uppercase">
                        {project.category}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {project.title}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[9px] font-medium text-white backdrop-blur">
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 sm:px-8 lg:px-14">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <Reveal>
              <Card className="border border-border/60 bg-card/50 shadow-none backdrop-blur">
                <CardContent className="p-5 sm:p-7">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" />
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      Overview
                    </p>
                  </div>
                  <div className="mt-4 space-y-3.5">
                    {project.overview.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 30)}
                        className="text-pretty text-[13px] leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="border border-border/60 bg-card/50 shadow-none backdrop-blur">
                <CardContent className="p-5 sm:p-7">
                  <div className="flex items-center gap-2">
                    <Layers className="size-4 text-primary" />
                    <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                      What I built
                    </p>
                  </div>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 rounded-2xl border border-border/50 bg-background/30 p-3.5"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary ring-1 ring-primary/15">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[11px] leading-relaxed text-muted-foreground">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="space-y-4">
            <Card className="border border-border/60 bg-card/55 shadow-none backdrop-blur">
              <CardContent className="p-5">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Project details
                </p>
                <dl className="mt-4 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Building2 className="size-3.5" />
                      Company
                    </dt>
                    <dd className="text-right text-[11px] font-medium">
                      {project.company}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <CalendarDays className="size-3.5" />
                      Timeline
                    </dt>
                    <dd className="text-right text-[11px] font-medium">
                      {project.year}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <Layers className="size-3.5" />
                      Discipline
                    </dt>
                    <dd className="text-right text-[11px] font-medium">
                      {project.category}
                    </dd>
                  </div>
                </dl>

                <Separator className="my-4 bg-border/70" />

                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border/50 bg-background/30 p-2.5 text-center"
                    >
                      <p className="text-[11px] font-semibold leading-tight">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[8px] leading-tight text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border border-border/60 bg-card/55 shadow-none backdrop-blur">
              <CardContent className="relative p-5">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-primary uppercase">
                  Project highlight
                </p>
                <p className="mt-3 text-pretty text-[12px] leading-relaxed text-muted-foreground">
                  {project.highlights[0]}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-medium text-primary">
                  <Check className="size-3.5" />
                  Shipped in production
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/60 bg-card/55 shadow-none backdrop-blur">
              <CardContent className="p-5">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                  Built with
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full border-border/70 bg-background/30 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-14">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href={`/projects/${previous.slug}`}
                className="group rounded-2xl border border-border/60 bg-card/40 p-4 transition-colors hover:border-primary/30 hover:bg-card/70"
              >
                <p className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                  <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
                  Previous project
                </p>
                <p className="mt-2 text-sm font-semibold transition-colors group-hover:text-primary">
                  {previous.title}
                </p>
                <p className="mt-1 line-clamp-1 text-[10px] text-muted-foreground">
                  {previous.tagline}
                </p>
              </Link>
              <Link
                href={`/projects/${next.slug}`}
                className="group rounded-2xl border border-border/60 bg-card/40 p-4 text-right transition-colors hover:border-primary/30 hover:bg-card/70"
              >
                <p className="flex items-center justify-end gap-1.5 text-[10px] font-medium text-muted-foreground">
                  Next project
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </p>
                <p className="mt-2 text-sm font-semibold transition-colors group-hover:text-primary">
                  {next.title}
                </p>
                <p className="mt-1 line-clamp-1 text-[10px] text-muted-foreground">
                  {next.tagline}
                </p>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/55 px-5 py-5 text-center backdrop-blur sm:flex-row sm:text-left">
              <div>
                <p className="text-sm font-semibold">
                  Want the full story behind {project.title}?
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  I&apos;m happy to walk through the architecture, decisions, and
                  trade-offs.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Button
                  className="h-9 rounded-full px-4 text-[11px]"
                  nativeButton={false}
                  render={<a href={`mailto:${profile.email}`} />}
                >
                  Get in touch
                  <ArrowUpRight className="size-3.5" />
                </Button>
                <Button
                  variant="outline"
                  className="h-9 rounded-full border-border/70 bg-background/40 px-4 text-[11px] backdrop-blur"
                  nativeButton={false}
                  render={<Link href="/#projects" />}
                >
                  All projects
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </article>
  )
}
