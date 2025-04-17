import Container from "../layout/Container";
import Image from "next/image";
import { staffList } from "@/app/lib/staffList";

export default function ProfileSection() {
  return (
    <section
      className="py-20"
    >
        <Container>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span>熱波師プロフィール</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {staffList.map((staff, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={staff.src}
                    fill
                    alt="スタッフ画像"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{staff.name}</h3>
                <p className="text-orange-500 mb-4">{staff.role}</p>
                <p className="text-gray-600">{staff.description}</p>
              </div>
            ))}
          </div>
        </Container>
    </section>
  );
}
