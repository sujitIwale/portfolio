"use client";

import Typography from "@/components/common/Typography";
import styles from "./page.module.css";
import Button from "@/components/common/Button";
import Links from "@/components/links";
import { personalData, resumeLink } from "@/data/data";
import { trackMixpanel } from "@/lib/analytics";

const HeroSection = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["light-container"]}>
        <div className={styles["bg-light"]}>
          <div className={styles["light-element"]}></div>
        </div>
      </div>
      <Typography variant="h1">Hi, I&apos;m Sujit 👋</Typography>
      <Links />
      <Typography variant="body1" color="secondary">
        {personalData.about}
      </Typography>
      <div className={styles["action-buttons"]}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          href={resumeLink}
          target="_blank"
          onClick={() => {
            trackMixpanel("View Resume");
          }}
        >
          View Resume
        </Button>
        <Button
          onClick={() => trackMixpanel("View Blog")}
          variant="outlined"
          color="primary"
          size="medium"
        >
          View Blog
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
