"use client";

import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const RecruitSection = () => {
  const title = useFadeInOnView();
  const cards = useFadeInOnView(0.1);

  return (
    <section
      id="recruit"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-white via-orange-50 to-orange-100 py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(251,146,60,0.22),transparent_35%)]" />
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-red-200/25 blur-3xl" />

      <div className="relative z-10 w-full max-w-[100vw] overflow-x-hidden px-4">
        <div className="mx-auto max-w-6xl">
          {/* タイトル */}
          <div ref={title.ref} className="mb-12 text-center">
            <p
              className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${
                title.isVisible ? "text-orange-500" : "text-orange-700"
              }`}
            >
              RECRUIT
            </p>

            <h2 className="text-[28px] font-bold sm:text-3xl md:text-5xl">
              <span
                className={`transition-colors duration-[2s] ${
                  title.isVisible ? "text-gray-900" : "text-orange-600"
                }`}
              >
                熱波イベント・熱波師募集
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-64 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-96" />

            <p
              className={`mx-auto mt-6 max-w-3xl text-sm leading-8 transition-colors duration-[2s] md:text-base ${
                title.isVisible ? "text-gray-600" : "text-gray-500"
              }`}
            >
              栃木サウナ熱波協会では、熱波イベントを一緒に盛り上げてくださる施設様と、
              <br className="hidden md:block" />
              熱波師として活動したい方を随時募集しています。
            </p>
          </div>

          {/* 2カラム */}
          <div
            ref={cards.ref}
            className={`grid gap-8 transition-all duration-700 md:grid-cols-2 ${
              cards.isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            {/* 施設様向け */}
            <div
              className="group relative overflow-hidden rounded-lg border border-orange-300/30 bg-slate-950/90 p-6 text-white shadow-2xl shadow-orange-950/25 transition duration-500 hover:-translate-y-2 hover:shadow-orange-950/40 md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.24),transparent_35%)]" />

              <div className="relative z-10">
                <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-orange-300 md:text-sm">
                  FOR FACILITIES
                </p>

                <h3 className="mb-5 flex text-lg font-bold leading-8 md:text-xl">
                  <span className="mr-1 text-orange-300">1．</span>
                  <span>熱波イベントを行う・行いたい施設様へ</span>
                </h3>

                <p className="mb-5 text-sm leading-8 text-gray-100 md:text-base">
                  「サウナ室をもっと盛り上げたい」「周年祭やイベントで特別な熱波体験を提供したい」など、
                  熱波イベントの実施をご検討中の施設様を募集しています。
                </p>

                <ul className="mb-5 space-y-3 text-sm text-gray-100 md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                    <span>イベント内容の企画・演出のご提案</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                    <span>プロ熱波師による当日の運営サポート</span>
                  </li>
                </ul>

                <p className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-orange-50 md:text-base">
                  施設の規模や客層に合わせたプランをご提案いたします。
                  まずはお気軽にご相談ください。
                </p>
              </div>
            </div>

            {/* 熱波師志望向け */}
            <div
              className="group relative overflow-hidden rounded-lg border border-orange-300/30 bg-slate-950/90 p-6 text-white shadow-2xl shadow-orange-950/25 transition duration-500 hover:-translate-y-2 hover:shadow-orange-950/40 md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(220,38,38,0.24),transparent_35%)]" />

              <div className="relative z-10">
                <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-orange-300 md:text-sm">
                  FOR NEPPASHI
                </p>

                <h3 className="mb-5 flex text-lg font-bold leading-8 md:text-xl">
                  <span className="mr-1 text-orange-300">2．</span>
                  <span>熱波師として活動したい方へ</span>
                </h3>

                <p className="mb-5 text-sm leading-8 text-gray-100 md:text-base">
                  サウナが好きで、「自分もお客様に最高の熱波体験を届けたい」と思っている方を随時募集しています。
                  未経験の方も歓迎です。
                </p>

                <ul className="mb-5 space-y-3 text-sm text-gray-100 md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                    <span>マナーや安全面から丁寧にレクチャー</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                    <span>現場でのアシスタント参加からステップアップ</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                    <span>活動スタイルに合わせた関わり方のご相談も可能</span>
                  </li>
                </ul>

                <p className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-orange-50 md:text-base">
                  「興味がある」「まずは話だけ聞いてみたい」という方も大歓迎です。
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-sm font-bold leading-7 text-gray-800 md:text-base">
              募集に関するお問い合わせは、
              <br className="hidden sm:block" />
              この下の「お問い合わせ」よりお気軽にご連絡ください。
            </p>

            <p className="mt-3 text-3xl text-orange-600 md:text-4xl">↓↓↓↓↓↓</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitSection;
