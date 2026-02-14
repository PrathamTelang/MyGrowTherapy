import React from 'react'
import Reveal from './Reveal'
import Image from 'next/image'

function Connect() {
  return (
     <div className="min-h-screen sm:h-screen flex flex-col sm:flex-row bg-[#E5E0DA] pt-14">

        {/* TEXT SIDE */}
            <Reveal className=" w-full sm:w-1/2">
        <div className="h-full flex flex-col">

     <div className="flex-1 flex flex-col  justify-center p-10 ">
    <p className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-[#223614]">
      Let’s Connect
    </p>

    <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
      Beginning therapy takes courage. If you have questions or would like to schedule a complimentary 15-minute consultation, I welcome you to reach out.
    </p>
  </div>

 <div className='w-full flex justify-center items-center'>
     <div className="relative h-[55vh] lg:h-[55vh] w-[60%] lg:w-[35%] rounded-t-full overflow-hidden">
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

    <Reveal className='w-full h-full sm:w-1/2 flex justify-center items-center'>
        <div className='bg-[#223614] w-[80%]  flex flex-col justify-center items-center text-center p-10 rounded-lg text-white text-xl leading-relaxed'>
            Please note that email and contact forms are not intended for sharing detailed clinical information. For privacy and security, sensitive information can be discussed during your consultation.
        </div>
    </Reveal>

</div>
  )
}

export default Connect