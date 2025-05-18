"use client";

import { useEffect, useRef } from "react";

export default function InstagramEmbed({url}: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Instagram埋め込みスクリプトを動的に読み込み
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    containerRef.current?.appendChild(script);
  }, []);

  return (
    <div ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 3,
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px",
          maxWidth: 540,
          minWidth: 324,
          padding: 0,
          width: "calc(100% - 2px)",
        }}
      >
        <a
          href="https://www.instagram.com/p/DIG1tLUzoMv/?utm_source=ig_embed&amp;utm_campaign=loading"
          target="_blank"
          rel="noopener noreferrer"
        >
          大田原温泉太陽の湯のInstagram投稿を見る
        </a>
      </blockquote>
    </div>
  );
}
