import Image from "next/image";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
};

export default function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="space-y-6 block"
          >
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm opacity-70">{post.date}</p>

            <h3 className="text-4xl md:text-5xl font-semibold leading-tight">
              {post.title}
            </h3>

            <div className="inline-block border-b border-textcolor text-sm uppercase tracking-wide pb-1">
              Read More
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
