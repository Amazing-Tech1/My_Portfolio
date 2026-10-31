import type { ComponentType } from "react"
import {
  Clock,
  Cloud,
  Code2,
  Container,
  Database,
  LayoutDashboard,
  Mail,
  MapPin,
  Phone,
  Server,
  Users,
  Zap,
} from "lucide-react"
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/brand-icons"
import type {
  ContactIcon,
  ServiceIcon,
  SkillGroupIcon,
  SocialIcon,
} from "@/lib/data"

type IconComponent = ComponentType<{ className?: string }>

export const socialIconMap: Record<SocialIcon, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  mail: Mail,
  phone: Phone,
}

export const serviceIconMap: Record<ServiceIcon, IconComponent> = {
  code: Code2,
  server: Server,
  database: Database,
  cloud: Cloud,
  users: Users,
}

export const skillIconMap: Record<SkillGroupIcon, IconComponent> = {
  frontend: LayoutDashboard,
  backend: Server,
  database: Database,
  devops: Container,
}

export const contactIconMap: Record<ContactIcon, IconComponent> = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  clock: Clock,
  zap: Zap,
}
