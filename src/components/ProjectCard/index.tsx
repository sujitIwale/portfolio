import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Chip from "../common/Chip";
import Typography from "../common/Typography";
import Button from "../common/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  githubLink,
  liveLink,
}: ProjectCardProps) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["image-container"]}>
        <Image src={image} alt={title} width={600} height={400} />
      </div>
      <div className={styles["content"]}>
        <div className={styles.details}>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body2" color="secondary">
            {description}
          </Typography>
          <div className={styles["tech-stack"]}>
            {techStack.map((tech, i) => (
              <Chip key={i} label={tech} />
            ))}
          </div>
        </div>
        <div className={styles["buttons"]}>
          <Button
            href={liveLink}
            target="_blank"
            variant="contained"
            color="primary"
            size="small"
          >
            View Project
          </Button>
          <Button
            href={githubLink}
            target="_blank"
            variant="outlined"
            color="primary"
            size="small"
          >
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
