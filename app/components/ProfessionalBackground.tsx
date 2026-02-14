"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const backgroundItems = [
  {
    title: "Education",
    content:
      "I earned a Doctor of Psychology (PsyD) in Clinical Psychology with advanced training in adult mental health, trauma treatment, and evidence-based therapeutic approaches. My education combined rigorous academic study with extensive clinical experience.",
  },
  {
    title: "Licensure",
    content:
      "I am a licensed clinical psychologist based in Santa Monica, California, authorized to provide therapy to adults. I offer both in-person services and secure telehealth sessions in accordance with professional and ethical standards.",
  },
  {
    title: "Specialized Training",
    content:
      "My training includes advanced work in cognitive-behavioral therapy (CBT), EMDR, trauma-informed care, mindfulness-based practices, and body-oriented techniques, allowing me to address both the emotional and physiological aspects of stress and trauma.",
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
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#223614] text-center mb-16">
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
                      <span className="text-xl md:text-3xl text-[#223614]">
                        {item.title}
                      </span>

                      {/* Animated indicator */}
                      <div className="relative w-5 h-5 shrink-0 ml-6">
                        <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#223614] -translate-y-1/2"></span>

                        <span
                          className={`absolute left-1/2 top-0 h-full w-0.5 bg-[#223614]
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
                        <p className="text-md sm:text-xl md:text-2xl leading-relaxed text-[#223614] pr-2">
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
              Begin when you’re ready.
            </h3>

            <p className="text-md md:text-lg leading-relaxed max-w-xl mx-auto">
              If you're ready to feel more steady, grounded, and supported, this can be a meaningful place to begin. Reach out to explore what working together might look like.
            </p>

            <button className="mt-10 inline-flex items-center gap-2 uppercase text-sm border border-white px-6 py-3 transition-all duration-500 hover:bg-white hover:text-[#7e7b46]">
              Schedule a Consultation <MdOutlineArrowRightAlt />
            </button>

          </div>
        </Reveal>
      </section>

    </div>
  );
}
