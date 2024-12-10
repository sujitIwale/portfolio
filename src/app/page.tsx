import Image from "next/image";
import styles from "./page.module.css";
import TitleCard from "@/components/common/TitleCard";
import ExperienceDetails from "@/components/ExperienceDetails";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import Typography from "@/components/common/Typography";
import projects from "@/data/projects";
import Skills from "@/components/sections/Skills/Skills";

export default function Home() {
  return (
    <main className={styles["page-container"]}>
      <HeroSection />
      <Skills />
      <ExperienceSection />
      {/* <section className={styles["experience-section"]}>
        <TitleCard title="Experience">
          <ExperienceDetails
            logo="https://www.smallcase.com/static/svgs/logo-mark.svg"
            organization="Smallcase"
            role="Frontend Engineer Intern"
          />
          <ExperienceDetails
            logo="https://static.vecteezy.com/system/resources/previews/013/948/549/original/google-logo-on-transparent-white-background-free-vector.jpg"
            organization="Google"
            role="Software Engineer Frontend"
          />
        </TitleCard>
      </section> */}
      <section className={styles["projects-section"]} id="projects">
        <Typography variant="h2">My Projects</Typography>
        <div className={styles["projects-list"]}>
          {projects.map((project) => (
            <ProjectCard key={project.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
