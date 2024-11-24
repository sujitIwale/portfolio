import Command from "./components/Command";
import "./common.css";
import styles from "./Terminal.module.css";

const Terminal = () => {
  return (
    <div className={styles["terminal-container"]}>
      <header className={styles.header}>
        <nav>
          <div className={styles.red}></div>
          <div className={styles.yellow}></div>
          <div className={styles.green}></div>
        </nav>
      </header>
      <div className={styles["body"]}>
        <Command command={{ command: "ls", directory: "~" }} />
        <Command command={{ command: "ls", directory: "~" }} isActive />
      </div>
    </div>
  );
};

export default Terminal;
