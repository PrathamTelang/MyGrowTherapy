"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function OfficeExperience() {
  return (
    <section className="bg-[#F4EFEA] px-8 md:px-20 py-28 text-textcolor w-full ">
      <div className="max-w-6xl w-full mx-auto">

        {/* TEXT */}
        <Reveal>
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading leading-tight">
              A Calm, Grounded Space
            </h2>

            <p className="text-md sm:text-xl md:text-2xl mt-8 leading-relaxed">
              My Santa Monica office is designed to feel quiet, private, and welcoming. Natural light and a comfortable setting create a steady space where you can slow down and fully settle in.
            </p>
          </div>
        </Reveal>

        {/* LANDSCAPE IMAGES */}
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full flex items-center justify-center">

            {/* Image 1 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/office/office1.jpeg"
                alt="Therapy office interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/office/office2.jpeg"
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
              <h3 className="text-2xl md:text-3xl font-heading font-medium mb-6">
                Location
              </h3>
              <p>
                123th Street 45 W, Santa Monica, CA 90401
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-medium mb-6">
                In-Person & Telehealth Sessions
              </h3>
              <p>
                In-person therapy is available in Santa Monica, with secure telehealth sessions offered to clients throughout California — always centered on privacy, safety, and thoughtful care.
              </p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
