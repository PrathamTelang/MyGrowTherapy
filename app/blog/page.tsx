"use client";

import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import BlogHero from "../components/BlogHero";
import BlogGrid from "../components/BlogGrid";
import Header from "../components/Header";

const posts = [
  {
    title: "Blog Post One",
    date: "3/11/19",
    image: "/Live a fulfilling life.webp",
  },
  {
    title: "Blog Post Two",
    date: "3/11/19",
    image: "/Live a fulfilling life.webp",
  },
  {
    title: "Blog Post Three",
    date: "3/11/19",
    image: "/Live a fulfilling life.webp",
  },
  {
    title: "Blog Post Four",
    date: "3/11/19",
    image: "/Live a fulfilling life.webp",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#faf7f2] text-[#223614]">
      <Header />
      <BlogHero />
      <BlogGrid posts={posts} />
      <Subscribe />
      <Footer />
    </div>
  );
}
