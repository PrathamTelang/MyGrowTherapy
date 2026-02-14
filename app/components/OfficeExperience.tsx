"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function OfficeExperience() {
  return (
    <section className="bg-[#F4EFEA] px-8 md:px-20 py-28 text-[#223614] w-full ">
      <div className="max-w-6xl w-full mx-auto">

        {/* TEXT */}
        <Reveal>
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
              A Calm Space for Healing
            </h2>

            <p className="text-md sm:text-xl md:text-2xl mt-8 leading-relaxed">
              My office is thoughtfully designed to feel quiet, welcoming,
              and grounded. Soft lighting, comfortable seating, and natural
              elements create a space where you can settle in fully.
            </p>
          </div>
        </Reveal>

        {/* LANDSCAPE IMAGES */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full flex items-center justify-center">

            {/* Image 1 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/Live a fulfilling life.webp"
                alt="Therapy office interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/Live a fulfilling life.webp"
                alt="Comfortable counseling space"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </Reveal>

        {/* SUPPORTING DETAILS */}
        <Reveal>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-md sm:text-xl md:text-2xl leading-relaxed">

            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">
                Location
              </h3>
              <p>
                Located in Minneapolis, MN, offering a quiet and private
                setting designed for comfort and reflection.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-medium mb-6">
                In-Person & Hybrid Sessions
              </h3>
              <p>
                Both in-person and virtual sessions are available — always
                centered on privacy, safety, and thoughtful care.
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
