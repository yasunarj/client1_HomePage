import { shippori } from "@/app/lib/fonts";

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className={`text-4xl font-bold mb-12 text-center ${shippori.className}`}>会社概要</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <th className="py-4 text-left w-1/3">会社名</th>
                <td className="py-4">栃木サウナ熱波協会</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 text-left">設立</th>
                <td className="py-4">2024年1月1日</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 text-left">代表者</th>
                <td className="py-4">熱波送郎</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 text-left">所在地</th>
                <td className="py-4">〒324-0001 栃木県大田原市中田原593-3</td>
              </tr>
              <tr className="border-b">
                <th className="py-4 text-left">事業内容</th>
                <td className="py-4">
                  <ul className="list-disc list-inside">
                    <li>サウナ施設の運営</li>
                    <li>サウナイベントの企画・開催</li>
                    <li>サウナ文化の普及活動</li>
                    <li>サウナ関連商品の販売</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <th className="py-4 text-left">営業時間</th>
                <td className="py-4">10:00 - 22:00（年中無休）</td>
              </tr>
              <tr>
                <th className="py-4 text-left">お問い合わせ</th>
                <td className="py-4">
                  <p>TEL: 0287-24-2525</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
} 