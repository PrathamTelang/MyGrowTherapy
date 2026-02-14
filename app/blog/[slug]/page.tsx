import Header from "@/app/components/Header";
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
    <Header />
    <article className="bg-[#F4EFEA] px-8 md:px-16 py-28 text-[#223614]">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold">
          {post.title}
        </h1>

        <p className="mt-4 text-sm opacity-70">{post.date}</p>

        <div className="mt-12 text-md sm:text-xl md:text-2xl leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

      </div>
    </article>
    </>
  );
}
