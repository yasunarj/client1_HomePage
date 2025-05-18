import { shippori } from "@/app/lib/fonts";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`mb-8 md:mb-0 ${shippori.className}`}>
            <h3 className="text-2xl font-bold mb-4">大田原熱波協会</h3>
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

        {/* 協力会社セクション */}
        {/* <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-bold text-center mb-6">Special Thanks to</h4>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://www.taiyounoyu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <span className="text-2xl">🌞</span>
                </div>
                <span className="text-gray-300 group-hover:text-orange-500 transition-colors">
                  太陽の湯
                </span>
              </div>
            </a>
            <a
              href="https://www.yasuraginoyu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <span className="text-2xl">♨️</span>
                </div>
                <span className="text-gray-300 group-hover:text-orange-500 transition-colors">
                  安らぎの湯
                </span>
              </div>
            </a>
          </div>
        </div> */}

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 大田原熱波協会 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 