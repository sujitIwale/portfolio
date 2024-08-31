import styles from "./TitleCard.module.css";

interface TitleCardProps {
  title: string;
  children: React.ReactNode;
}

const TitleCard = ({ children, title }: TitleCardProps) => {
  return (
    <div className={`${styles["title-card"]}`}>
      <div className={styles["title-container"]}>
        <h5 className={styles.title}>{title}</h5>
      </div>
      <div className={styles["content"]}>{children}</div>
    </div>
  );
};

export default TitleCard;
