"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdArrowOutward, MdOutlineArrowRightAlt } from "react-icons/md";

export default function Hero() {
  const router = useRouter();
  
  return (
    <div className="bg-[#faf7f2] pt-14">
        <div className="h-screen flex justify-between items-center">
            <div>
                <Image
          src="/hero.jpg"
          alt="Flower"
          width={500}
          height={800}
          className="max-w-full h-67.5 w-45 sm:h-auto  sm:w-auto  rounded-t-full " 
          />
            </div>
            <div className="flex w-1/2  flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center order-2">
        <div>
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium  sm:tracking-wider text-center lg:text-left text-[#223614]">Live your life 
 <br/>
        in full bloom</p>
        <p className=" flex justify-center items-center text-sm sm:text-lg md:text-xl pt-10 text-[#223614]">Therapy for Adults in Minneapolis, MN.</p>
            <Link href="/contact">
            <button  className="hover:bg-[#223614] hover:text-white text-[#223614] transition-colors duration-1000  uppercase mt-6 sm:mt-8 md:mt-10 border mx-auto text-sm flex justify-center items-center px-7 sm:px-6 md:px-7 py-4 sm:py-3 md:py-3.5 cursor-pointer gap-2">connect with me <MdOutlineArrowRightAlt /> </button>
            </Link>
        </div>
            
        
    </div>
        </div>
    </div>
  );
}