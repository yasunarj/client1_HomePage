"use client";
import { ReactNode, useEffect, useState } from "react";
import SplashScreen from "../sections/SplashScreen";
import { shippori } from "@/app/lib/fonts";

const isIosChrome = () => {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  // iOS Chrome は CriOS を名乗る
  return /CriOS/i.test(ua);
};

const ClientSplashWrapper = ({ children }: { children: ReactNode }) => {
  const [showMain, setShowMain] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // 新規: 初期フレーム安定化フラグ
  const [ready, setReady] = useState(false);
  const [showSteam, setShowSteam] = useState(false);

  useEffect(() => {
    // ① 次フレームで背景をグラデに昇格
    const id1 = requestAnimationFrame(() => setReady(true));
    // ② さらに次のタイミングで蒸気（重いレイヤ）をマウント
    const id2 = requestAnimationFrame(() => {
      const t = setTimeout(() => setShowSteam(true), 100); // 少し遅らせる
      return () => clearTimeout(t);
    });

    // ③ スプラッシュの表示時間→フェード→本体
    // iOS Chrome だけは切り分けテストができるよう「短く」も試せます
    const splashMs = isIosChrome() ? 2200 : 3000;

    const t1 = setTimeout(() => {
      setIsFading(true);
      const t2 = setTimeout(() => setShowMain(true), 1000);
      return () => clearTimeout(t2);
    }, splashMs);

    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
      clearTimeout(t1);
    };
  }, []);

  // iOS Chromeのみの暫定バイパス（検証用）：スプラッシュを完全スキップして原因切り分け
  // → 白黒が100%消えるなら「スプラッシュ×iOS Chromeの初期描画」が犯人と確定
  if (isIosChrome()) {
    // 必要ならコメントアウトして「バイパスなし」でも挙動比較を
    return <div className={shippori.className}>{children}</div>;
  }

  if (!showMain) return <SplashScreen isFading={isFading} ready={ready} showSteam={showSteam} />;
  return <div className={shippori.className}>{children}</div>;
};

export default ClientSplashWrapper;


// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import SplashScreen from "../sections/SplashScreen";
// import { shippori } from "@/app/lib/fonts";

// const ClientSplashWrapper = ({ children }: { children: ReactNode }) => {
//   const [showMain, setShowMain] = useState<boolean>(false);
//   const [isFading, setIsFading] = useState<boolean>(false);

//   useEffect(() => {
//     const html = document.documentElement;
//     const id1 = requestAnimationFrame(() => {
//       html.classList.add("ios-paint-ready");
//     });

//     const t1 = setTimeout(() => {
//       setIsFading(true);
//       const t2 = setTimeout(() => setShowMain(true), 1000);
//       return () => clearTimeout(t2);
//     }, 3000);

//     return () => {
//       cancelAnimationFrame(id1);
//       clearTimeout(t1);
//     };
//   }, []);

//   if (!showMain) {
//     return <SplashScreen isFading={isFading} />;
//   }

//   return <div className={`${shippori.className}`}>{children}</div>;
// };

// export default ClientSplashWrapper;

//   const timer = setTimeout(() => {
//     setIsFading(true);
//     setTimeout(() => {
//       setShowMain(true);
//     }, 1000);
//   }, 3000);

//   return () => clearTimeout(timer);
