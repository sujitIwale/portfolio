import Typography from "@/components/common/Typography";
import styles from "./page.module.css";
import Button from "@/components/common/Button";

const HeroSection = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["light-container"]}>
        <div className={styles["bg-light"]}>
          <div className={styles["light-element"]}></div>
        </div>
      </div>
      <Typography variant="h1">Hello I am Sujit Iwale</Typography>
      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quaerat
        facere hic nulla deleniti a culpa aliquid sint delectus voluptatibus,
        cumque exercitationem at repudiandae quidem ullam explicabo. Saepe,
        cupiditate ullam.
      </Typography>
      <div className={styles["action-buttons"]}>
        <Button variant="contained" color="primary" size="medium">
          View Resume
        </Button>
        <Button variant="outlined" color="primary" size="medium">
          View Blog
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
