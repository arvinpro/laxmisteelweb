"use client";

import React, { useState, useMemo } from "react";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  BookOpen,
  Construction,
  Truck,
  FileText,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export default function FAQView({
  isEmbedded = false,
}: {
  isEmbedded?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [questionText, setQuestionText] = useState("");
  const [submitEmail, setSubmitEmail] = useState("");

  const categories: FAQCategory[] = [
    { id: "all", name: "All Topics", icon: <HelpCircle size={16} /> },
    {
      id: "seismic",
      name: "Earthquake & Ductility",
      icon: <Construction size={16} />,
    },
    {
      id: "technical",
      name: "Metallurgy & Testing",
      icon: <ShieldCheck size={16} />,
    },
    {
      id: "buying",
      name: "Verification & Buying",
      icon: <BookOpen size={16} />,
    },
    { id: "logistics", name: "Storage & Rust", icon: <Truck size={16} /> },
  ];

  const faqItems: FAQItem[] = [
    {
      id: "fa1",
      category: "buying",
      question: "How do I distinguish between genuine and scrap-rolled steel?",
      answer:
        "Genuine prime-billet steel has embossed, raised branding (such as 'LAXMI FE 500D' with the NS mark) repeating at precisely one-meter intervals. Scrap-rolled bars typically have cold-stamps, uneven section weights, coarse surfaces, and irregular diameters.",
    },
    {
      id: "fa2",
      category: "seismic",
      question: "Why is ductility critical in earthquake planning in Nepal?",
      answer:
        "During a seismic event, soils shift and buildings undergo massive dynamic lateral displacements. High ductility (specified by the 'D' in Fe 500D) gives TMT rebars superior plastic elongation. They bend and stretch to absorb energy without snapping suddenly, protecting the structural frame and offering safe egress time.",
    },
    {
      id: "fa3",
      category: "technical",
      question: "What is the carbon equivalent limit inside FE 500D rebars?",
      answer:
        "To sustain high ductility, Nepal standards and Laxmi Steels strictly enforce Carbon Equivalent (CE) limits under 0.42%. Excess carbon increases raw tensile strength but results in extreme brittleness, which can cause catastrophical failure during vibrations.",
    },
    {
      id: "fa4",
      category: "logistics",
      question:
        "Is slightly rusted steel completely unsafe for concrete reinforcement columns?",
      answer:
        "Light brown, temporary surface oxide (flash rusting) is normal and actually increases bond friction with concrete. However, if rust flakes off under touch or has pitted the metal core, it reduces the effective rebar diameter and bond. Always store rebars elevated on timber logs covered with waterproof sheets.",
    },
    {
      id: "fa5",
      category: "seismic",
      question:
        "What is the minimum diameter requirement for home columns in Kathmandu valley?",
      answer:
        "Nepal National Building Code (NBC 105 & 205) mandates a minimum vertical rebar diameter of 12mm for standard RCC columns, with 16mm or higher for load-bearing edges and structural frames, subject to engineering design approvals.",
    },
    {
      id: "fa6",
      category: "seismic",
      question: "Why does concrete crack around lower-quality rebars?",
      answer:
        "Lower-quality scrap rebars undergo non-uniform elongation under strain. When stress exceeds their irregular yield threshold, they deform localizedly, forcing adjacent concrete into extreme tension and initiating concrete cracking and spalling.",
    },
    {
      id: "fa7",
      category: "logistics",
      question:
        "How many days can TMT bars remain exposed on-site during monsoons?",
      answer:
        "Uncovered monsoon exposure should never exceed 10 to 14 days. Long-term moisture exposure starts severe chemical pitting which compromises the critical rib patterns that grip the surrounding concrete.",
    },
    {
      id: "fa8",
      category: "technical",
      question: "Does Laxmi Steels produce FE 550 or Fe 600 grades?",
      answer:
        "Laxmi Steels focuses primarily on high-ductility Fe 500 and Fe 500D grades. Higher grades like Fe 600 are theoretically stronger but much more brittle, rendering them unsuitable for earthquake-prone seismic zones in Nepal.",
    },
    {
      id: "fa9",
      category: "technical",
      question: "What is a Re-bend test, and how is it executed?",
      answer:
        "A rebar specimen is bent to 135 degrees, boiled in hot water at 100°C for 30 minutes (to simulate artificial age hardening), and then bent back to 157.5 degrees. To pass, the rebar must show absolutely zero signs of micro-surface cracks or tearing along the bent profile.",
    },
    {
      id: "fa10",
      category: "buying",
      question:
        "Can we mix different steel rebar brands inside the same building frame?",
      answer:
        "Never mix brands. Different manufacturers employ different raw billet chemistries and quenching models, leading to conflicting yield strengths and stress-strain tolerances. Mixing brands triggers uneven dynamic load distribution.",
    },
    {
      id: "fa11",
      category: "buying",
      question: "What certifications should I request when buying TMT bars?",
      answer:
        "You must always ask for the official NS (Nepal Standards) Certification, ISO 9001, and an official mill test certificate confirming the chemical composition (Carbon, Sulphur, Phosphorus content) and mechanical properties (Yield strength, Ultimate Tensile Strength, and Elongation %).",
    },
    {
      id: "fa12",
      category: "seismic",
      question:
        "What are stirrups / ring binders, and why are their hooks set to 135-degrees?",
      answer:
        "Stirrups (or ring binders) hold the main vertical rebars together and resist shear stresses. Standard 90-degree hooks slip easily under seismic sway. Bending stirrups to a strict 135-degree angle anchors the hook directly into the core concrete, preventing collapse.",
    },
  ];

  // Search and Category Filter Logic
  const filteredFAQs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchQuery =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      return matchQuery && matchCategory;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleCustomQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setQuestionText("");
      setSubmitEmail("");
    }, 4000);
  };

  return (
    <div
      className={`font-sans text-brand-black ${isEmbedded ? "bg-transparent" : "bg-[#F5F3EE] min-h-screen"}`}
      id="faq-page-wrapper"
    >
      {!isEmbedded && (
        <>
          {/* Banner / Hero Section */}
          <div
            className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-[#8F9E75]/20 overflow-hidden select-none bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.65) 45%, rgba(184, 0, 31, 0.2) 100%), url('/company/dccc (22).jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
              <span className="text-[#8F9E75] text-[10px] tracking-widest uppercase block font-bold">
                SUPPORT & KNOWLEDGE BASE
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight leading-none">
                FAQ Center
              </h1>
              <p className="text-gray-300 font-sans text-sm md:text-sm max-w-xl mx-auto leading-relaxed">
                Find immediate, certified answers compiled by our metallurgical
                engineers regarding earthquake resistance, rebar certifications,
                storage protocols, and quality standards.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Main Interactive Workspace */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-10 select-none">
        {/* Search & Topic Quick Filters */}
        <div className="space-y-6">
          <div className="relative">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search for questions, grades (e.g., Fe 500D), or certifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-brand-border text-brand-black pl-11 pr-5 py-3.5 placeholder-gray-400 font-semibold focus:outline-none focus:border-[#8F9E75] transition-all shadow-xs text-sm rounded-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-brand-black text-sm font-bold font-condensed uppercase focus:outline-none"
              >
                Clear
              </button>
            )}
          </div>

          {/* Categorized Filter Row */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setOpenFAQ(null);
                }}
                className={`py-2 px-4 rounded-xs font-condensed font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 cursor-pointer focus:outline-none transition-colors border ${
                  selectedCategory === cat.id
                    ? "bg-brand-black text-white border-brand-black"
                    : "bg-white hover:bg-brand-sand text-brand-black border-brand-border"
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Interactive Accordions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-brand-border pb-2.5 mb-4">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              Showing {filteredFAQs.length} Relevant Questions
            </span>
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              Topic: {categories.find((c) => c.id === selectedCategory)?.name}
            </span>
          </div>

          {filteredFAQs.length > 0 ? (
            <div key={selectedCategory + searchQuery} className="space-y-3">
              {filteredFAQs.map((faq) => {
                const isOpen = openFAQ === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="border border-brand-border bg-white rounded-xs overflow-hidden hover:border-[#8F9E75] transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full text-left p-4 md:p-5 font-condensed font-bold text-sm md:text-base text-brand-black flex items-center justify-between hover:bg-brand-sand/50 cursor-pointer focus:outline-none"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-brand-red flex-shrink-0">
                        {isOpen ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div>
                        <div className="p-4 md:p-5 bg-brand-sand border-t border-brand-border font-sans text-sm md:text-sm text-brand-muted leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white border border-brand-border rounded-xs space-y-3">
              <p className="text-sm font-sans text-brand-muted">
                No questions match your current filters or query.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-brand-black text-white hover:bg-brand-red py-2 px-4 uppercase font-condensed text-[10px] font-bold tracking-widest rounded-xs focus:outline-none"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
