"use client";

import { toast } from "sonner";
import { Copy, Download, Send, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CurrentYear } from "@/components/current-year";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { contactIconMap, socialIconMap } from "@/components/icon-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactChannels, profile, socials } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-14 lg:pb-24">
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{" "}
              <span className="font-serif italic text-primary">worth</span> shipping.
            </>
          }
          description="Have a product, a role, or an idea that needs a full-stack builder and a team lead? My inbox is open."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="flex flex-col gap-4">
            <Card className="relative flex-1 overflow-hidden border border-border/60 bg-card/55 shadow-none backdrop-blur">
              <CardContent className="relative">
                <Badge
                  variant="outline"
                  className="gap-2 rounded-full border-emerald-500/30 bg-emerald-500/10 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400"
                >
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  {profile.availability}
                </Badge>

                <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                  I&apos;m currently open to full-stack roles, product collaborations, and teams
                  that care about building things properly.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Button
                    className="h-10 rounded-full px-4 text-xs"
                    nativeButton={false}
                    render={<a href={`mailto:${profile.email}`} />}
                  >
                    Send an email
                    <Send className="size-3.5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 rounded-full border-border/70 bg-background/40 px-4 text-xs backdrop-blur"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(profile.email);
                        toast.success("Email copied", {
                          description: profile.email,
                        });
                      } catch {
                        toast.error("Could not copy email", {
                          description: "You can copy it manually below.",
                        });
                      }
                    }}
                  >
                    <Copy className="size-3.5" />
                    Copy email
                  </Button>
                </div>

                <p className="mt-4 text-[10px] text-muted-foreground">
                  Prefer to call?{" "}
                  <a
                    href={`tel:${profile.phoneLinks[1]}`}
                    className="font-medium text-foreground hover:text-primary hover:underline"
                  >
                    {profile.phones[1]}
                  </a>
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {contactChannels.map((channel) => {
                    const Icon = contactIconMap[channel.icon];
                    const content = (
                      <>
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-background/60 text-primary ring-1 ring-border/60">
                          <Icon className="size-3.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[9px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block truncate text-[11px] font-medium text-foreground">
                            {channel.value}
                          </span>
                        </span>
                      </>
                    );

                    return channel.href ? (
                      <a
                        key={channel.label}
                        href={channel.href}
                        className="group flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/35 p-2.5 transition-colors hover:border-primary/30 hover:bg-background/60"
                      >
                        {content}
                      </a>
                    ) : (
                      <div
                        key={channel.label}
                        className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-background/35 p-2.5"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                  {socials.map((social) => {
                    const Icon = socialIconMap[social.icon];
                    const isExternal = social.href.startsWith("http");
                    return (
                      <Button
                        key={social.label}
                        variant="ghost"
                        size="sm"
                        className="h-8 rounded-full px-2.5 text-[10px] text-muted-foreground hover:text-foreground"
                        nativeButton={false}
                        render={
                          <a
                            href={social.href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                          />
                        }
                      >
                        <Icon className="size-3.5" />
                        {social.label}
                      </Button>
                    );
                  })}
                  <span className="ml-auto hidden items-center gap-1 text-[10px] text-muted-foreground sm:flex">
                    <Sparkles className="size-3 text-primary" />
                    Usually replies within 24 hours
                  </span>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full border border-border/60 bg-card/55 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)] backdrop-blur">
              <CardContent className="p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Send a message</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Tell me a little about what you&apos;re building.
                    </p>
                  </div>
                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Send className="size-4" />
                  </div>
                </div>

                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-semibold">{profile.name}</p>
              <p className="mt-0.5 text-[10px] text-muted-foreground">
                {profile.title} · {profile.company}
              </p>
            </div>
            <p className="text-[10px] text-muted-foreground">
              © <CurrentYear /> {profile.firstName}. Designed & built with Next.js, Tailwind CSS,
              and Motion.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
