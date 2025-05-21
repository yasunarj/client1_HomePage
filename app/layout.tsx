import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "栃木サウナ熱波協会",
  description: "プロフェッショナルな熱波師があなたのサウナ体験を演出します",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  keywords: [
    "サウナ",
    "熱波師",
    "栃木",
    "出張サウナ",
    "サウナイベント",
    "栃木サウナ熱波協会",
  ],
  openGraph: {
    title: "栃木サウナ熱波協会",
    description: "プロの熱波師による最高のサウナ体験をあなたに",
    url: "https://client1-home-page.vercel.app",
    siteName: "栃木サウナ熱波協会",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://client1-home-page.vercel.app/images/gallery1.jpg",
        width: 1200,
        height: 630,
        alt: "栃木サウナ熱波協会 OGP画像",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "栃木サウナ熱波協会",
    description: "サウナイベント・出張熱波なら栃木サウナ熱波協会へ。",
    // site: "@tochigi_sauna",
    images: ["https://client1-home-page.vercel.app/images/gallery1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        <ScrollToTopOnRouteChange />
        <div className="flex flex-col overflow-y-auto">{children}</div>
      </body>
    </html>
  );
}
