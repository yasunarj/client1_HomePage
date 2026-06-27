"use client";

import { ReactNode, useEffect, useState } from "react";
import SplashScreen from "../sections/SplashScreen";
import { shippori } from "@/app/lib/fonts";

const ClientSplashWrapper = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState<boolean>(true);
  const [isFading, setIsFading] = useState<boolean>(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 5000);

    const showMainTimer = setTimeout(() => {
      setShowMain(true);
    }, 6000);

    return () => {
      clearTimeout(fadeTimer); 
      clearTimeout(showMainTimer);
    }
  }, []);

  if (!showMain) {
    return <SplashScreen isFading={isFading} />;
  }

  return <div className={`${shippori.className}`}>{children}</div>;
};

export default ClientSplashWrapper;
