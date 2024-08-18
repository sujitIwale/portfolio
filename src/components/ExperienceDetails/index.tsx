import Image from "next/image";
import styles from "./ExperienceDetails.module.css";
import Chip from "../common/Chip";

interface ExperienceDetailsProps {
  organization: string;
  role: string;
  logo: string;
}

const ExperienceDetails = ({
  organization,
  role,
  logo,
}: ExperienceDetailsProps) => {
  return (
    <div className={`${styles["experience-card"]}`}>
      <div className={styles["company-profile"]}>
        <Image src={logo} alt="" height={100} width={100} />
      </div>
      <div className={styles["experience-details"]}>
        <h4>{organization}</h4>
        <p>{role}</p>
        <p>Jan 2021 - Present</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi veniam
          obcaecati officiis delectus accusamus deserunt ea nam aliquid neque
          in, maiores repellat id, quaerat aperiam. Adipisci ipsum iure cumque
          perspiciatis.
        </p>
        <div className={styles.skills}>
          <Chip>React</Chip>
          <Chip>Redux</Chip>
          <Chip>Typescript</Chip>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;
