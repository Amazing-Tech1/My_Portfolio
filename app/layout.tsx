import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteShell } from "@/components/site-shell";
import { Toaster } from "@/components/ui/sonner";
import { profile, socials } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${profile.name} — Full Stack Developer & Team Lead`,
    template: `%s · ${profile.firstName}`,
  },
  description:
    "Makinde Kelvin Olamide is a full-stack developer and team lead building production web products with Next.js, React, Node.js, MongoDB, PostgreSQL, and Prisma.",
  keywords: [
    "Makinde Kelvin Olamide",
    "Kelvin Makinde",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Team Lead",
    "Nigeria Developer",
  ],
  authors: [
    {
      name: profile.name,
      url: socials.find((social) => social.icon === "github")?.href,
    },
  ],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_NG",
    title: `${profile.name} — Full Stack Developer & Team Lead`,
    description: profile.shortBio,
    siteName: `${profile.firstName} ${profile.name.split(" ").slice(1).join(" ")}`,
    images: [{ url: profile.avatar, width: 864, height: 1080, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full Stack Developer & Team Lead`,
    description: profile.shortBio,
    images: [profile.avatar],
  },
  icons: {
    icon: profile.logo,
    apple: profile.logo,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#191411" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteShell>{children}</SiteShell>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
