export type SocialIcon = "github" | "linkedin" | "x" | "mail" | "phone";

export type Social = {
  label: string;
  href: string;
  icon: SocialIcon;
  handle: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ServiceIcon = "code" | "server" | "database" | "cloud" | "users";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
  points: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  current?: boolean;
};

export type Training = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
};

export type SkillGroupIcon = "frontend" | "backend" | "database" | "devops";

export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: SkillGroupIcon;
  skills: Skill[];
};

export type ProjectCategory = "Full-stack" | "Frontend" | "Backend";

export type ProjectStatus = "Live" | "In development";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string[];
  image: string;
  accent: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  role: string;
  company: string;
  tech: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  links: { demo?: string; repo?: string };
};

export type ContactIcon = "mail" | "phone" | "map" | "clock" | "zap";

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
  icon: ContactIcon;
};

export const profile = {
  name: "Makinde Kelvin Olamide",
  firstName: "Kelvin",
  fullName: "Makinde Kelvin Olamide",
  initials: "MK",
  role: "Full Stack Developer",
  title: "Full Stack Developer",
  company: "Trinixbyte Solutions Limited",
  email: "kelvinmakinde2@gmail.com",
  phones: ["+234 906 527 3201", "+234 901 429 0986"],
  phoneLinks: ["+2349065273201"],
  location: "Nigeria · Remote friendly",
  timezone: "WAT (UTC+1)",
  availability: "Open to new opportunities",
  yearsExperience: 2,
  avatar: "/img_1.jpeg",
  logo: "/img_3.jpeg",
  resume: "/Kelvin_Makinde_FullStack_CV.pdf",
  headline: "I build fast, scalable products from database to pixel.",
  shortBio:
    "Full-stack developer with professional experience designing, building, and maintaining production web and mobile applications.",
  bio: [
    "I'm a full-stack developer with professional experience designing, building, and maintaining production web and mobile applications. I was promoted to Team Lead in 2025 at Trinixbyte Solutions Limited.",
    "I lead a cross-functional team across multiple concurrent full-stack products, owning architecture, sprint planning, code reviews, and delivery timelines. My favourite part of the job is turning business requirements into clean data models, reliable APIs, and interfaces that feel effortless.",
    "I work mostly in the JavaScript and TypeScript ecosystem — React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Prisma, and the tools around them.",
  ],
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/Amazing-Tech1",
    icon: "github",
    handle: "@Amazing-Tech1",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail",
    handle: profile.email,
  },
  {
    label: "Phone",
    href: `tel:${profile.phoneLinks[0]}`,
    icon: "phone",
    handle: profile.phones[0],
  },
];

export const stats: Stat[] = [
  { value: "2+", label: "Years building production products" },
  { value: "6", label: "Shipped production projects" },
  { value: "2025", label: "Promoted to Team Lead" },
  { value: "10+", label: "Technologies in daily use" },
];

export const services: Service[] = [
  {
    title: "Full-stack product engineering",
    description:
      "End-to-end delivery — from database schema and API design to responsive, accessible interfaces.",
    icon: "code",
    points: ["Product architecture", "Next.js & React", "Type-safe code"],
  },
  {
    title: "APIs & backend systems",
    description:
      "Clean REST APIs, authentication flows, and reliable background workflows built to scale.",
    icon: "server",
    points: ["Node.js & Express", "REST APIs", "Inngest workflows"],
  },
  {
    title: "Data & persistence",
    description:
      "Data modelling with MongoDB and PostgreSQL, plus Prisma migrations that stay maintainable.",
    icon: "database",
    points: ["Schema design", "MongoDB & PostgreSQL", "Prisma ORM"],
  },
  {
    title: "Team leadership",
    description:
      "Sprint planning, code reviews, mentoring, and client communication across concurrent products.",
    icon: "users",
    points: ["Code reviews", "Mentoring", "Delivery ownership"],
  },
];

export const experience: Experience[] = [
  {
    role: "Team Lead & Full Stack Developer",
    company: "Trinixbyte Solutions Limited",
    period: "2024 — 2026",
    location: "Nigeria",
    description:
      "Lead a cross-functional development team across multiple concurrent full-stack products, from architecture through production delivery.",
    highlights: [
      "Lead a cross-functional development team, owning project architecture, sprint planning, code reviews, and delivery timelines across multiple concurrent full-stack products.",
      "Make key technical decisions end-to-end — database schema design, API structure, and deployment strategy — translating business requirements into scalable system architecture.",
      "Mentor front-end and back-end engineers, establishing coding standards and review practices that improved code quality and shortened review cycles.",
      "Coordinate directly with stakeholders and clients to scope features, manage priorities, and ensure on-time delivery of production systems.",
    ],
    tech: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Prisma"],
    current: true,
  },
];

