import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import Reveal from './Reveal'

const specialties = [
    {
      title: "Self-Esteem",
      description:
        "Developing a healthier relationship with yourself can transform how you experience everyday life. Therapy can help strengthen confidence, self-trust, and emotional awareness.",
      image: "/Live a fulfilling life.webp",
    },
    {
      title: "Relationships",
      description:
        "Patterns in relationships often reflect deeper emotional needs. Together, we explore communication, boundaries, and connection in a supportive way.",
      image: "/Live a fulfilling life.webp",
    },
    {
      title: "Burnout",
      description:
        "Chronic stress and pressure can leave you feeling depleted. Therapy offers tools to restore balance, prevent burnout, and reconnect with your energy.",
      image: "/Live a fulfilling life.webp",
    },
  ];

function Specialties() {
  return (
    <div>
      <div className="bg-[#FBF0F1] py-10 sm:py-16 md:py-20 px-6">

  <div className="text-4xl lg:text-6xl xl:text-7xl font-semibold text-center text-[#223614]">
    My Specialties
  </div>

  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {specialties.map((item, index) => (
      <Reveal key={index}>
        <div className="bg-[#E5E0DA] border border-[#223614] p-8 flex flex-col justify-between h-full">

          <div className="space-y-6">
            <h3 className="text-md sm:text-xl md:text-2xl font-medium text-[#223614]">
              {item.title}
            </h3>

            <p className="text-sm sm:text-md md:text-xl leading-relaxed text-[#223614]">
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


         <div className="min-h-screen flex flex-col sm:flex-row bg-[#C2BFCB]">

  {/* IMAGE SIDE */}
  <Reveal className="w-full sm:w-1/2">
    <div className="relative h-[45vh] sm:h-full w-full">
      <Image
        src="/Live a fulfilling life.webp"
        alt="Flower"
        fill
        className="object-cover"
      />
    </div>
  </Reveal>

  {/* TEXT SIDE */}
  <Reveal className="w-full sm:w-1/2">
  <div className="flex flex-col h-full sm:min-h-screen">

    <div className="flex flex-col justify-center py-12 px-8 sm:p-10">
      <p className="text-4xl lg:text-6xl xl:text-7xl font-bold text-[#223614]">
        You don’t have to do this all alone.
      </p>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
        If you are facing any of these, there’s hope:
      </p>

      <ul className="list-disc pl-5 flex flex-col gap-3 text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
        <li>Feeling emotionally drained or overwhelmed</li>
        <li>Difficulty focusing or staying present</li>
        <li>Ongoing stress or anxiety that won’t settle</li>
        <li>Struggles in personal or professional relationships</li>
        <li>A constant sense of pressure or self-doubt</li>
      </ul>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
        Support can help you slow down, gain clarity, and build steadier ways
        to navigate life’s challenges.
      </p>
    </div>
    <Link href="/contact" className="w-full mt-auto">
      <button className="w-full border-t py-5 uppercase text-sm flex justify-center items-center gap-2 hover:bg-[#223614] hover:text-white transition-colors duration-700">
        connect with me <MdOutlineArrowRightAlt />
      </button>
    </Link>
  </div>
</Reveal>

</div>

    </div>
  )
}

export default Specialties