import React from 'react'
import Reveal from './Reveal'
import Image from 'next/image'

function BlogHero() {
  return (
    <div className="min-h-screen grid sm:grid-cols-2 bg-primary pt-14">

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
    <div className="w-full flex flex-col  justify-center py-16 px-10 sm:h-screen ">
      <p className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-textcolor">
        The Maya Reynolds Journal
      </p>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
        Thoughtful reflections on anxiety, trauma, burnout, and the inner work of building steadier ground.
      </p>

      <p className="font-bold text-md sm:text-xl md:text-2xl mt-6 text-textcolor">
        I’m glad you’re here.
      </p>
    </div>
  </Reveal>

</div>
  )
}

export default BlogHero