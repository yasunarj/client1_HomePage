"use client";

import Container from "../layout/Container";
import { staffInstagramList } from "@/app/lib/staffSocialList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import InstagramEmbed from "./InstagramEmbed";

export default function SocialSection() {
  const title = useFadeInOnView();
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <Container>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <h2
          ref={title.ref}
          className="relative text-3xl sm:text-4xl font-bold text-center mb-16 z-10"
        >
          <span
            className={`transition-color duration-[2s] ${
              title.isVisible ? "text-white" : "text-orange-600"
            }`}
          >
            SNS更新情報
          </span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
          {/* 会社用Instagram */}
          <div className="w-full max-w-md sm:max-w-lg mx-auto">
            <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-lg max-h-[720px] sm:min-h-[720px]">
              <div className="bg-gradient-to-r from-orange-500 to-red-600">
                <h3 className="text-xl font-bold text-white text-center">
                  大田原熱波協会 Instagram
                </h3>
              </div>
              <div className="p-4 sm:min-h-[720px] overflow-auto touch-pan-y">
                <InstagramEmbed url={"https://www.instagram.com/p/DIG1tLUzoMv/?utm_source=ig_embed&amp;utm_campaign=loading"}/>
              </div>
            </div>
          </div>

          {/* 個人用Instagram */}
          <div className="w-full max-w-md sm:max-w-lg mx-auto h-full min-h-[500px]">
            <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden max-h-[720px]">
              <div className="bg-gradient-to-r from-orange-500 to-red-600">
                <h3 className="text-xl font-bold text-white text-center">
                  熱波師のSNS情報
                </h3>
              </div>
              <div className="p-4 overflow-auto touch-pan-y">
                <div className="grid grid-cols-1 gap-6">
                  {staffInstagramList.map((person, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                          {person.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{person.name}</h4>
                          <p className="text-sm text-gray-600">
                            @{person.handle}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`https://www.instagram.com/${person.handle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                        >
                          <svg
                            className="w-6 h-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Instagram
                        </a>
                        <a
                          href={`https://twitter.com/${person.xHandle}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white rounded-lg hover:from-blue-600 hover:to-blue-900 transition-all duration-300"
                        >
                          <svg
                            className="w-6 h-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          X
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
