"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import ThemeSwitch from "../common/ThemeSwitch";
import useDevice from "@/hooks/useDevice";

const Header = () => {
  const device = useDevice();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.content}>
          <Link href="/">
            <h1 className={styles.title}>SUJIT IWALE</h1>
          </Link>
          <nav className={styles["navbar"]}>
            <div className={styles["links-container"]}>
              <Link href="#experience">Experience</Link>
              <Link href="#projects">Projects</Link>
              {/* <Link href="/">Education</Link> */}
            </div>
            <div className={styles["buttons-group"]}>
              {/* <IconButton>
              <i className="fa-brands fa-github"></i>
            </IconButton>
            <IconButton>
              <i className="fa-brands fa-linkedin"></i>
            </IconButton> */}
              <ThemeSwitch />
            </div>
          </nav>
        </div>
      </header>

      {device === "mobile" ? (
        <nav className={styles["menu"]}>
          <div className={styles["links-container"]}>
            <Link href="#experience">Experience</Link>
            <Link href="#projects">Projects</Link>
          </div>
          <div className={styles["buttons-group"]}>
            <ThemeSwitch />
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default Header;
