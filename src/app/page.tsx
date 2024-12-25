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
