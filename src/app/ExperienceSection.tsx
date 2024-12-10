import ExperienceDetails from "@/components/ExperienceDetails";
import styles from "./page.module.css";
import { experience } from "@/data/data";
import Timeline from "@/components/timeline";
import { TimelineItem } from "@/components/timeline/TimelineItem";

const ExperienceSection = () => {
  return (
    <section className={styles["experience-section"]}>
      {/* <div className={styles["timeline-container"]}>
        <div className={styles["item-container"]}>
          <div className={styles["item-indicator"]}></div>
          <div className={styles["item"]}>
            <ExperienceDetails
              logo="https://www.smallcase.com/static/svgs/logo-mark.svg"
              organization="Smallcase"
              role="Frontend Engineer Intern"
            />
          </div>
        </div>
        <div className={styles["item-container"]}>
          <div className={styles["item-indicator"]}></div>
          <div className={styles["item"]}>
            <ExperienceDetails
              logo="https://www.smallcase.com/static/svgs/logo-mark.svg"
              organization="Smallcase"
              role="Frontend Engineer Intern"
            />
          </div>
        </div>
        <div className={styles["item-container"]}>
          <div className={styles["item-indicator"]}></div>
          <div className={styles["item"]}>
            <ExperienceDetails
              logo="https://www.smallcase.com/static/svgs/logo-mark.svg"
              organization="Smallcase"
              role="Frontend Engineer Intern"
            />
          </div>
        </div>
      </div> */}
      <Timeline>
        {experience.map((item, index) => (
          <TimelineItem
            key={index}
            {...item}
            index={index}
            isLatest={index === 0}
          />
        ))}
      </Timeline>
    </section>
  );
};

export default ExperienceSection;
