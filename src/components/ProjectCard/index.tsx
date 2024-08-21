import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Chip from "../common/Chip";
import Typography from "../common/Typography";

const ProjectCard = () => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["image-container"]}>
        <Image
          src="/temp.png"
          alt="project"
          className={styles["project-image"]}
          width={600}
          height={400}
        />
      </div>
      <div className={styles["content"]}>
        <div className={styles.details}>
          <Typography variant="h3">Project Name</Typography>
          <Typography variant="body1">Project Description</Typography>
          <div className={styles["tech-stack"]}>
            <Chip label="React" />
            <Chip label="Next.js" />
            <Chip label="Tailwind CSS" />
          </div>
        </div>
        <div className={styles["buttons"]}>
          <button className="button primary-button">View Project</button>
          <button className="button secondary-button">View Code</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
