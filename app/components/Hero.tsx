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
            <div className="flex w-1/2  flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center ">
        <div>
        <p className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold  sm:tracking-wider text-center lg:text-left text-[#223614]">Live your life 
 <br/>
        in full bloom</p>
        <p className=" flex justify-center items-center text-md sm:text-xl md:text-2xl pt-10 text-[#223614]">Therapy for Adults in Minneapolis, MN.</p>
            <Link href="/contact">
            <button  className="hover:bg-[#223614] hover:text-white text-[#223614] transition-colors duration-1000  uppercase mt-6 sm:mt-8 md:mt-10 border mx-auto text-sm flex justify-center items-center px-7 sm:px-6 md:px-7 py-4 sm:py-3 md:py-3.5 cursor-pointer gap-2">connect with me <MdOutlineArrowRightAlt /> </button>
            </Link>
        </div>
            
        
    </div>
        </div>


        <div className="relative h-screen flex justify-between items-center bg-[#E5E0DA] ">
            
                <div className="flex w-1/2 flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center ">
        <div className="pl-16">
        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold  sm:tracking-wider text-center lg:text-left text-[#223614]">Live a fulfilling life.</p>
        <p className=" flex justify-center items-center text-md sm:text-xl md:text-2xl pt-10 text-[#223614]">Life can be challenging—especially when you're trying to balance your personal and professional life. </p>
        <p className=" flex justify-center items-center text-md sm:text-xl md:text-2xl pt-10 text-[#223614]">It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help. </p>
            
        </div>
        <div className="w-1/2  justify-end absolute bottom-0 ">
            <Link href="/contact">
            <button  className="hover:bg-[#223614] hover:text-white transition-colors duration-1000 text-center mt-auto flex  justify-center items-center cursor-pointer border-t py-4 sm:py-5 md:py-6 w-full text-xs sm:text-sm gap-2">GET IN TOUCH <MdOutlineArrowRightAlt /> </button>
            </Link>
        </div>
    </div>
    <div>
                <Image
          src="/hero.jpg"
          alt="Flower"
          width={500}
          height={800}
          className="max-w-full h-67.5 w-45 sm:h-auto  sm:w-auto  rounded-t-full " 
          />
            </div>
        </div>
    </div>
  );
}