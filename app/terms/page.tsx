import { shippori } from "@/app/lib/fonts";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1
          className={`text-4xl font-bold mb-12 text-center ${shippori.className}`}
        >
          利用規約
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. 総則</h2>
              <p className="text-gray-700">
                本規約は、栃木サウナ熱波協会（以下「当協会」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用の際は、本規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. 禁止事項</h2>
              <p className="text-gray-700">
                本サービスのご利用にあたり、以下の行為を禁止します：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>法令または公序良俗に違反する行為</li>
                <li>当協会または第三者の知的財産権を侵害する行為</li>
                <li>当協会または第三者の名誉を毀損する行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>その他、当協会が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. 免責事項</h2>
              <p className="text-gray-700">
                当協会は、以下の事項について一切の責任を負いません：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>本サービスの利用により生じた損害</li>
                <li>本サービスの中断、停止、終了により生じた損害</li>
                <li>本サービスを通じて得られた情報の正確性、有用性</li>
                <li>本サービスを利用したことによる第三者との紛争</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. 知的財産権</h2>
              <p className="text-gray-700">
                本サービスに関する知的財産権は、当協会または正当な権利を有する第三者に帰属します。本サービスの利用により、これらの権利を取得することはできません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. 規約の変更</h2>
              <p className="text-gray-700">
                当協会は、必要に応じて本規約を変更することがあります。変更後の規約は、当ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. 準拠法・管轄裁判所</h2>
              <p className="text-gray-700">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. お問い合わせ</h2>
              <p className="text-gray-700">
                本規約に関するお問い合わせは、以下の連絡先までお願いいたします：
              </p>
              <div className="mt-2 text-gray-700">
                栃木サウナ熱波協会
                <br />
                〒324-0001 栃木県大田原市中田原593-3
                <br />
                <p>
                  Instagram:{" "}
                  <a
                    href="https://www.instagram.com/atunami_okuro37/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram（熱波送郎）"
                    className="text-blue-600 hover:underline"
                  >
                    @atunami_okuro37/
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
