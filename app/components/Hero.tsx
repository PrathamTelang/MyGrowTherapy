"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Reveal from "./Reveal";

export default function Hero() {
  const router = useRouter();
  
  return (
    <div className="pt-14 bg-primary">
        <div className="min-h-screen grid sm:grid-cols-2 ">

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
      <p className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-textcolor text-center">
        Find steadiness amid anxiety.
      </p>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
        Therapy for adults in Santa Monica, CA <br/>
In-person & secure telehealth across California
      </p>

      <Link href="/contact">
        <button className="bg-accent hover:bg-primary rounded-lg text-primary hover:text-textcolor transition-colors duration-700 uppercase mt-8 border text-sm flex justify-center items-center px-7 py-4 gap-2 cursor-pointer">
          Get Started <MdOutlineArrowRightAlt />
        </button>
      </Link>
    </div>
  </Reveal>

</div>

        

            <div className="min-h-screen sm:h-screen flex flex-col sm:flex-row bg-secondary">

        {/* TEXT SIDE */}
            <Reveal className="order-2 sm:order-1 w-full sm:w-1/2">
        <div className="h-full flex flex-col">

     <div className="flex-1 flex flex-col  justify-center p-10 ">
    <p className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-textcolor">
      You don’t have to navigate this alone.
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
      Life can feel overwhelming—especially when anxiety, stress, or internal pressure never fully settle.
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
       Therapy offers space to slow down, gain clarity, and move forward with greater steadiness.
    </p>
  </div>

  <Link href="/contact" className="w-full">
    <button className="w-full border-t py-5 uppercase text-sm flex justify-center items-center gap-2 bg-accent hover:bg-secondary text-primary hover:text-textcolor transition-colors duration-700">
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