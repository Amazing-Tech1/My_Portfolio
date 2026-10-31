import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-360 flex-col pb-24 lg:pb-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceSection />
      <Contact />
    </div>
  );
}
