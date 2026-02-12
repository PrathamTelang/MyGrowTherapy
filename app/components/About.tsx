import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Reveal from './Reveal'
import Image from 'next/image'

function About() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-[#faf7f2]">

      {/* TEXT SIDE */}
      <Reveal className="order-2 sm:order-1 w-full sm:w-1/2 flex items-center justify-center px-8 py-16 text-center sm:text-left">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-[#223614] leading-tight">
            Live your life <br /> in full bloom
          </h2>

          <p className="text-base sm:text-xl md:text-2xl mt-6 text-[#223614] leading-relaxed">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-8 border border-[#223614] px-7 py-4 uppercase text-sm transition-colors duration-500 hover:bg-[#223614] hover:text-white"
          >
            connect with me <MdOutlineArrowRightAlt />
          </Link>
        </div>
      </Reveal>

      {/* IMAGE SIDE */}
      <Reveal className="order-1 sm:order-2 w-full sm:w-1/3 flex items-center justify-center">
  <div className="relative h-[55vh] sm:h-[90vh] w-[65%] md:w-[80%] rounded-t-full overflow-hidden">
    <Image
      src="/Live a fulfilling life.webp"
      alt="Therapy and growth"
      fill
      className="object-cover"
      priority
    />
  </div>
</Reveal>

    </div>
  )
}

export default About
