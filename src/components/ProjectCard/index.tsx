import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Chip from "../common/Chip";
import Typography from "../common/Typography";
import Button from "../common/Button";

const ProjectCard = () => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["image-container"]}>
        <Image
          src="/sharesheet.png"
          alt="project"
          className={styles["project-image"]}
          width={600}
          height={400}
        />
      </div>
      <div className={styles["content"]}>
        <div className={styles.details}>
          <Typography variant="h3">Project Name</Typography>
          <Typography variant="body2" className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
            tenetur accusantium debitis ratione molestiae nulla quia iure iste
            in sequi earum omnis deserunt, laudantium asperiores. Excepturi
            consectetur quo dignissimos maxime?
          </Typography>
          <div className={styles["tech-stack"]}>
            <Chip label="React" />
            <Chip label="Next.js" />
            <Chip label="Tailwind CSS" />
          </div>
        </div>
        <div className={styles["buttons"]}>
          <Button variant="contained" color="primary" size="small">
            View Project
          </Button>
          <Button variant="outlined" color="secondary" size="small">
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
