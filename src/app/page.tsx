import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";
import HeroSection from "./HeroSection";
import Typography from "@/components/common/Typography";
import Skills from "@/components/sections/Skills/Skills";
import { projects } from "@/data/data";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className={styles["page-container"]}>
      <HeroSection />
      <Skills />
      <Experience />
      <section className={styles["projects-section"]} id="projects">
        <Typography variant="h2">My Projects</Typography>
        <div className={styles["projects-list"]}>
          {projects.map((project, ind) => (
            <ProjectCard key={ind} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
