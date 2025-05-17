"use client";

import Container from "../layout/Container";
import { staffList } from "@/app/lib/staffList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import StaffCard from "./StaffCard";

export default function ProfileSection() {
  const title = useFadeInOnView();

  return (
    <section id="profile" className="py-20">
      <Container>
        <h2
          ref={title.ref}
          className={`text-3xl sm:text-4xl font-bold text-center mb-16 reveal-text ${
            title.isVisible ? "revealed" : ""
          }`}
        >
          <span>熱波師プロフィール</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-4">
          {staffList.map((staff, index) => {
            return (
              <StaffCard
                key={index}
                staff={staff}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
