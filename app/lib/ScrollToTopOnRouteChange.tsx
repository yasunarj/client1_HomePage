// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// const ScrollToTopOnRouteChange = () => {
//   const pathname = usePathname();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
// return null;
// }

// export default ScrollToTopOnRouteChange;

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTopOnRouteChange = () => {
  const pathname = usePathname();

  // ルート遷移時は常に 0 に
  useEffect(() => {
    const sc = document.getElementById("scrollable-container");

    const reset = () => {
      // 内側コンテナを最優先で 0 に
      if (sc) sc.scrollTo({ top: 0, left: 0, behavior: "auto" });

      // 念のため window / document 側もリセット
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // 初期レイアウト後に確実に実行（iOS向け）
    requestAnimationFrame(() => requestAnimationFrame(reset));
  }, [pathname]);

  // ブラウザのスクロール復元を無効化（戻る/進む時の意図しない復元対策）
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const prev = (history as any).scrollRestoration;
      (history as any).scrollRestoration = "manual";
      return () => {
        (history as any).scrollRestoration = prev ?? "auto";
      };
    }
  }, []);

  return null;
};

export default ScrollToTopOnRouteChange;