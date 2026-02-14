"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const faqItems = [
  {
    question: "Do you accept insurance?",
    answer:
      "I am an out-of-network provider and do not bill insurance directly. I can provide a superbill upon request for possible reimbursement through your insurance plan.",
  },
  {
    question: "What are your session fees?",
    answer:
      "Session fees vary depending on format and length. Please reach out for current rates and additional details.",
  },
  {
    question: "Do you offer in-person and telehealth sessions?",
    answer:
      "Yes. I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located throughout California.",
  },
  {
    question: "What issues do you specialize in?",
    answer:
      "I work primarily with adults navigating anxiety, trauma, burnout, perfectionism, and high internal pressure. My approach integrates CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
];

export default function FAQ() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleToggle = (itemIndex: number) => {
    setActiveItem((prev) => (prev === itemIndex ? null : itemIndex));
  };

  return (
    <div className="bg-primary py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch ">

        <Reveal className="w-full lg:w-1/2">
  <div className="flex w-full justify-center ">
    <div className="relative h-[55vh] lg:h-[85vh] w-[85%] rounded-t-full overflow-hidden mb-10">
      <Image
        src="/Live a fulfilling life.webp"
        alt="Frequently Asked Questions"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</Reveal>


        <Reveal className="w-full lg:w-1/2 flex items-center">
          <div className="w-full">

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-textcolor mb-12">
              Frequently Asked Questions
            </h2>

            <div className="border-t border-textcolor">
              {faqItems.map((item, itemIndex) => {
                const isActive = activeItem === itemIndex;

                return (
                  <div
                    key={itemIndex}
                    className="border-b border-textcolor py-6"
                  >
                    {/* Question Row */}
                    <button
                      onClick={() => handleToggle(itemIndex)}
                      className="w-full flex items-center justify-between text-left"
                      aria-expanded={isActive}
                    >
                      <span className="text-xl md:text-3xl text-textcolor">
                        {item.question}
                      </span>

                      {/* Plus / Minus Icon */}
                      <div className="relative w-5 h-5 ml-6 shrink-0">
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-textcolor -translate-y-1/2"></span>

                        <span
                          className={`absolute left-1/2 top-0 h-full w-[2px] bg-textcolor
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
                        <p className="text-md sm:text-xl md:text-2xl text-textcolor leading-relaxed">
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
