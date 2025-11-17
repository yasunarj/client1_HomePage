"use client";

import { useFadeInOnView } from "@/hooks/useFadeInOnView";

const RecruitSection = () => {
  const title = useFadeInOnView();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-orange-300 text-white">
      <div className="w-full max-w-[100vw] overflow-x-hidden px-4">
        <div className="max-w-6xl mx-auto">
          {/* タイトル */}
          <h2
            ref={title.ref}
            className={`text-[28px] sm:text-3xl md:text-4xl font-bold text-center mb-6 reveal-text ${
              title.isVisible ? "revealed" : ""
            }`}
          >
            <span className="inline-block">
              熱波イベント・熱波師募集
            </span>
            <div className="mt-1 w-84 sm:w-108 h-1 bg-gradient-to-r from-orange-300 to-red-600 mx-auto rounded-full "></div>
          </h2>

          {/* リード文 */}
          <p className="text-center text-sm md:text-base text-gray-800 max-w-3xl mx-auto mb-12 leading-relaxed">
            栃木サウナ熱波協会では、
            <br className="hidden sm:block" />
            熱波イベントを一緒に盛り上げてくださる施設様と、
            熱波師として活動したい方を随時募集しています。
          </p>

          {/* 2カラム */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* 1．施設様向け */}
            <div className="bg-slate-900/80 rounded-2xl p-6 md:p-8 border border-orange-500/40 shadow-xl shadow-black/40">
              <p className="text-xs md:text-sm text-orange-300 font-semibold tracking-wide mb-2">
                施設様向け
              </p>
              <h3 className="text-lg md:text-xl font-bold mb-4 flex">
                <span>1．</span>
                <span>熱波イベントを行う・行いたい施設様へ</span>
              </h3>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-4">
                「サウナ室をもっと盛り上げたい」「周年祭やイベントで特別な熱波体験を提供したい」など、
                熱波イベントの実施をご検討中の施設様を募集しています。
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-100 space-y-1 mb-4">
                <li>イベント内容の企画・演出のご提案</li>
                <li>プロ熱波師による当日の運営サポート</li>
              </ul>
              <p className="text-sm md:text-base text-gray-200">
                施設の規模や客層に合わせたプランをご提案いたします。
                まずはお気軽にご相談ください。
              </p>
            </div>

            {/* 2．熱波師志望向け */}
            <div className="bg-slate-900/80 rounded-2xl p-6 md:p-8 border border-orange-500/40 shadow-xl shadow-black/40">
              <p className="text-xs md:text-sm text-orange-300 font-semibold tracking-wide mb-2">
                熱波師になりたい方へ
              </p>
              <h3 className="text-lg md:text-xl font-bold mb-4">
                2．熱波師として活動したい方へ
              </h3>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-4">
                サウナが好きで、「自分もお客様に最高の熱波体験を届けたい」と思っている方を随時募集しています。
                未経験の方も歓迎です。
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-100 space-y-1 mb-4">
                <li>マナーや安全面から丁寧にレクチャー</li>
                <li>現場でのアシスタント参加からステップアップ</li>
                <li>活動スタイルに合わせた関わり方のご相談も可能</li>
              </ul>
              <p className="text-sm md:text-base text-gray-200">
                「興味がある」「まずは話だけ聞いてみたい」という方も大歓迎です。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center w-full max-w-[100vw] overflow-x-hidden px-4">
        <p className="text-sm md:text-base font-semibold text-gray-800">
          募集に関するお問い合わせは、
          <br className="hidden sm:block" />
          この下の「お問い合わせ」よりお気軽にご連絡ください。
        </p>
        <p className="mt-2 text-2xl md:text-3xl text-orange-600">↓↓↓↓↓↓</p>
      </div>
    </section>
  );
};

export default RecruitSection;
