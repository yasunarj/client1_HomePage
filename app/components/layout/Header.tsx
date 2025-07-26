"use client";

import { useState } from "react";
import Link from "next/link";
import { shippori } from "@/app/lib/fonts";
import { headerNavList } from "@/app/lib/headerNavList";
import { scrollElementIn } from "@/app/lib/scrollElementIn";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-20 shadow-sm select-none">
      <div className="w-full md:container mx-auto px-4 py-4">
        <div className={`flex justify-between items-center `}>
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-full mr-1 relative">
              <Image
                src={"/images/火と風のエレメント.png"}
                fill
                alt={"栃木サウナ熱波協会の会社のロゴ"}
                className="object-cover"
              />
              {/* <span className="absolute top-2 left-1 text-white">ロゴ</span> */}
            </div>
            <span className={`text-xl font-bold ${shippori.className} pb-0.5`}>
              栃木サウナ熱波協会
            </span>
          </Link>
          {!isMenuOpen && (
            <button
              className={`p-2 rounded-lg hover:bg-gray-100 md:hidden z-50`}
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
            >
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </button>
          )}
          <nav className="hidden md:flex space-x-8">
            {headerNavList.map((list) => {
              return (
                <button
                  key={list.id}
                  className="group relative hover:text-orange-500 transition-color"
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
              : "opacity-0 -translate-y-full"
          }`}
        >
          <div className="w-full mx-auto px-4 py-4 bg-white/90">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-orange-500 rounded-full mr-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full mr-3 relative">
                    <span className="absolute top-2 left-1 text-white">
                      ロゴ
                    </span>
                  </div>
                </div>
                <span className={`text-xl font-bold ${shippori.className}`}>
                  大田原熱波協会
                </span>
              </Link>
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
              {/* <Link
                href="#profile"
                className="group relative hover:text-orange-500 transition-color text-lg"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                プロフィール
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
              <Link
                href="#services"
                className="group relative hover:text-orange-500 transition-colors text-lg"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                サービス
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
              <Link
                href="#schedule"
                className="group relative hover:text-orange-500 transition-colors text-lg"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                スケジュール
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link>
              <Link
                href="#contact"
                className="group relative hover:text-orange-500 transition-colors text-lg"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                お問い合わせ
                <span className="absolute left-0 bottom-[1px] w-full h-[1px] bg-red-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </Link> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
