import { shippori } from "@/app/lib/fonts";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-12 text-center ${shippori.className}`}>プライバシーポリシー</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. 個人情報の収集について</h2>
              <p className="text-gray-700">
                当協会は、サービスの提供にあたり、以下のような個人情報を収集する場合があります：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>お名前</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>住所</li>
                <li>その他サービス提供に必要な情報</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. 個人情報の利用目的</h2>
              <p className="text-gray-700">
                収集した個人情報は、以下の目的で利用いたします：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>サービスの提供・運営</li>
                <li>お問い合わせへの対応</li>
                <li>イベントの案内</li>
                <li>サービスの改善</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. 個人情報の管理</h2>
              <p className="text-gray-700">
                当協会は、個人情報の正確性及び安全性を確保するために、セキュリティ対策を実施し、個人情報の漏洩、滅失または毀損を防止します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. 個人情報の第三者提供</h2>
              <p className="text-gray-700">
                当協会は、以下の場合を除き、個人情報を第三者に提供いたしません：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>ご本人の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. お問い合わせ</h2>
              <p className="text-gray-700">
                本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
              </p>
              <div className="mt-2 text-gray-700">
                栃木サウナ熱波協会<br />
                〒324-0001 栃木県大田原市中田原593-3<br />
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

            <section>
              <h2 className="text-2xl font-bold mb-4">6. 改定について</h2>
              <p className="text-gray-700">
                当協会は、必要に応じて本プライバシーポリシーを改定することがあります。改定した場合は、当ウェブサイトにて公表いたします。
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 