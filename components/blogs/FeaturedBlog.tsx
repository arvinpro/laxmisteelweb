import { ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/types/types";
import Image from "next/image";

interface FeaturedBlogProps {
  post: BlogPost;
}

function FeaturedBlog({ post }: FeaturedBlogProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="border border-brand-red/30 bg-[#F5F3EE]/30 rounded-xs overflow-hidden flex flex-col lg:flex-row shadow-sm hover:shadow-md transition-all">
          <div className="bg-white p-8 md:p-12 lg:w-3/5 space-y-5 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-brand-muted font-sans font-medium">
              <span className="bg-brand-red/10 text-brand-red border border-brand-red/30 px-3 py-0.5 rounded-sm uppercase tracking-wide font-bold text-[10px]">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                <span>{post.readTime}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                <span>{post.date}</span>
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight select-none">
              {post.title}
            </h2>

            <p className="text-brand-muted font-sans text-sm md:text-base leading-relaxed">
              {post.excerpt}
            </p>

            <Link
              href={`/blogs/${post.slug}`}
              className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red/80 font-condensed font-black uppercase text-sm tracking-wider cursor-pointer focus:outline-none"
            >
              <span>Read Complete Guide</span>
              <ArrowRight size={14} className="animate-pulse" />
            </Link>
          </div>

          <div className="bg-brand-black p-8 lg:w-2/5 flex flex-col justify-between text-white relative overflow-hidden min-h-[300px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-80" />
            <div className="relative z-10 font-serif text-xl tracking-wide font-black text-brand-gold">
              LAXMI SPECS
            </div>
            <div className="relative z-10 space-y-2">
              <p className="text-2xl font-semibold italic text-slate-100">
                "Quality steel is the hidden insurance policy of your roof."
              </p>
              <p className="text-sm font-mono tracking-widest text-brand-red uppercase font-semibold">
                Nepal Metallurgical Forum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlog;
