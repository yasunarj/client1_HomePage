import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTopOnRouteChange from "./lib/ScrollToTopOnRouteChange";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// } satisfies Viewport;
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // 追加
  viewportFit: "cover",
} satisfies Viewport;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.tochigi-sauna-neppakyoukai.jp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "栃木サウナ熱波協会｜出張サウナ・熱波イベントならお任せ",
  description:
    "栃木を拠点に活動するプロの熱波師による出張サウナ演出・イベント出演。全国対応も可能な「栃木サウナ熱波協会」公式サイト。",
  keywords: [
    "サウナ",
    "熱波師",
    "栃木",
    "出張サウナ",
    "サウナイベント",
    "栃木サウナ熱波協会",
  ],
  alternates: { canonical: "/" }, // 相対→絶対に解決される
  openGraph: {
    type: "website",
    siteName: "栃木サウナ熱波協会",
    locale: "ja_JP",
    url: "/", // 相対でOK
    images: ["/images/heroPicture.jpg"], // ←日本語名は避ける
    title: "栃木サウナ熱波協会｜出張サウナ・熱波イベントならお任せ",
    description:
      "栃木を拠点に活動するプロの熱波師による出張サウナ演出・イベント出演。全国対応も可能な「栃木サウナ熱波協会」公式サイト。",
  },
  twitter: {
    card: "summary_large_image",
    title: "栃木サウナ熱波協会｜熱波師による出張イベント",
    description:
      "栃木から全国へ、プロ熱波師による出張サウナ・イベント出演。公式サイトはこちら。",
    images: ["/images/heroPicture.jpg"], // 相対OK（metadataBaseで絶対化）
  },
  icons: { icon: "/favicon.ico" },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden min-h-[100dvh]`}
      >
        <ScrollToTopOnRouteChange />
        <div
          id="scrollable-container"
          className="flex flex-col h-[100dvh] overflow-y-auto overscroll-contain"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
