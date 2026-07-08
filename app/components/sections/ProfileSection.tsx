"use client";

import { staffList } from "@/app/lib/staffList";
import { useFadeInOnView } from "@/hooks/useFadeInOnView";
import StaffCard from "./StaffCard";
import MobileStaffStack from "./components/profile/MobileStaffStack";

export default function ProfileSection() {
  const title = useFadeInOnView();

  return (
    <section
      id="profile"
      className="relative min-h-[100svh] bg-gradient-to-b from-stone-950 via-neutral-950 to-stone-900 py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(249,115,22,0.24),transparent_36%)]" />
        <div className="absolute -left-32 top-96 h-96 w-96 rounded-full bg-orange-500/30 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-red-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4">
        <div className="mx-auto max-w-7xl">
          <div ref={title.ref} className="mb-14 text-center">
            <p
              className={`mb-3 text-sm font-semibold tracking-[0.35em] transition-colors duration-[2s] ${title.isVisible ? "text-orange-300" : "text-orange-700"}`}
            >
              MEMBER
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              <span
                className={`transition-colors duration-[2s] ${title.isVisible ? "text-white" : "text-orange-600"}`}
              >
                熱波師プロフィール
              </span>
            </h2>

            <div className="mx-auto mt-4 h-1 w-56 rounded-full bg-gradient-to-r from-orange-300 to-red-600 sm:w-72" />

            <p
              className={`mx-auto mt-6 max-w-2xl text-sm leading-8 transition-colors duration-[2s] sm:text-base ${title.isVisible ? "text-orange-50/85" : "text-gray-500"}`}
            >
              栃木のサウナを熱く盛り上げる、個性豊かな熱波師たちをご紹介します。
            </p>
          </div>

          <div className="hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {staffList.map((staff, index) => (
              <StaffCard key={index} staff={staff} />
            ))}
          </div>

          <MobileStaffStack />
        </div>
      </div>
    </section>
  );
}
