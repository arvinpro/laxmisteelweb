"use client";

import { useState } from "react";
import {
  ChevronRight,
  ArrowLeft,
  Clock,
  Calendar,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import { BlogPost } from "@/types/types";
import Link from "next/link";

interface Props {
  post: BlogPost;
}
function BlogContent({ post }: Props) {
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);

  const getThreeBlogFaqs = (post: BlogPost) => {
    const postFaqs = post.faqs || [];
    if (postFaqs.length >= 3) {
      return postFaqs.slice(0, 3);
    }

    const generalFaqs = [
      {
        id: "g1",
        question:
          "How do I distinguish between genuine and scrap-rolled steel?",
        answer:
          "Genuine steel has embossed, raised branding (e.g. LAXMI FE 500D) at every meter. Scrap-rolled bars typically have cold-stamps or coarse, uneven diameters.",
      },
      {
        id: "g2",
        question: "Why is ductility critical in earthquake planning in Nepal?",
        answer:
          "During an earthquake, soils shift and displace vertically. Ductility gives rebars high plastic elongation—meaning they bend and stretch without snapping, allowing occupants to exit safely.",
      },
      {
        id: "g3",
        question: "What is the carbon equivalent limit inside FE 500D rebars?",
        answer:
          "To keep high ductility, FE 500D mandates keeping Carbon Equivalents under 0.42%. Excess carbon makes steel strong but highly brittle under vibrations.",
      },
      {
        id: "g4",
        question:
          "Is slightly rusted steel completely unsafe for concrete reinforcement columns?",
        answer:
          "Light brown, temporary surface oxide is normal. However, if rust flakes off or has pitted the metal core—it reduces the rib depth and concrete bonding. Store steel covered on timber logs.",
      },
    ];

    const result = [...postFaqs];
    for (const faq of generalFaqs) {
      if (result.length >= 3) break;
      const exists = result.some(
        (item) => item.question.toLowerCase() === faq.question.toLowerCase()
      );
      if (!exists) {
        result.push(faq);
      }
    }
    return result;
  };

  return (
    <section>
      <div className="space-y-12 pb-20 font-sans text-brand-black">
        {/* Article Hero */}
        <div
          className="bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 relative border-b border-brand-red/20 overflow-hidden select-none bg-cover bg-center"
          style={{
            backgroundImage: `
    linear-gradient(
      to right,
      rgba(0, 0, 0, 0.60) 45%,
      rgba(184, 0, 31, 0.25) 100%
    ),
    url(${post.image})
  `,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-sans text-gray-400 select-none mb-4 md:mb-5">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={10} className="text-gray-500" />
              <span className="cursor-pointer hover:text-white transition-colors">
                Blogs
              </span>
              <ChevronRight size={10} className="text-gray-500" />
              <span className="text-brand-skytext font-medium">
                Article Detail
              </span>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-white font-condensed font-bold uppercase text-xs tracking-widest mb-2 bg-white/5 px-3 py-1.5 rounded-sm transition-all"
            >
              <ArrowLeft size={14} />
              <span>Back to Blogs</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 font-sans">
              <span className="bg-brand-red text-white py-0.5 px-3 font-bold uppercase tracking-wider text-[10px]">
                {post.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock size={13} />
                <span>{post.readTime}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar size={13} />
                <span>Published: {post.date}</span>
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight pt-2">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Content Body */}
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="prose max-w-none space-y-6 text-brand-muted text-base md:text-lg leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "first-letter:font-serif first-letter:text-3xl first-letter:font-bold prose"
                    : "prose"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Related Products strip */}
          <div className="border border-brand-border bg-white rounded-sm p-6 md:p-8 mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-brand-red font-condensed font-bold uppercase text-xs tracking-wider">
                <ShieldCheck size={16} />
                <span>Quality Safety Shield Recommendation</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-brand-black">
                Specifying FE 500D Grade For High Ductility
              </h3>
              <p className="text-xs text-brand-muted leading-relaxed">
                Most soil shifting in Nepal occurs along active faultlines.
                Safeguard your family homes and projects with Laxmi's premium
                certified steel, engineered to bend without structural collapse
                risk.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-end">
              <Link
                href="/contact"
                className="w-full md:w-auto bg-brand-red hover:bg-brand-red/95 text-white py-3 px-6 uppercase font-condensed font-black text-xs tracking-widest transition-all text-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* FAQ ACCORDION */}
          <div className="mt-16 space-y-6">
            <div className="flex items-center gap-2 border-b border-brand-border pb-3">
              <HelpCircle className="text-brand-red" size={24} />
              <h3 className="font-condensed font-extrabold text-2xl tracking-wider uppercase text-brand-black">
                Article FAQ Guide
              </h3>
            </div>

            <div className="space-y-3.5 select-none">
              {getThreeBlogFaqs(post).map((faq) => (
                <div
                  key={faq.id}
                  className="border border-brand-border rounded-xs overflow-hidden bg-white hover:border-brand-red transition-all"
                >
                  <button
                    onClick={() =>
                      setActiveFAQ(activeFAQ === faq.id ? null : faq.id)
                    }
                    className="w-full text-left p-4 md:p-5 font-condensed font-bold text-sm md:text-base text-brand-black flex items-center justify-between hover:bg-brand-sand/30 cursor-pointer focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className="font-serif text-brand-red text-xl font-bold ml-4">
                      {activeFAQ === faq.id ? "×" : "+"}
                    </span>
                  </button>

                  {activeFAQ === faq.id && (
                    <div>
                      <div className="p-4 md:p-5 bg-brand-sand font-sans text-xs md:text-sm text-brand-muted leading-relaxed border-t border-brand-border">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-brand-sand/60 border border-brand-border/60 p-4 rounded-xs text-center text-xs md:text-sm font-sans text-brand-muted flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              <span className="font-medium text-brand-black">
                Looking for more detailed steel metallurgy or purchasing
                answers?
              </span>
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-brand-red hover:text-brand-red/85 font-condensed font-black uppercase text-xs tracking-wider bg-white border border-brand-border px-3.5 py-2 hover:bg-brand-sand transition-all"
              >
                <span>Click Here for More FAQs</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
