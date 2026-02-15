import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Reveal from './Reveal'
import Image from 'next/image'

function About() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-row bg-primary">

      {/* TEXT SIDE */}
      <Reveal className="order-2 sm:order-1 w-full sm:w-1/2 flex items-center justify-center px-8 py-16 text-center sm:text-left">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading text-textcolor leading-tight ">
            Hi, I’m Lilac.
          </h2>

          <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor leading-relaxed">
            I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-8 border border-accent px-7 py-4 uppercase text-sm transition-colors duration-500 bg-accent hover:bg-primary rounded-lg text-primary hover:text-textcolor"
          >
            connect with me <MdOutlineArrowRightAlt />
          </Link>
        </div>
      </Reveal>

      {/* IMAGE SIDE */}
      <Reveal className="order-1 sm:order-2 w-full sm:w-1/3 flex items-center justify-center">
  <div className="relative h-[55vh] sm:h-[90vh] w-[65%] md:w-[80%] rounded-t-full overflow-hidden mt-10">
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
