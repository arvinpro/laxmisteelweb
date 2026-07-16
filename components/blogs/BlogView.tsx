"use client";

import { useState } from "react";
import FAQView from "../FAQView";
import BlogGrid from "./BlogGrid";
import FeaturedBlog from "./FeaturedBlog";
import Breadcrumb from "../ui/Breadcrumb";
import { getFeaturedBlog, getCategories } from "@/lib/blog";

export default function BlogView() {
  const [localSubView, setLocalSubView] = useState<"articles" | "faqs">(
    "articles"
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = getCategories();

  return (
    <div id="blog-knowledge-hub-page">
      <div className="space-y-12">
        {/* Page Hero */}
        <div
          className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-brand-red/20 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.65) 45%, rgba(184, 0, 31, 0.25) 100%), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
            <Breadcrumb />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Learn About Steel. Build with Confidence.
            </h1>
            <p className="text-brand-gold text-lg uppercase tracking-wide font-bold">
              Expert construction guides for developers, engineers, and
              homebuilders in Nepal
            </p>
            <p className="text-gray-300 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              We supply more than just heavy structural metal. Read our
              comprehensive technical guides, metallurgy breakdowns, and buying
              checklists prepared from industrial research parameters.
            </p>
          </div>
        </div>

        {/* SUB-NAVIGATION TABS */}
        {/* <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 text-center select-none">
          <div className="inline-flex bg-white p-1 border border-brand-border rounded-xs shadow-xs">
            <button
              onClick={() => setLocalSubView("articles")}
              className={`px-8 py-3 font-condensed font-bold text-sm uppercase tracking-wider rounded-xs transition-colors cursor-pointer focus:outline-none ${
                localSubView === "articles"
                  ? "bg-[#B8001F] text-white shadow-xs"
                  : "text-brand-black hover:bg-brand-sand/50"
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => setLocalSubView("faqs")}
              className={`px-8 py-3 font-condensed font-bold text-sm uppercase tracking-wider rounded-xs transition-colors cursor-pointer focus:outline-none ${
                localSubView === "faqs"
                  ? "bg-[#B8001F] text-white shadow-xs"
                  : "text-brand-black hover:bg-brand-sand/50"
              }`}
            >
              FAQ Hub
            </button>
          </div>
        </div> */}

        {/* FEATURED POST */}
        {localSubView === "articles" && activeCategory === "All" && (
          <FeaturedBlog post={getFeaturedBlog()} />
        )}

        {/* Filtered */}
        <div className="bg-white border-y border-brand-border py-4 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex gap-2 md:justify-center min-w-max md:min-w-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xs text-sm uppercase font-bold transition ${
                  activeCategory === category
                    ? "bg-brand-red text-white"
                    : "border border-brand-border hover:bg-brand-sand"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {localSubView === "articles" && (
          <BlogGrid activeCategory={activeCategory} />
        )}

        {/* EMBEDDED FAQ VIEW */}
        {localSubView === "faqs" && (
          <div className="max-w-7xl mx-auto pb-20">
            <FAQView isEmbedded={true} />
          </div>
        )}
      </div>
    </div>
  );
}
