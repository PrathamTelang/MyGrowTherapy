import React from 'react'

function Subscribe() {
  return (
    <section className="bg-accent py-28 text-primary">
        <div className="max-w-3xl mx-auto border border-primary rounded-lg p-16 text-center">

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
              className="px-6 py-4 text-accent w-full sm:w-[350px] rounded-lg text-lg bg-primary"
            />
            <button className="border border-white px-8 py-4 uppercase text-sm tracking-wide bg-accent hover:bg-primary rounded-lg text-primary hover:text-textcolor transition-all duration-500">
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