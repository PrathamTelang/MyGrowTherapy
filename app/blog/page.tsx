"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const posts = [
  { title: "Blog Post One", date: "3/11/19", image: "/Live a fulfilling life.webp" },
  { title: "Blog Post Two", date: "3/11/19", image: "/Live a fulfilling life.webp" },
  { title: "Blog Post Three", date: "3/11/19", image: "/Live a fulfilling life.webp" },
  { title: "Blog Post Four", date: "3/11/19", image: "/Live a fulfilling life.webp" },
];

export default function BlogPage() {
  return (
    <div className="bg-[#faf7f2] text-[#223614]">


      {/* HERO */}
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
    <div className="w-full flex flex-col  justify-center py-16 sm:h-screen">
      <p className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-[#223614]">
        The Lilac Blog
      </p>

      <p className="text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
        My tiny corner of the internet where I talk about all things healing, heart, and wholeness. 
      </p>

      <p className="font-bold text-md sm:text-xl md:text-2xl mt-6 text-[#223614]">
        Glad you’re here.
      </p>
    </div>
  </Reveal>

</div>


      {/* BLOG GRID */}
      <section className="bg-[#EAE4DE] py-24">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">

          {posts.map((post, index) => (
            <div key={index} className="space-y-6">

              <div className="relative w-full h-[320px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm">{post.date}</p>

              <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
                {post.title}
              </h3>

              <Link
                href="/blog/post"
                className="inline-block border-b border-[#223614] text-sm uppercase tracking-wide pb-1"
              >
                Read More
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* SUBSCRIBE */}
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
          <Footer />
    </div>
  );
}
