import Link from "next/link";
import IconButton from "../common/IconButton";
import styles from "./Header.module.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>SUJIT IWALE</h1>
      <nav className={styles["navbar"]}>
        <div className={styles["links-container"]}>
          <Link href="/">Projects</Link>
          <Link href="/">Experience</Link>
          <Link href="/">Education</Link>
        </div>
        <div className={styles["buttons-group"]}>
          <IconButton>
            <i className="fa-brands fa-github"></i>
          </IconButton>
          <IconButton>
            <i className="fa-brands fa-linkedin"></i>
          </IconButton>
        </div>
      </nav>
    </header>
  );
};

export default Header;
