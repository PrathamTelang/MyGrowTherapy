"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { RxCross1 } from "react-icons/rx";

const images = [
  "/Live a fulfilling life.webp",
  "/Live a fulfilling life.webp",
  "/Live a fulfilling life.webp",
  "/Live a fulfilling life.webp",
];

export default function SocialAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F4EFEA] px-8 md:px-16 py-24">

      <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-textcolor mb-16">
        Find me on social.
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {images.map((src, index) => (
          <motion.div
            key={index}
            layoutId={`social-${index}`}
            onClick={() => setActiveIndex(index)}
            className="relative h-[300px] cursor-pointer overflow-hidden"
          >
            <Image
              src={src}
              alt="Social Image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveIndex(null)}
            />

            <motion.div
              layoutId={`social-${activeIndex}`}
              className="fixed inset-0 flex items-center justify-center z-50 p-6"
            >
              <div className="relative w-full max-w-5xl h-[80vh]">

                <Image
                  src={images[activeIndex]}
                  alt="Expanded"
                  fill
                  className="object-contain rounded-md"
                />

                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute font-heading top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-lg hover:scale-110 transition"
                >
                  <RxCross1 />
                </button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}
