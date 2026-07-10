"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import BrandSplashScreen from '../BrandSplashScreen';
import { AnimatePresence } from 'motion/react';
import HeroCarousel from './HeroCarousel';
import Link from 'next/link';
import { PageId, TeamMember, QuoteRequest, BlogPost } from '@/types/types';

const TICKER_ITEMS = [
  "FE 500 TMT Bars",
  "FE 500D High Ductility",
  "German Thermex Technology",
  "800 MT/Day Capacity",
  "ISO 9001:2015 Certified",
  "BIS Certified",
  "Nepal Standards (NS) Approved",
];

const STATS = [
  { value: "800 MT", label: "Daily Capacity" },
  { value: "2008", label: "Established" },
  { value: "30+", label: "Mega Projects" },
  { value: "3", label: "Certifications" },
];

export default function HeroSection() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isLaunchLoading, setIsLaunchLoading] = useState(true);

  useEffect(() => {
    const shown = sessionStorage.getItem('laxmi_splash_loaded');
    if (shown) setIsLaunchLoading(false);
  }, []);

  const handleSplashComplete = () => {
    setIsLaunchLoading(false);
    sessionStorage.setItem('laxmi_splash_loaded', 'true');
  };

  const [selectedLeader, setSelectedLeader] = useState<TeamMember | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogSubView, setBlogSubView] = useState<'articles' | 'faqs'>('articles');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string>('FE 500D TMT Steel Bars');
  const [quoteForm, setQuoteForm] = useState({
    fullName: '', phone: '', email: '', company: '', quantity: '10 Tons', message: ''
  });
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const handlePageChange = (page: PageId) => {
    if (page === 'faq') {
      setBlogSubView('faqs');
      setSelectedPost(null);
      setActivePage('blog');
    } else if (page === 'blog') {
      setBlogSubView('articles');
      setSelectedPost(null);
      setActivePage(page);
    } else {
      setActivePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a0a] text-[#1A1A1A] font-sans min-h-screen flex flex-col relative overflow-hidden">

      <AnimatePresence mode="wait">
        {isLaunchLoading && (
          <BrandSplashScreen onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>

      <main className="flex-grow pt-0 relative z-10">
        <div key="homepage" className="space-y-0 pb-0">

          {/* ── HERO ─────────────────────────────────────────────── */}
          <div className="relative min-h-[650px] md:min-h-[750px] h-screen bg-[#0a0a0a] overflow-hidden flex flex-col justify-end select-none">
            <HeroCarousel />

            {/* Layered gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/15 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/35 to-transparent pointer-events-none" />

            {/* Top gold rule */}
            <div
              className="absolute top-0 inset-x-0 h-[1.5px] pointer-events-none z-20"
              style={{ background: "linear-gradient(90deg, transparent 0%, #D4A017 25%, #D4A017 75%, transparent 100%)" }}
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 w-full pb-20 md:pb-24 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10">

              {/* Left: text */}
              <div className="max-w-xl space-y-6 text-left">

                {/* Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="block h-[1px] w-5 bg-[#D4A017]" />
                  <span
                    className="text-[#D4A017] text-[9px] md:text-[12px] uppercase tracking-[0.26em] font-semibold"
                  >
                    Est. 2008 &bull; Seismic Resilience
                  </span>
                </div>

                {/* Headline */}
                <div>
                  <h1 className="text-white select-none leading-none">
                    <span
                      className="font-light block text-white/60"
                      style={{ fontSize: "clamp(28px, 3.8vw, 44px)", letterSpacing: "-0.01em" }}
                    >
                      Nepal's Benchmark of
                    </span>
                    <span
                      className="font-semibold block text-white mt-1.5"
                      style={{ fontSize: "clamp(40px, 5.2vw, 58px)", letterSpacing: "-0.025em" }}
                    >
                      High-Ductility Steel
                    </span>
                  </h1>
                  {/* Headline accent */}
                  <div className="flex items-center gap-2 mt-5">
                    <span className="block h-[2px] w-12 bg-[#D4A017]" />
                    <span className="block h-[1px] w-5 bg-[#D4A017]/35" />
                  </div>
                </div>

                {/* Body */}
                <p
                  className="text-white/70 leading-[1.9] max-w-sm"
                  style={{ fontSize: "16.5px" }}
                >
                  Licensed German Thermex Technology. Built for Nepal's active seismic zones.
                  Trusted by structural engineers and national planners.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/product"
                    className="group bg-[#C8001E] hover:bg-[#A8001A] text-white font-medium tracking-[0.14em] uppercase px-7 py-3.5 transition-all duration-200 cursor-pointer focus:outline-none flex items-center justify-center gap-2.5 shadow-lg shadow-red-950/50"
                    style={{ fontSize: "12.5px" }}
                  >
                    <span>Explore Products</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </Link>
                  <Link
                    href="/project"
                    className="border border-white/15 hover:border-[#D4A017]/50 hover:bg-white/[0.03] text-white/60 hover:text-white/90 font-medium tracking-[0.14em] uppercase px-7 py-3.5 transition-all duration-200 cursor-pointer focus:outline-none flex items-center justify-center"
                    style={{ fontSize: "12.5px" }}
                  >
                    View Legacy Projects
                  </Link>
                </div>
              </div>

              {/* Right: stat stack (desktop only) */}
              <div className="hidden lg:flex flex-col gap-0 border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm divide-y divide-white/[0.06] min-w-[180px]">
                {STATS.map(({ value, label }) => (
                  <div key={label} className="px-6 py-4 flex flex-col gap-0.5">
                    <span
                      className="font-serif font-semibold text-white"
                      style={{ fontSize: "24px", letterSpacing: "-0.02em" }}
                    >
                      {value}
                    </span>
                    <span
                      className="text-gray-400 font-bold uppercase tracking-[0.18em] font-sans"
                      style={{ fontSize: "9px" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
                <div className="h-[2px] w-full bg-[#D4A017]/25" />
              </div>
            </div>

            {/* ── TICKER ──────────────────────────────────────────── */}
            <div
              className="relative overflow-hidden select-none flex items-center"
              style={{
                background: "#080807",
                borderTop: "1px solid rgba(212,160,23,0.18)",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-14 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #080807, transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-14 z-10 pointer-events-none" style={{ background: "linear-gradient(-90deg, #080807, transparent)" }} />

              <div className="animate-marquee flex items-center whitespace-nowrap">
                {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                  <React.Fragment key={i}>
                    <span
                      className="text-[#D4A017] font-sans uppercase font-medium"
                      style={{ fontSize: "12px", letterSpacing: "0.22em" }}
                    >
                      {item}
                    </span>
                    <span className="mx-6 text-[#D4A017]/25" style={{ fontSize: "7px" }}>◆</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}