export const training: Training[] = [
  {
    title: "Web Development Training",
    period: "Self-directed",
    description:
      "Structured, project-based training across the modern JavaScript stack, reinforced by building real products.",
    highlights: [
      "Learned HTML5, CSS3, JavaScript, React.js, Node.js, React Native, Next.js, and Tailwind CSS through structured courses from Bro Code, Dave Gray, and Great Stack.",
      "Built real-world projects while learning, strengthening problem-solving, debugging, and component-based architecture skills through continuous practice.",
      "Transitioned into professional delivery, eventually leading a development team and owning production architecture decisions.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, accessible, and intentional.",
    icon: "frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 94 },
      { name: "Tailwind CSS", level: 92 },
      { name: "shadcn/ui", level: 88 },
      { name: "HTML5 & CSS3", level: 94 },
    ],
  },
  {
    title: "Backend & APIs",
    description: "Typed services, clean endpoints, reliable workflows.",
    icon: "backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "REST APIs", level: 92 },
      { name: "Inngest", level: 82 },
      { name: "Prisma", level: 88 },
    ],
  },
  {
    title: "Databases",
    description: "Data models that stay fast as products grow.",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 86 },
      { name: "Neon", level: 82 },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Shipping safely with modern developer workflows.",
    icon: "devops",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 82 },
      { name: "Vercel", level: 90 },
      { name: "Clerk", level: 86 },
      { name: "Arcjet", level: 78 },
      { name: "Claude Code", level: 88 },
    ],
  },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "shadcn/ui",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Neon",
  "Inngest",
  "Clerk",
  "Arcjet",
  "Docker",
  "Vercel",
  "Git",
];

export const floatingTech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
  "Clerk",
  "Docker",
];

