"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const faqItems = [
  {
    question: "Do you take insurance?",
    answer:
      "I do not currently accept insurance, but I can provide documentation for out-of-network reimbursement if needed.",
  },
  {
    question: "What are your rates?",
    answer:
      "Rates vary depending on session length and type of therapy. Please contact me directly for current details.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Availability changes from time to time. Feel free to reach out to check current openings.",
  },
];

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleToggle = (itemIndex: number) => {
    setActiveItem((prev) => (prev === itemIndex ? null : itemIndex));
  };

  return (
    <div className="bg-[#faf7f2] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch gap-16">

        <Reveal className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative h-[55vh] lg:h-[85vh] w-[85%] rounded-t-full overflow-hidden mt-10">
            <Image
              src="/Live a fulfilling life.webp"
              alt="Frequently Asked Questions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal className="w-full lg:w-1/2 flex items-center">
          <div className="w-full">

            <h2 className="text-4xl md:text-5xl font-semibold text-[#223614] mb-12">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-[#223614]">
              {faqItems.map((item, itemIndex) => {
                const isActive = activeItem === itemIndex;

                return (
                  <div
                    key={itemIndex}
                    className="border-b border-[#223614] py-6"
                  >
                    {/* Question Row */}
                    <button
                      onClick={() => handleToggle(itemIndex)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={isActive}
                    >
                      <span className="text-xl md:text-2xl text-[#223614]">
                        {item.question}
                      </span>

                      {/* Plus / Minus Icon */}
                      <div className="relative w-5 h-5 ml-6 shrink-0">
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#223614] -translate-y-1/2"></span>

                        <span
                          className={`absolute left-1/2 top-0 h-full w-[2px] bg-[#223614]
                          -translate-x-1/2 transition-all duration-300
                          ${isActive ? "opacity-0 rotate-90" : ""}`}
                        ></span>
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base md:text-lg text-[#223614] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </Reveal>

      </div>
    </div>
  );
}
