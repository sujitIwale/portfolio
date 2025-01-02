import { useEffect, useState } from "react";

const getMedia = (theme: string) => window.matchMedia(theme);

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const themeChangeLister = (e: MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
  };

  useEffect(() => {
    const media = getMedia("(prefers-color-scheme: dark)");
    setIsDarkTheme(media.matches);
    media.onchange = themeChangeLister;
    return () => media.removeEventListener("change", themeChangeLister);
  }, []);

  return { isDarkTheme };
};

export default useThemeDetector;
