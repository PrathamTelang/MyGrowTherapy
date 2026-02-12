"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Reveal from "./Reveal";

export default function Hero() {
  const router = useRouter();
  
  return (
    <div className="pt-14">
        <div className="min-h-screen grid sm:grid-cols-2 bg-[#faf7f2]">

<Reveal>
  <div className="flex items-center justify-center w-full">
    <div className="relative rounded-t-full overflow-hidden 
                    h-[55vh] sm:h-[90vh] 
                    w-[65%] md:w-[60%] mt-10">
      <Image
        src="/Live a fulfilling life.webp"
        alt="Flower"
        fill
        className="object-cover"
        priority
      />
    </div>
  </div>
</Reveal>


  <Reveal>
    <div className="w-full flex flex-col items-center justify-center py-16 sm:h-screen">
      <p className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#223614]">
        Live your life <br /> in full bloom
      </p>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
        Therapy for Adults in Minneapolis, MN.
      </p>

      <Link href="/contact">
        <button className="hover:bg-[#223614] hover:text-white text-[#223614] transition-colors duration-700 uppercase mt-8 border text-sm flex justify-center items-center px-7 py-4 gap-2">
          connect with me <MdOutlineArrowRightAlt />
        </button>
      </Link>
    </div>
  </Reveal>

</div>

        

            <div className="min-h-screen sm:h-screen flex flex-col sm:flex-row bg-[#E5E0DA]">

        {/* TEXT SIDE */}
            <Reveal className="order-2 sm:order-1 w-full sm:w-1/2">
        <div className="h-full flex flex-col">

     <div className="flex-1 flex flex-col  justify-center p-10 ">
    <p className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#223614]">
      Live a fulfilling life.
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
      Life can be challenging—especially when you're trying to balance your personal and professional life.
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
      It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
    </p>
  </div>

  <Link href="/contact" className="w-full">
    <button className="w-full border-t py-5 uppercase text-sm flex justify-center items-center gap-2 hover:bg-[#223614] hover:text-white transition-colors duration-700">
      connect with me <MdOutlineArrowRightAlt />
    </button>
  </Link>

</div>

  </Reveal>

  {/* IMAGE SIDE */}
  <Reveal className="order-1 sm:order-2 w-full sm:w-1/2">
    <div className="relative h-64 sm:h-full w-full">
      <Image
        src="/Live a fulfilling life.webp"
        alt="Flower"
        fill
        className="object-cover"
      />
    </div>
  </Reveal>
</div>

    </div>
  );
}