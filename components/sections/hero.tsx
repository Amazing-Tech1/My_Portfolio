"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { ArrowRight, ArrowUpRight, Download, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { socialIconMap } from "@/components/icon-map";
import { profile, socials, stats } from "@/lib/data";
import { cn } from "@/lib/utils";

const floatingChips = [
  {
    name: "React",
    position: "-left-2 top-[24%] sm:-left-10",
    hideOnMobile: false,
  },
  {
    name: "Next.js",
    position: "-right-1 top-[14%] sm:-right-9",
    hideOnMobile: false,
  },
  {
    name: "TypeScript",
    position: "-right-7 top-[44%]",
    hideOnMobile: true,
  },
  {
    name: "Node.js",
    position: "-left-9 top-[50%]",
    hideOnMobile: true,
  },
  {
    name: "MongoDB",
    position: "-right-2 bottom-[23%] sm:-right-8",
    hideOnMobile: false,
  },
  {
    name: "Tailwind",
    position: "-left-1 bottom-[15%] sm:-left-7",
    hideOnMobile: false,
  },
  {
    name: "Prisma",
    position: "left-[33%] -top-4",
    hideOnMobile: true,
  },
  {
    name: "PostgreSQL",
    position: "right-[21%] -bottom-3",
    hideOnMobile: true,
  },
];

const entrance = (delay: number): Transition => ({
  duration: 0.75,
  delay,
  ease: [0.22, 1, 0.36, 1] as const,
});

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-14 lg:pb-24 lg:pt-14"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-[0.35] mask-[radial-gradient(ellipse_70%_70%_at_50%_35%,black,transparent)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:gap-10">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={entrance(0.05)}
        >
          <Badge
            variant="outline"
            className="mb-5 h-7 gap-2 rounded-full border-border/80 bg-card/60 px-3 text-[10px] font-semibold tracking-[0.16em] uppercase backdrop-blur"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            Full Stack Developer
          </Badge>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.9rem]">
            Hi, I&apos;m {profile.firstName}. I build fast, scalable products from database to{" "}
            <span className="relative whitespace-nowrap">
              <span className="font-serif italic text-primary">pixel.</span>
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 220 18"
                className="absolute -bottom-2 left-0 w-full text-primary/45"
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 0.9, ease: "easeOut" }}
              >
                <path
                  d="M3 13C47 4 113 2 217 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            {profile.shortBio} I build, shape architecture, and turn complex requirements into
            clean, production-ready experiences.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 rounded-full px-6 text-sm shadow-sm",
              )}
            >
              Explore my work
              <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded-full border-border/80 bg-card/50 px-6 text-sm backdrop-blur",
              )}
            >
              Download CV
              <Download className="size-4" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "h-11 rounded-full px-4 text-sm",
              )}
            >
              Let&apos;s talk
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              {socials.map((social) => {
                const Icon = socialIconMap[social.icon];
                const isExternal = social.href.startsWith("http");

                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon-sm"
                    className="text-muted-foreground hover:text-foreground"
                    aria-label={social.label}
                    nativeButton={false}
                    render={
                      <a
                        href={social.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                      />
                    }
                  >
                    <Icon className="size-4" />
                  </Button>
                );
              })}
            </div>
            <span className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              {profile.location}
            </div>
          </div>

          <dl className="mt-9 grid max-w-lg grid-cols-3 divide-x divide-border/70 rounded-2xl border border-border/60 bg-card/40 py-4 backdrop-blur">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="px-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={entrance(0.2)}
          className="relative mx-auto w-full max-w-82.5 sm:max-w-97.5 g:max-w-107.5"
        >
          <div className="pointer-events-none absolute -inset-5 -z-10 rounded-full border border-dashed border-border animate-spin-slow" />
          <div className="pointer-events-none absolute -inset-11 -z-10 rounded-full border border-border/40" />

          <div className="relative rounded-[2.6rem] border border-border bg-card p-0.5 shadow-[0_35px_90px_-45px_rgba(0,0,0,0.5)]">
            <div className="relative aspect-4/5 overflow-hidden rounded-[2.5rem] bg-muted">
              <Image
                src={profile.avatar}
                alt={`${profile.name} portrait`}
                fill
                sizes="(max-width: 640px) 80vw, 430px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                <div className="rounded-2xl border border-white/15 bg-black/35 px-3.5 py-2.5 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-white/60 uppercase">
                    Currently
                  </p>
                  <p className="mt-0.5 text-xs font-medium">
                    Team Lead @{" "}
                    <a
                      href="https://trinixbytesolutions.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trinixbyte Solution
                    </a>
                  </p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl">
                  <Sparkles className="size-4" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={entrance(0.5)}
            className="absolute -top-3 left-3 rounded-full border border-border/70 bg-background/85 px-3 py-1.5 text-[10px] font-semibold tracking-wide uppercase shadow-lg backdrop-blur-xl sm:left-5"
          >
            Full Stack · MERN
          </motion.div>

          <div className="pointer-events-none absolute -inset-5 z-0 sm:-inset-9">
            {floatingChips.map((chip, index) => (
              <motion.div
                key={chip.name}
                className={cn(
                  "absolute pointer-events-auto",
                  chip.position,
                  chip.hideOnMobile && "hidden sm:block",
                )}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, index % 2 === 0 ? -9 : 9, 0],
                        rotate: [0, index % 2 === 0 ? 2.5 : -2.5, 0],
                      }
                }
                transition={{
                  duration: 4.5 + index * 0.55,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.28,
                }}
                whileHover={{ scale: 1.08, rotate: 0 }}
              >
                <Badge
                  variant="outline"
                  className="gap-1.5 rounded-full border-border/70 bg-background/85 px-2.5 py-1 text-[10px] font-semibold text-foreground shadow-[0_12px_30px_-15px_rgba(0,0,0,0.55)] backdrop-blur-xl"
                >
                  <span className="size-1.5 rounded-full bg-foreground/40" />
                  {chip.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
