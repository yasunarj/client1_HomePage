import { shippori } from "@/app/lib/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`mb-8 md:mb-0 ${shippori.className}`}>
            <h3 className="text-2xl font-bold mb-4">栃木サウナ熱波協会</h3>
            <p className="text-gray-400">心と体を癒す、究極のサウナ体験を提供します</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/company" className="text-gray-400 hover:text-orange-500 transition-colors">
              会社概要
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">
              利用規約
            </Link>
          </div>
          <p className="text-center text-gray-400">&copy; 2025 栃木サウナ熱波協会 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 