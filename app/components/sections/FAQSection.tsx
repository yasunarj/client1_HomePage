"use client";
import Container from "../layout/Container";
import { questionList } from "@/app/lib/questionList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import FAQCard from "./FAQCard";

export default function FAQSection() {
  const title = useFadeInOnView();
  return (
    <section className=" py-20 bg-gray-50">
      <Container>
        <h2 ref={title.ref} className={`text-4xl font-bold text-center mb-16 reveal-text ${title.isVisible ? "revealed" : ""}`}>
          <span>よくある質問</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 mb-4">
          {questionList.map((faq, index) => (
            <FAQCard key={index} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
