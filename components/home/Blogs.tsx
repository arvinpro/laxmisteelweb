"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import Link from "next/link";

function Blogs() {
  return (
    <section>
      <div className="bg-[#F5F3EE] py-16 md:py-24 border-b border-brand-border/70">
        <div className="max-w-7xl mx-auto px-4 md:px-8 select-none text-brand-black font-sans">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <span className="text-[#B8001F] text-xs font-mono font-bold uppercase tracking-widest">
              Industrial Hub
            </span>
            <h3 className="text-3xl font-extrabold uppercase text-brand-black">
              Steel Knowledge Hub
            </h3>
            <p className="text-xs text-brand-muted font-sans font-medium">
              Read educational guidelines prepared by corporate geological and
              compliance specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
               key={post.id}
                href={`/blogs/${post.slug}`}
                className="group"
              >
              
              <article
                key={post.id}           
                className="bg-white border border-brand-border rounded-sm p-6 flex flex-col justify-between hover:shadow-lg transition-transform cursor-pointer group hover:border-brand-red"
              >
                <div className="space-y-3">
                  <span className="bg-brand-red/10 text-brand-red border border-brand-red/25 px-2.5 py-0.5 rounded-sm uppercase tracking-wide font-bold text-[9px] inline-block">
                    {post.category}
                  </span>
                  <h4 className="font-black text-lg text-brand-black leading-tight group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-brand-border/40 text-xs text-brand-red font-semibold flex items-center justify-between">
                  <span>Read Article</span>
                  <ArrowRight
                    size={13}
                    className="transform group-hover:translate-x-1.5 transition-transform"
                  />
                </div>
              </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
