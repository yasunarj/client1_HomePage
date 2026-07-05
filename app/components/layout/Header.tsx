"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { shippori } from "@/app/lib/fonts";
import { headerNavList } from "@/app/lib/headerNavList";
import { scrollElementIn } from "@/app/lib/scrollElementIn";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setIsHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
        setIsMenuOpen(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    scrollElementIn(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm select-none transition-transform duration-500 ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full md:container mx-auto px-4 py-3">
        <div className={`flex justify-between items-center `}>
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 rounded-full mr-1 relative animate-fadeIn">
              <Image
                src={"/images/header_logo_transparent.png"}
                fill
                alt={"栃木サウナ熱波協会の会社のロゴ"}
                className="object-cover"
                priority
                sizes="48px"
              />
              {/* <span className="absolute top-2 left-1 text-white">ロゴ</span> */}
            </div>
            <span className={`text-base sm:text-lg md:text-xl font-bold ${shippori.className} pb-0.5`}>
              栃木サウナ熱波協会
            </span>
          </Link>

          {!isMenuOpen && (
            <div className="flex gap-2 items-center">
              <div className="group flex items-center z-50">
                <button
                  type="button"
                  className="rounded bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-orange-950/20 transition group-hover:-translate-y-0.5 group-hover:shadow-lg md:hidden"
                  onClick={() => handleNavClick("recruit")}
                >
                  募集
                </button>
              </div>
              <button
                type="button"
                className={`p-2 rounded-lg transition hover:-translate-y-0.5 hover:bg-gray-100 md:hidden z-50`}
                onClick={() => {
                  setIsMenuOpen((prev) => !prev);
                }}
                aria-label="メニューを開く"
              >
                <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
                <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
                <div className="w-6 h-0.5 bg-gray-800"></div>
              </button>
            </div>
          )}

          <nav className="hidden md:flex space-x-5 lg:space-x-8">
            {headerNavList.map((list) => {
              const isRecruit = list.id === "recruit";

              return (
                <button
                  key={list.id}
                  className={
                    isRecruit
                      ? "rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-4 py-1.5 text-sm font-bold text-white shadow-md shadow-orange-950/20 transition hover:-translate-y-0.5 hover:shadow-lg lg:text-base"
                      : "group relative text-sm lg:text-base hover:text-orange-500 transition-color"
                  }
                  onClick={() => scrollElementIn(list.id)}
                >
                  {list.list}
                  <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left "></span>
                </button>
              );
            })}
          </nav>
        </div>
        {/* モバイルメニュー */}

        <div
          className={`md:hidden fixed inset-0 bg-white/90 backdrop-blur-sm transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
        >
          <div className="w-full mx-auto px-4 py-4 bg-white/90">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center">
                <div className="w-12 h-12 rounded-full mr-1 relative animate-fadeIn">
                  <Image
                    src={"/images/header_logo_transparent.png"}
                    fill
                    alt={"栃木サウナ熱波協会の会社のロゴ"}
                    className="object-cover"
                    priority
                    sizes="48px"
                  />
                  {/* <span className="absolute top-2 left-1 text-white">ロゴ</span> */}
                </div>
                <span
                  className={`text-xl font-bold ${shippori.className} pb-0.5`}
                >
                  栃木サウナ熱波協会
                </span>
              </Link>
              <div>
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 z-50 relative w-8 h-8"
                  onClick={() => {
                    setIsMenuOpen((prev) => !prev);
                  }}
                >
                  <div className="absolute w-6 h-0.5 bg-gray-800 rotate-45 top-4 left-1"></div>
                  <div className="absolute w-6 h-0.5 bg-gray-800 -rotate-45 top-4 left-1"></div>
                </button>
              </div>
            </div>

            <nav className="flex flex-col gap-4 items-end">
              {headerNavList.map((list) => {
                return (
                  <button
                    key={list.id}
                    className="group relative hover:text-orange-500 transition-color text-lg"
                    onClick={() => {
                      setIsMenuOpen((prev) => !prev);
                      scrollElementIn(list.id);
                    }}
                  >
                    {list.list}
                    <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
