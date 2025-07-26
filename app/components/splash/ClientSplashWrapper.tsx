"use client";

import { ReactNode, useEffect, useState } from "react";
import SplashScreen from "../sections/SplashScreen";
import { shippori } from "@/app/lib/fonts";

const ClientSplashWrapper = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true); 
      setTimeout(() => {
        setShowMain(true);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMain) {
    return <SplashScreen isFading={isFading} />;
  }

  return <div className={`${shippori.className}`}>{children}</div>;
};

export default ClientSplashWrapper;
