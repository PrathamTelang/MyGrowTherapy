import React from 'react'

function Subscribe() {
  return (
    <section className="bg-[#7e7b46] py-28 text-white">
        <div className="max-w-3xl mx-auto border border-white p-16 text-center">

          <h3 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
            Subscribe
          </h3>

          <p className="text-md sm:text-xl md:text-2xl mt-6 leading-relaxed">
            Sign up with your email address to receive news and updates.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <input
              type="email"
              placeholder="Email Address"
              className="px-6 py-4 text-gray-800 w-full sm:w-[350px] text-lg bg-white"
            />
            <button className="border border-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-white hover:text-[#7e7b46] transition-all duration-500">
              Sign Up
            </button>
          </div>

          <p className="text-md mt-6 opacity-80">
            We respect your privacy.
          </p>

        </div>
      </section>
  )
}

export default Subscribe