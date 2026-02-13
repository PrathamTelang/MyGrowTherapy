import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  date: string;
  image: string;
};

export default function BlogGrid({ posts }: { posts: Post[] }) {
  return (
    <section className="bg-[#EAE4DE] py-24">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-20">

        {posts.map((post, index) => (
          <Link href={`/blog/${index}`}> 
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

            <div
              className="inline-block border-b border-[#223614] text-sm uppercase tracking-wide pb-1"
            >
              Read More
            </div>

          </div>
          </Link>
        ))}

      </div>
      
    </section>
  );
}