export const projects: Project[] = [
  {
    slug: "quickcart",
    title: "QuickCart",
    tagline: "A full-stack e-commerce platform built for a fast, frictionless buying flow.",
    description:
      "An e-commerce application with authentication, user management, product workflows, and order handling. Built with Next.js, TypeScript, MongoDB, and Mongoose, with Cloudinary powering product imagery.",
    overview: [
      "QuickCart is a full-stack commerce product built around the complete customer journey — browse, authenticate, manage a profile, place orders, and track activity.",
      "I worked across the data model, API layer, and interface, using Mongoose to shape products and orders and Cloudinary to manage media. The UI is responsive and built with Tailwind CSS.",
      "The result is a production deployment that demonstrates a complete commerce flow rather than a static storefront mock-up.",
    ],
    image:
      "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469866/QuickCart_-_GreatStack_31.10.2026_18_56.png",
    accent: "#ff7a1a",
    category: "Full-stack",
    status: "Live",
    year: "2026",
    featured: true,
    role: "Full-stack developer",
    company: "Practice with GreatStack",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Cloudinary", "Tailwind CSS"],
    highlights: [
      "Built authentication and user management flows using Clerk.",
      "Modelled products and orders with MongoDB and Mongoose.",
      "Integrated Cloudinary for product image management.",
      "Designed responsive storefront and admin interfaces with Tailwind CSS.",
    ],
    metrics: [
      { label: "Category", value: "E-commerce" },
      { label: "Role", value: "Full-stack" },
      { label: "Deployment", value: "Vercel" },
    ],
    links: { demo: "https://quickcart-mu-seven.vercel.app" },
  },
  {
    slug: "oyo-state-housing-corporation",
    title: "Oyo State Housing Corporation",
    tagline: "A government housing platform for public listings and administrative operations.",
    description:
      "Public-facing and administrative interfaces for a government housing corporation, built with React, shadcn/ui, and Tailwind CSS, and connected to Laravel REST APIs.",
    overview: [
      "This platform gives the Oyo State Housing Corporation a public face for its properties and a secure administrative layer for managing them.",
      "The front end pairs React and shadcn/ui with Tailwind CSS for consistent, accessible interfaces. Administrative workflows cover property management, document uploads, and internal processes.",
      "I built the React interfaces against Laravel REST APIs, keeping the public and admin experiences cohesive while supporting the corporation's operational requirements.",
    ],
    image:
      "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469872/housing-fe_31.10.2026_18_56.png",
    accent: "#1f9d6b",
    category: "Frontend",
    status: "Live",
    year: "2026",
    featured: true,
    role: "Frontend developer",
    company: "Trinixbyte Solutions Limited",
    tech: ["React.js", "shadcn/ui", "Tailwind CSS", "Laravel REST APIs"],
    highlights: [
      "Developed public-facing property and information pages.",
      "Built administrative interfaces with shadcn/ui and Tailwind CSS.",
      "Integrated Laravel REST APIs for property management and document uploads.",
      "Supported administrative workflows from a single cohesive dashboard.",
    ],
    metrics: [
      { label: "Sector", value: "Government" },
      { label: "Role", value: "Frontend" },
      { label: "API", value: "Laravel REST" },
    ],
    links: { demo: "https://housing.trinixbytesolutions.com" },
  },
  {
    slug: "schoolama",
    title: "SchooLama",
    tagline: "A school management dashboard for administrators, teachers, students, and parents.",
    description:
      "A full-stack school management dashboard built with Next.js, TypeScript, Prisma ORM v8, and PostgreSQL, with Clerk authentication and role-based dashboards.",
    overview: [
      "SchooLama is a multi-role school management product. Each user type gets a dashboard shaped around what they need — administration, teaching, learning, or monitoring a child's progress.",
      "I built the application with Next.js and TypeScript, using Prisma ORM v8 and PostgreSQL for the data layer, and Clerk for authentication and role-based access control.",
      "The project brought together complex permissions, multiple dashboards, and a relational data model in one production-ready system.",
    ],
    image:
      "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469869/Lama_Dev_School_Management_Dashboard_31.10.2026_18_57.png",
    accent: "#6d5efc",
    category: "Full-stack",
    status: "Live",
    year: "2026",
    featured: true,
    role: "Full-stack developer",
    company: "Practice with LamaDev",
    tech: ["Next.js", "TypeScript", "Prisma ORM v8", "PostgreSQL", "Clerk"],
    highlights: [
      "Implemented Clerk authentication with role-based access control.",
      "Built separate dashboards for administrators, teachers, students, and parents.",
      "Designed a relational data model with Prisma ORM v8 and PostgreSQL.",
      "Delivered a production school management experience end-to-end.",
    ],
    metrics: [
      { label: "User roles", value: "4" },
      { label: "ORM", value: "Prisma v8" },
      { label: "Auth", value: "Clerk" },
    ],
    links: { demo: "https://school-lama-wsxp.vercel.app" },
  },
  {
    slug: "buddielease",
    title: "BuddieLease",
    tagline: "A property platform with an in-product AI assistant for NYSC members.",
    description:
      "A full-stack property platform with listing, search, filtering, and authentication, plus Buddie AI — an assistant that guides NYSC members through their service year.",
    overview: [
      "BuddieLease combines property discovery with practical support for NYSC members. Users can explore listings, filter by their needs, and get guidance from an assistant built into the product.",
      "I developed the property listing, search, filtering, and authentication experience with React and Tailwind CSS, keeping the interface responsive and easy to navigate.",
      "Buddie AI adds a layer of guidance designed specifically around the NYSC service year, turning the platform into more than a listings directory.",
    ],
    image: "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469861/buddielease.webp",
    accent: "#f04d7d",
    category: "Frontend",
    status: "Live",
    year: "2025",
    featured: true,
    role: "Frontend developer",
    company: "Trinixbyte Solutions Limited",
    tech: ["React.js", "Tailwind CSS", "AI integration", "Laravel REST APIs"],
    highlights: [
      "Built property listing, search, and filtering experiences with React and Tailwind CSS.",
      "Integrated authentication for a personalised user experience.",
      "Integrated Buddie AI to guide NYSC members through their service year.",
      "Designed the interface to work cleanly across mobile and desktop.",
    ],
    metrics: [
      { label: "Focus", value: "Property" },
      { label: "Assistant", value: "Buddie AI" },
      { label: "Audience", value: "NYSC members" },
    ],
    links: { demo: "https://buddielease.com" },
  },
  {
    slug: "cac-official",
    title: "CAC Official",
    tagline:
      "A public organisation site with a content management layer for events, departments, and media.",
    description:
      "Public-facing pages and an administrative CMS for a church organisation, spanning events, departments, history, and media, built with React and integrated backend APIs.",
    overview: [
      "CAC Official needed a public home for its story and an administrative tool for the team managing its content.",
      "I developed the public-facing pages and an administrative CMS for events, departments, history, and media, with responsive React interfaces connected to backend APIs.",
      "The build gave the organisation an easy way to keep its public content current without needing engineering support for routine updates.",
    ],
    image:
      "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469877/CAC_Nigeria_and_Overseas_31.10.2026_19_00.png",
    accent: "#1f8fff",
    category: "Frontend",
    status: "Live",
    year: "2025",
    featured: false,
    role: "Frontend developer",
    company: "Trinixbyte Solutions Limited",
    tech: ["React.js", "REST APIs", "CMS", "Tailwind CSS"],
    highlights: [
      "Built public-facing pages for the organisation.",
      "Developed an administrative CMS for events, departments, history, and media.",
      "Integrated backend APIs into responsive React interfaces.",
      "Created a maintainable content workflow for the organisation's team.",
    ],
    metrics: [
      { label: "Scope", value: "Public + CMS" },
      { label: "Content", value: "Events & media" },
      { label: "Role", value: "Full-stack" },
    ],
    links: { demo: "https://cacworld.org" },
  },
  {
    slug: "hwcn-global",
    title: "HWCN Global",
    tagline: "A modern front end for live services, events, and media highlights.",
    description:
      "A modern organisational front end featuring live services, events, and media highlights, with horizontal-scroll components and smooth animations on mobile and desktop.",
    overview: [
      "HWCN Global needed a front end that felt as active as its community, with space for live services, upcoming events, and media highlights.",
      "I built the interface with React, including horizontal-scroll sections and smooth animations, with careful attention to how the experience adapts between mobile and desktop.",
      "The result is a expressive, content-led experience that stays usable and responsive across screen sizes.",
    ],
    image:
      "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469882/Home_-_HWCN___His_Worship_Christian_Network_31.10.2026_19_00.png",
    accent: "#f9b234",
    category: "Frontend",
    status: "Live",
    year: "2025",
    featured: false,
    role: "Frontend developer",
    company: "Trinixbyte Solutions Limited",
    tech: ["React.js", "Tailwind CSS", "Scroll interactions", "Responsive UI"],
    highlights: [
      "Developed a modern front end for live services, events, and media highlights.",
      "Built horizontal-scroll components with smooth animations.",
      "Optimised the experience across mobile and desktop.",
      "Focused on content hierarchy and visual rhythm.",
    ],
    metrics: [
      { label: "Focus", value: "Live services" },
      { label: "Motion", value: "Scroll & reveal" },
      { label: "Role", value: "Frontend" },
    ],
    links: { demo: "https://hwcnglobal.com" },
  },
  {
    slug: "tomato",
    title: "Tomato",
    tagline: "A food delivery web app with a complete storefront and admin panel.",
    description:
      "A full food-ordering interface with product browsing, cart, and an admin panel for managing food items, transactions, and delivery.",
    overview: [
      "Tomato is a food delivery web app built around the full ordering experience — browse the menu, build a cart, and complete an order.",
      "The product includes an admin panel for managing food items, transactions, and delivery, giving operators the controls they need behind the storefront.",
      "I built the ordering interface end-to-end, keeping the customer and admin experiences consistent and responsive.",
    ],
    image:
      "https://res.cloudinary.com/dckzn6fh5/image/upload/v1793469881/Food_Del-_AmazingTech_31.10.2026_19_01.png",
    accent: "#ef4444",
    category: "Full-stack",
    status: "Live",
    year: "2025",
    featured: false,
    role: "Full-stack developer",
    company: "Practice with GreatStack",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Admin panel"],
    highlights: [
      "Built the food-ordering interface with product browsing and cart.",
      "Developed an admin panel for managing food items, transactions, and delivery.",
      "Connected the storefront and admin workflows into one product.",
      "Kept the ordering experience responsive across devices.",
    ],
    metrics: [
      { label: "Scope", value: "Storefront + admin" },
      { label: "Flow", value: "Cart & orders" },
      { label: "Role", value: "Full-stack" },
    ],
    links: { demo: "https://food-delivery-apps.vercel.app" },
  },
];

