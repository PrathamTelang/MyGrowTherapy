import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import BlogHero from "../components/BlogHero";
import BlogGrid from "../components/BlogGrid";
import Header from "../components/Header";
import { posts } from "@/lib/posts";

export default function BlogPage() {
  return (
    <div className="bg-primary text-textcolor">
      <Header />
      <BlogHero />
      <BlogGrid posts={posts} />
      <Subscribe />
      <Footer />
    </div>
  );
}
