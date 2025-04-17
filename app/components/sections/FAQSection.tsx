import Container from "../layout/Container";

export default function FAQSection() {
  return (
    <section className=" py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span>よくある質問</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "熱波イベントはどんな場所で実施できますか？",
              answer:
                "サウナ施設、イベント会場、企業研修施設など、様々な場所で実施可能です。詳細はご相談ください。",
            },
            {
              question: "一人でも依頼できますか？",
              answer:
                "はい、個人でのご依頼も承っております。プライベートな熱波体験をご提供します。",
            },
            {
              question: "衛生面の対応は？",
              answer:
                "使用するタオルは毎回洗濯し、消毒を行っています。また、換気にも十分配慮しています。",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
