import { FaInstagram } from "react-icons/fa";
import { shippori } from "@/app/lib/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        お問い合わせ
      </h2>
      <div className="container mx-auto px-4">
        <div className={`mb-8 md:mb-0 ${shippori.className}`}>
          {/* 1行目：テキスト＋Instagramリンク（smでは縦、md以上で横並び） */}
          <div
            className="
      flex flex-col items-center justify-center gap-2 md:flex-row md:gap-2
      md:mb-2
    "
          >
            <p className="text-[16px] md:text-xl font-bold leading-tight text-center">
              栃木サウナ熱波協会代表 熱波送郎の
            </p>
            <div>
              <a
                href="https://www.instagram.com/atunami_okuro37/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram（熱波送郎）"
                className="
        inline-flex items-center gap-1 font-bold
        text-orange-500 hover:text-orange-600
        leading-tight
        text-[16px] md:text-xl
      "
              >
                {/* アイコンは幅によってサイズを変える */}
                <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
                <span className="whitespace-nowrap">Instagram</span>
              </a>

              <span className="text-[16px] md:text-xl font-bold leading-tight">
                へ
              </span>
              <span className="text-[16px] md:text-xl font-bold leading-tight text-center">
                DMをお願いします。
              </span>
            </div>
          </div>
          {/* 2行目：説明文（常に中央寄せ） */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="/company"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              会社概要
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-orange-500 transition-colors"
            >
              利用規約
            </Link>
          </div>
          <p className="text-center text-gray-400">
            &copy; 2025 栃木サウナ熱波協会 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

{
  /* <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="hover:text-orange-500 transition-colors">
              <span className="text-2xl">📱</span>
              <span className="ml-2">080-1234-5678</span>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <span className="text-2xl">✉️</span>
              <span className="ml-2">info@otawara-sauna.com</span>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <span className="text-2xl">📸</span>
              <span className="ml-2">@otawara_sauna</span>
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <span className="text-2xl">🐦</span>
              <span className="ml-2">@otawara_sauna</span>
            </a>
          </div> */
}
