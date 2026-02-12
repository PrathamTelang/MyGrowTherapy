import React from 'react'
import Reveal from './Reveal'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

function Connect() {
  return (
     <div className="min-h-screen sm:h-screen flex flex-col sm:flex-row bg-[#E5E0DA]">

        {/* TEXT SIDE */}
            <Reveal className=" w-full sm:w-1/2">
        <div className="h-full flex flex-col">

     <div className="flex-1 flex flex-col  justify-center p-10 ">
    <p className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#223614]">
      Let’s Connect
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
      Starting therapy is courageous.
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
      Get in touch for questions, or to book a free 15-minute consultation.
    </p>
  </div>

 <div className='w-full flex justify-center items-center'>
     <div className="relative h-[55vh] lg:h-[55vh] w-[35%] rounded-t-full overflow-hidden">
      <Image
        src="/Live a fulfilling life.webp"
        alt="Flower"
        fill
        className="object-cover"
      />
    </div>
 </div>

</div>
  </Reveal>

    <Reveal className='w-full sm:w-1/2 flex justify-center items-center'>
        <div className='bg-[#223614] w-[80%] h-[50%] flex flex-col justify-center items-center text-center p-10 rounded-lg text-white text-xl leading-relaxed'>
            PLEASE NOTE: If you opt to use a “Form Block” on your contact page this is not HIPAA-compliant. Squarespace stores data that is input into forms in the Marketing tab under Profiles. Instead, you can embed a HIPAA-compliant form, a link to your client portal, or simply put your email address.
        </div>
    </Reveal>

</div>
  )
}

export default Connect