import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Reveal from './Reveal'

const specialties = [
    {
      title: "Anxiety & Panic",
      description:
        "Support for chronic worry, racing thoughts, and nervous system overwhelm.",
      image: "/images/specialties-blogs/meditation.jpg",
    },
    {
      title: "Trauma & EMDR",
      description:
        "Carefully paced trauma work focused on safety, regulation, and healing.",
      image: "/images/specialties-blogs/healing-space.jpg",
    },
    {
      title: "Burnout & High Pressure",
      description:
        "Helping high-achieving adults move from exhaustion to steadiness.",
      image: "/images/specialties-blogs/steady-rocks.jpg",
    },
  ];

function Specialties() {
  return (
    <div>
      <div className="bg-[#FBF0F1] py-10 sm:py-16 md:py-20 px-6">

  <div className="text-4xl lg:text-6xl xl:text-7xl font-heading text-center text-textcolor font-heading ">
    Areas of Focus
  </div>

  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {specialties.map((item, index) => (
      <Reveal key={index}>
        <div className="bg-secondary  rounded-lg shadow-2xl p-8 flex flex-col justify-between h-full">

          <div className="space-y-6">
            <h3 className="text-md sm:text-xl md:text-2xl font-heading font-medium text-textcolor">
              {item.title}
            </h3>

            <p className="text-sm sm:text-md md:text-xl leading-relaxed text-textcolor">
              {item.description}
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative w-50 h-50 rounded-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </Reveal>
    ))}
  </div>
</div>


         <div className="min-h-screen flex flex-col sm:flex-row bg-secondary">

  {/* IMAGE SIDE */}
  <Reveal className="w-full sm:w-1/2">
    <div className="relative h-[45vh] sm:h-full w-full">
      <Image
        src="/images/hero/therapy.jpg"
        alt="Therapy session"
        fill
        className="object-cover"
      />
    </div>
  </Reveal>

  {/* TEXT SIDE */}
  <Reveal className="w-full sm:w-1/2">
  <div className="flex flex-col h-full sm:min-h-screen">

    <div className="flex flex-col justify-center py-12 px-8 sm:p-10">
      <p className="text-4xl lg:text-6xl xl:text-7xl font-heading  text-textcolor">
        You don’t have to keep carrying this on your own.
      </p>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
        If you’re experiencing:
      </p>

      <ul className="list-disc pl-5 flex flex-col gap-3 text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
        <li>Ongoing anxiety or constant mental overdrive</li>
        <li>Emotional exhaustion or burnout</li>
        <li>Difficulty feeling present in your body</li>
        <li>Lingering effects of past experiences</li>
        <li>High internal pressure or self-doubt</li>
      </ul>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
        There is a way to feel more steady, regulated, and supported. Therapy can help you slow down, gain clarity, and rebuild a stronger relationship with yourself.
      </p>
    </div>
    <Link href="/contact" className="w-full mt-auto">
      <button className="w-full border-t py-5 uppercase text-sm flex justify-center items-center gap-2 bg-accent hover:bg-secondary  text-primary hover:text-textcolor font-heading transition-colors duration-700">
        Schedule a Consultation <MdOutlineArrowRightAlt />
      </button>
    </Link>
  </div>
</Reveal>

</div>

    </div>
  )
}

export default Specialties