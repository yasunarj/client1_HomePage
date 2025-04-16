import Container from "../layout/Container";

export default function PricingSection() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/pngtree-natural-wood-paneling-lines-the-interior-of-the-sauna-ideal-for-background-or-texture-photo-image_33945628.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="text-white">料金プラン</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "ベーシック",
                duration: "1時間",
                description: "基本的な熱波体験",
                price: "応相談",
              },
              {
                name: "イベント対応",
                duration: "3時間",
                description: "イベント向け熱波パフォーマンス",
                price: "応相談",
              },
              {
                name: "法人研修",
                duration: "1日",
                description: "スタッフ向け熱波技術研修",
                price: "応相談",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-gray-600 mb-2">{plan.duration}</p>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <p className="text-3xl font-bold text-orange-500">
                  {plan.price}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
