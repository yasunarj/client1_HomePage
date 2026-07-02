"use client";

import Container from "../layout/Container";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const features = [
  {
    title: "熱波",
    description: "最適な温度と湿度で、心地よい熱波をお届けします",
    bgClass: "bg-orange-50",
    iconBgClass: "bg-orange-500",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
  {
    title: "五感へのアプローチ",
    description: "香り・音・風・熱で、五感に訴える体験を演出します",
    bgClass: "bg-red-50",
    iconBgClass: "bg-red-500",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
  {
    title: "安全への配慮",
    description: "安全に熱波を楽しんでいただくための知識を大切にしています",
    bgClass: "bg-orange-50",
    iconBgClass: "bg-orange-500",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "演出",
    description: "音楽やタオルさばきで、各熱波師の個性を発揮します",
    bgClass: "bg-red-50",
    iconBgClass: "bg-red-500",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    ),
  },
];

export default function WhatIsNeppashiSection() {
  const title = useFadeInOnView();
  const text = useFadeInOnView();
  const image = useFadeInOnView();

  return (
    <section
      id="what-is-neppashi"
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden bg-gradient-to-b from-white via-orange-50 to-orange-100 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(251,146,60,0.22),transparent_35%)]" />
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-red-200/25 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-6xl overflow-hidden p-2">
          <div ref={title.ref} className="mb-14 text-center">
            <p
              className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${
                title.isVisible ? "text-orange-500" : "text-orange-700"
              }`}
            >
              ABOUT
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span
                className={`transition-colors duration-[2s] ${
                  title.isVisible ? "text-gray-900" : "text-orange-600"
                }`}
              >
                熱波師とは？
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-44 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-52" />

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-8 transition-colors duration-[2s] sm:text-base ${
                title.isVisible ? "text-gray-600" : "text-gray-500"
              }`}
            >
              サウナ室に熱と香り、風と演出を届けるプロフェッショナル。
              <br className="hidden sm:block" />
              それが、熱波師です。
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            {/* 左側：説明文 */}
            <div
              ref={text.ref}
              className={`transition-all duration-700 ${text.isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <div className="space-y-6">
                <p className="text-base leading-9 text-gray-700 sm:text-lg">
                  <span className="font-bold text-gray-950">熱波師</span>
                  とは、サウナしつで熱波を送るプロフェッショナルです。
                  サウナストーンに水をかけて蒸気、いわゆるロウリュを発生させ、タオルで扇ぎながら熱波を送り、発汗を促します。
                </p>

                <p className="text-base leading-9 text-gray-700 sm:text-lg">
                  <span className="font-bold text-gray-950">
                    栃木サウナ熱波協会の熱波師は、
                  </span>
                  アロマの香り、音楽に乗せたアウフグース、五感に訴えるパフォーマンスで、
                  <span className="font-bold text-orange-600">
                    「心」と「身体」を整える体験
                  </span>
                  をお届けします。
                </p>

                <div className="border-l-4 border-orange-500 pl-5">
                  <p className="text-base font-bold leading-8 text-orange-700 sm:text-lg">サウナで「整う」を、より深く、安全に楽しんでいただくことが私たちの使命です。</p>
                </div>
              </div>
            </div>

            {/* 右側：ビジュアル要素 */}
            <div className="relative">
            <div className="absolute inset-0 transition-transform rotate-2 rounded-[2rem] bg-gradient-to-br from-orange-400/25 to-red-600/25" />

              <div
                ref={image.ref}
                className={`relative rounded-lg border border-white/70 bg-white/90 p-5 shadow-2xl shadow-orange-950/15 backdrop-blur-sm transition-all duration-700 sm:p-7 ${
                  image.isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className={`${feature.bgClass} rounded-2xl border border-white/80 px-4 py-6 shadow-lg shadow-orange-950/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl`}
                    >
                      <div
                        className={`${feature.iconBgClass} mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow-lg`}
                      >
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {feature.icon}
                        </svg>
                      </div>

                      <h3 className="text-center font-bold text-gray-900">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-center text-sm leading-6 text-gray-600">
                        {feature.description}
                      </p>
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

// "use client";

// import Container from "../layout/Container";
// import { useFadeInOnView } from "@/hooks/useFadeInOnView";

// export default function WhatIsNeppashiSection() {
//   const title = useFadeInOnView();
//   const text = useFadeInOnView();
//   const image = useFadeInOnView();

//   return (
//     <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-orange-300">
//       <Container>
//         <div className="max-w-5xl mx-auto overflow-hidden p-2">
//           <div className="text-center mb-16">
//             <h2
//               ref={title.ref}
//               className={`text-3xl sm:text-4xl font-bold mb-1 reveal-text ${
//                 title.isVisible ? "revealed" : ""
//               }`}
//             >
//               熱波師とは？
//             </h2>
//             <div className="w-44 sm:w-52 h-1 bg-gradient-to-r from-orange-300 to-red-600 mx-auto rounded-full translate-x-[-4px]"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             {/* 左側：説明文 */}
//             <div
//               ref={text.ref}
//               className={`space-y-6 transition-opacity duration-500 ${
//                 text.isVisible ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <p className="text-lg leading-relaxed text-gray-700">
//                 <span className="font-bold text-black">熱波師</span>
//                 とはサウナ室で熱波を送るプロフェッショナルです。
//                 サウナストーンに水をかけ蒸気（ロウリュ）を発生させタオルで扇ぎ熱波を送り、体感温度を急激に上げ発汗を促します。
//               </p>
//               <p className="text-lg leading-relaxed text-gray-700">
//                 <span className="font-bold text-black">
//                   栃木サウナ熱波協会の熱波師は
//                 </span>
//                 アロマを使用し香りや、音楽に乗せたアウフグース、五感に訴えるパフォーマンスで「心」と「身体」を整える体験をお届けします。
//                 サウナで「整う」をより深く安全に楽しんでいただく事が、私たちの使命です
//                 。
//               </p>
//             </div>

//             {/* 右側：ビジュアル要素 */}
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl transform rotate-2"></div>
//               <div
//                 ref={image.ref}
//                 className={`relative bg-white p-8 rounded-2xl shadow-xl transition-opacity duration-500 ${
//                   image.isVisible ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 <div className="grid grid-cols-2 gap-4">
//                   {/* アイコン1 */}
//                   <div className="bg-orange-50 py-6 px-3 rounded-xl">
//                     <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M13 10V3L4 14h7v7l9-11h-7z"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="font-bold text-gray-900 text-center">熱波</h3>
//                     <p className="text-sm text-gray-600 mt-2">
//                       最適な高温度と湿度で熱波をお届けします
//                     </p>
//                   </div>

//                   {/* アイコン2 */}
//                   <div className="bg-red-50 py-6 px-3 rounded-xl">
//                     <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="font-bold text-gray-900 text-center">
//                       五感へのアプローチ
//                     </h3>
//                     <p className="text-sm text-gray-600 mt-2">
//                       視覚・聴覚・嗅覚・触覚・温覚
//                     </p>
//                   </div>

//                   {/* アイコン3 */}
//                   <div className="bg-orange-50 py-6 px-3 rounded-xl">
//                     <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="font-bold text-gray-900 text-center">安全への配慮</h3>
//                     <p className="text-sm text-gray-600 mt-2">
//                       安全に熱波を楽しんでいただく為の知識
//                     </p>
//                   </div>

//                   {/* アイコン4 */}
//                   <div className="bg-red-50 py-6 px-3 rounded-xl">
//                     <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <svg
//                         className="w-6 h-6 text-white"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                         />
//                       </svg>
//                     </div>
//                     <h3 className="font-bold text-gray-900 text-center">演出</h3>
//                     <p className="text-sm text-gray-600 mt-2">
//                     各熱波師の個性を発揮します
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
