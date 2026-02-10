"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Reveal from "./Reveal";

export default function Hero() {
  const router = useRouter();
  
  return (
    <div className="bg-[#faf7f2] pt-14 ">
        <div className="h-screen grid sm:grid-cols-2">
            <Reveal>
                <div className="md:h-screen flex flex-col items-center justify-center">
                <Image
                src="/hero.jpg"
                alt="Flower"
                width={500}
                height={800}
                className="max-w-full h-64 w-45 sm:h-auto sm:w-auto  rounded-t-full " 
                />
            </div>
            </Reveal>
            <Reveal>
                <div className="md:h-screen w-full flex flex-col items-center justify-center">
                <p className="flex justify-center items-center text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold  text-[#223614]">Live your life <br />in full bloom</p>
                <p className=" flex justify-center items-center text-md sm:text-xl md:text-2xl mt-4 md:mt-10 text-[#223614]">Therapy for Adults in Minneapolis, MN.</p>
                    <Link href="/contact">
                    <button  className="hover:bg-[#223614] hover:text-white text-[#223614] transition-colors duration-1000  uppercase mt-6 sm:mt-8 md:mt-10 border mx-auto text-sm flex justify-center items-center px-7 sm:px-6 md:px-7 py-4 sm:py-3 md:py-3.5 cursor-pointer gap-2">connect with me <MdOutlineArrowRightAlt /> </button>
                    </Link> 
            </div>
            </Reveal>
        </div>
        
    </div>
  );
}