export const quickFacts = [
  { label: "Location", value: profile.location },
  { label: "Experience", value: `${profile.yearsExperience}+ years` },
  { label: "Current role", value: "Team Lead & Full Stack Developer" },
  { label: "Focus", value: "Full-stack product engineering" },
];

export const softSkills = [
  "Team Leadership & Mentoring",
  "Critical & Analytical Thinking",
  "Cross-functional Collaboration",
  "Adaptability",
  "Multitasking",
  "Communication",
  "Time Management",
  "Continuous Learning",
];

export const workflow = [
  {
    step: "01",
    title: "Discover",
    description: "Understand the problem, the users, and the constraints before writing code.",
  },
  {
    step: "02",
    title: "Architect",
    description: "Map the data, define API contracts, and shape the interface together.",
  },
  {
    step: "03",
    title: "Build",
    description: "Ship in small, typed increments with clear review boundaries.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Deploy, measure, and keep performance and accessibility in the loop.",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail",
  },
  {
    label: "Call",
    value: profile.phones[0],
    href: `tel:${profile.phoneLinks[0]}`,
    icon: "phone",
  },
  {
    label: "Location",
    value: profile.location,
    icon: "map",
  },
  {
    label: "Availability",
    value: profile.availability,
    icon: "clock",
  },
];

export const referee = {
  name: "Mr. Paul Ajadi",
  role: "Chief Executive Officer",
  company: "Trinixbyte Solutions Limited, Nigeria",
  phone: "+234 815 096 0942",
  phoneLink: "+2348150960942",
};

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
