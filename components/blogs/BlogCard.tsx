import Link from "next/link";
import { BlogPost } from "@/types/types";
import { Clock, ArrowRight } from "lucide-react";

interface Props {
  post: BlogPost;
}

function BlogCard({ post }: Props) {
  return (
    <section>
      <Link href={`/blogs/${post.slug}`}>
        <article
          key={post.id}
          className="bg-white border border-brand-border rounded-sm p-6 flex flex-col justify-between hover:shadow-lg hover:border-brand-red transition-all cursor-pointer group relative"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[10px] text-brand-muted font-sans font-medium">
              <span className="bg-brand-black/5 text-brand-black px-2.5 py-0.5 rounded-sm uppercase tracking-wider font-bold">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h3 className="font-condensed font-extrabold text-xl text-brand-black leading-tight group-hover:text-brand-red transition-colors">
              {post.title}
            </h3>

            <p className="text-xs text-brand-muted font-sans leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-brand-border/40 flex items-center justify-between text-xs text-brand-red font-semibold">
            <span>Read Full Article</span>
            <ArrowRight
              size={13}
              className="transform group-hover:translate-x-1.5 transition-transform"
            />
          </div>
        </article>
      </Link>
    </section>
  );
}

export default BlogCard;
