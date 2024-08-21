import Image from "next/image";
import styles from "./page.module.css";
import "../css/common.css";
import TitleCard from "@/components/common/TitleCard";
import ExperienceDetails from "@/components/ExperienceDetails";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className={styles["page-container"]}>
      <section className={styles["intro-section"]}>
        <div className={styles["info"]}>
          <h1>Hello I am Sujit Iwale</h1>
          <p>Something is this hello from working.</p>
          <div className={styles["action-buttons"]}>
            <button className="button primary-button">Contact Me</button>
            <button className="button secondary-button">View Blog</button>
          </div>
        </div>
        <div className={styles["hero-right-part"]}>
          <Image src="/temp.png" alt="Profile" width={600} height={400} />
        </div>
      </section>
      <section className={styles["experience-section"]}>
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
      </section>
      <section className={styles["projects-section"]}>
        <h2>Projects</h2>
        <div className={styles["projects-list"]}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  );
}
