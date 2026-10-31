"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight, Download } from "lucide-react";
import { navItems } from "@/lib/nav";
import { profile, socials } from "@/lib/data";
import { socialIconMap } from "@/components/icon-map";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { CurrentYear } from "@/components/current-year";
import { useActiveSection } from "@/components/use-active-section";

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  element.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

export function SiteSidebar() {
  const pathname = usePathname();
  const active = useActiveSection();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-70 flex-col border-r border-border/70 bg-sidebar/75 backdrop-blur-2xl lg:flex">
      <div className="flex h-full flex-col px-6 py-7">
        <Link
          href="/#home"
          className="group flex items-center gap-3"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              scrollToSection("home");
            }
          }}
        >
          <div className="relative size-12 shrink-0 overflow-hidden rounded-2xl ring-1 ring-border/80 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
            <Image
              src={profile.logo}
              alt={`${profile.name} logo`}
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-tight">Makinde Kelvin Olamide</p>
            <p className="truncate text-[11px] font-medium text-muted-foreground">Full Stack Dev</p>
          </div>
        </Link>

        <Separator className="mt-6 bg-border/70" />

        <nav className="mt-5 flex flex-1 flex-col gap-1">
          <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.18em] text-muted-foreground/70 uppercase">
            Explore
          </p>
          {navItems.map((item) => {
            const isActive = active === item.id;
            const Icon = item.icon;
            const href = pathname === "/" ? item.href : `/${item.href}`;

            return (
              <Link
                key={item.id}
                href={href}
                onClick={(event) => {
                  if (pathname === "/") {
                    event.preventDefault();
                    scrollToSection(item.id);
                  }
                }}
                className={cn(
                  "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="sidebar-active-section"
                    className="absolute inset-0 rounded-xl bg-primary/10 ring-1 ring-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <Icon className="relative size-4.25" />
                <span className="relative">{item.label}</span>
                {isActive ? (
                  <span className="relative ml-auto size-1.5 rounded-full bg-primary" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="space-y-4 mt-2">
          {/* <div className="rounded-2xl border border-border/70 bg-card/60 p-3.5">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <p className="text-[11px] font-semibold text-foreground">Available to build</p>
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
              Open to full-stack roles and product collaborations.
            </p>
            <Button
              variant="link"
              size="sm"
              className="mt-1 h-auto gap-1 p-0 text-[11px] text-primary"
              nativeButton={false}
              render={
                <a
                  href={`mailto:${profile.email}?subject=Project%20enquiry`}
                  aria-label="Email Kelvin"
                />
              }
            >
              Start a conversation <ArrowUpRight className="size-3" />
            </Button>
          </div> */}

          <Button
            variant="outline"
            size="sm"
            className="w-full justify-center rounded-xl bg-card/40 text-[11px]"
            nativeButton={false}
            render={<a href={profile.resume} download aria-label="Download Kelvin's résumé" />}
          >
            <Download className="size-3.5" />
            Download résumé
          </Button>

          <div className="flex items-center justify-between">
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
            <ThemeToggle className="text-muted-foreground hover:text-foreground" />
          </div>

          <p className="text-[10px] text-muted-foreground/70">
            © <CurrentYear /> {profile.firstName}
          </p>
        </div>
      </div>
    </aside>
  );
}
