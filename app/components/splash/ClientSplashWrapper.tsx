"use client";

import { ReactNode, useEffect, useState } from "react";
import SplashScreen from "../sections/SplashScreen";
import { shippori } from "@/app/lib/fonts";

const ClientSplashWrapper = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState<boolean>(true);
  const [isFading, setIsFading] = useState<boolean>(true);

  useEffect(() => {
    const html = document.documentElement;
    const id1 = requestAnimationFrame(() => {
      html.classList.add("ios-paint-ready");
    });

    const t1 = setTimeout(() => {
      setIsFading(true);
      const t2 = setTimeout(() => setShowMain(true), 1000);
      return () => clearTimeout(t2);
    }, 3000);

    return () => {
      cancelAnimationFrame(id1);
      clearTimeout(t1);
    };
  }, []);

  if (!showMain) {
    return <SplashScreen isFading={isFading} />;
  }

  return <div className={`${shippori.className}`}>{children}</div>;
};

export default ClientSplashWrapper;

//   const timer = setTimeout(() => {
//     setIsFading(true);
//     setTimeout(() => {
//       setShowMain(true);
//     }, 1000);
//   }, 3000);

//   return () => clearTimeout(timer);
