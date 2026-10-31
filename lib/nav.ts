import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  Mail,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  id: string
  label: string
  href: string
  icon: LucideIcon
  mobile: boolean
  mobileLabel?: string
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "#home", icon: Home, mobile: true },
  {
    id: "about",
    label: "About",
    href: "#about",
    icon: UserRound,
    mobile: true,
  },
  {
    id: "skills",
    label: "Skills",
    href: "#skills",
    icon: Sparkles,
    mobile: true,
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    icon: FolderKanban,
    mobile: true,
  },
  {
    id: "experience",
    label: "Experience",
    mobileLabel: "Work",
    href: "#experience",
    icon: BriefcaseBusiness,
    mobile: true,
  },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: Mail,
    mobile: true,
  },
]

export const sectionIds = navItems.map((item) => item.id)
