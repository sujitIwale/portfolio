"use client";

import { useEffect, useState } from "react";
import IconButton from "../IconButton";
import useThemeDetector from "@/hooks/useThemeDetector";

const changeTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
};

const ThemeSwitch = () => {
  const { isDarkTheme } = useThemeDetector();
  const [theme, setTheme] = useState(isDarkTheme ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    changeTheme(newTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      changeTheme("dark");
    } else {
      changeTheme("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <IconButton onClick={switchTheme}>
        {theme === "dark" ? (
          <i className="fa-regular fa-moon"></i>
        ) : (
          <i className="fa-regular fa-sun"></i>
        )}
      </IconButton>
    </div>
  );
};

export default ThemeSwitch;
