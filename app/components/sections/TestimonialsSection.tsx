import Container from "../layout/Container";
import Image from "next/image";
import { customerList } from "@/app/lib/customerList";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">
          <span>お客様の声</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {customerList.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 shadow-lg rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.src}
                    alt="お客様画像"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
