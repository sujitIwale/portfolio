"use client";

import { useEffect } from "react";
import { initializeMixpanel } from "@/lib/analytics";

const MixpanelProvider = () => {
  useEffect(() => {
    initializeMixpanel();
  }, []);

  return null;
};

export default MixpanelProvider;
