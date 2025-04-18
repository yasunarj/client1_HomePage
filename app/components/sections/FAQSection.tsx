import Container from "../layout/Container";
import { questionList } from "@/app/lib/questionList";

export default function FAQSection() {
  return (
    <section className=" py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span>よくある質問</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 mb-4">
          {questionList.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
              <div className="flex">
                <span className="text-orange-500 font-bold text-xl mr-2">Q.</span>
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
              </div>
              <div className="flex">
                <span className="mr-7"></span>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
