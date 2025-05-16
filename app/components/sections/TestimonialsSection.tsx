"use client";

import Container from "../layout/Container";
import { customerList } from "@/app/lib/customerList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import CustomerCard from "./CustomerCard";

export default function TestimonialsSection() {
  const title = useFadeInOnView();

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 ref={title.ref} className={`text-4xl font-bold text-center mb-16 reveal-text ${title.isVisible ? "revealed" : ""}`}>
          <span>お客様の声</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-4">
          {customerList.map((testimonial, index) => (
            <CustomerCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
