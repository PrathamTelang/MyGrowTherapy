"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const backgroundItems = [
  {
    title: "Education",
    content:
      "I completed a Doctor of Psychology (PsyD) in Clinical Psychology with focused training in adult mental health, assessment, and evidence-based therapeutic practices. My education emphasized both academic understanding and practical clinical application.",
  },
  {
    title: "Licensure",
    content:
      "I am a licensed clinical psychologist authorized to provide psychological services to adults. My licensure allows me to offer both in-person sessions and secure telehealth services in accordance with professional standards.",
  },
  {
    title: "Certifications",
    content:
      "My professional training includes certifications in cognitive behavioral therapy (CBT), trauma-informed care, mindfulness-based approaches, and EMDR, supporting a flexible and integrative therapeutic approach.",
  },
];

export default function ProfessionalBackground() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const handleSectionToggle = (sectionIndex: number) => {
    setExpandedSection((prev) =>
      prev === sectionIndex ? null : sectionIndex
    );
  };

  return (
    <div>

      {/* BACKGROUND SECTION */}
      <section className="bg-[#E5E0DA] py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <Reveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#223614] text-center mb-16">
              Professional Background
            </h2>
          </Reveal>

          <Reveal>
            <div className="border-t border-[#223614]">

              {backgroundItems.map((item, sectionIndex) => {
                const isExpanded = expandedSection === sectionIndex;

                return (
                  <div
                    key={sectionIndex}
                    className="border-b border-[#223614] py-6"
                  >
                    {/* TITLE ROW */}
                    <button
                      onClick={() => handleSectionToggle(sectionIndex)}
                      aria-expanded={isExpanded}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="text-lg md:text-2xl text-[#223614]">
                        {item.title}
                      </span>

                      {/* Animated indicator */}
                      <div className="relative w-5 h-5 shrink-0 ml-6">
                        <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#223614] -translate-y-1/2"></span>

                        <span
                          className={`absolute left-1/2 top-0 h-full w-[2px] bg-[#223614]
                          -translate-x-1/2 transition-all duration-300
                          ${isExpanded ? "opacity-0 rotate-90" : ""}`}
                        />
                      </div>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100 mt-4"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base md:text-lg leading-relaxed text-[#223614] pr-2">
                          {item.content}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </Reveal>

        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="bg-[#7e7b46] py-24 px-6 text-white">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">

            <h3 className="text-4xl md:text-5xl font-semibold mb-8">
              Get started today.
            </h3>

            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto">
              If you’re ready to make space for clarity, balance, and growth,
              this is a meaningful place to begin. Reach out to start a
              conversation and explore what support could look like for you.
            </p>

            <button className="mt-10 inline-flex items-center gap-2 uppercase text-sm border border-white px-6 py-3 transition-all duration-500 hover:bg-white hover:text-[#7e7b46]">
              connect with me <MdOutlineArrowRightAlt />
            </button>

          </div>
        </Reveal>
      </section>

    </div>
  );
}
