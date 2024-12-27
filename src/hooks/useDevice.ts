import { useEffect, useState } from "react";

type Device = "mobile" | "tab" | "desktop";

const useDevice = () => {
  const [device, setDevice] = useState<Device>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      const isTablet =
        /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        setDevice("mobile");
      } else if (isTablet) {
        setDevice("tab");
      } else {
        setDevice("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return device;
};

export default useDevice;
