import { ChevronRight, Info } from "lucide-react";
import Documents from "./Documents";

function InvestorView() {
  return (
    <section id="investor-relations-section">
      {/* Page Hero */}
      <div
        className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-brand-red/20 overflow-hidden select-none bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.55) 45%, rgba(184, 0, 31, 0.25) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-1.5 text-xs font-sans text-gray-400 select-none mb-4 md:mb-5">
            <span className="hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <ChevronRight size={10} className="text-gray-500" />
            <span className="text-brand-skytext font-medium">
              Investor Relations
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Investor Relations
          </h1>
          <p className=" text-brand-gold text-lg uppercase tracking-wide font-bold">
            Transparency, Institutional Trust & Sustainable Corporate Value
          </p>
        </div>
      </div>

      {/* Corporate Notice Block */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 mt-12">
        <div className="bg-amber-50 border border-amber-200 p-5 rounded-xs flex items-start gap-4 text-sm text-brand-black select-none shadow-3xs">
          <Info size={20} className="text-brand-gold flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-condensed font-black text-xs uppercase tracking-wider text-amber-900">
              Regulatory Information Repository
            </h4>
            <p className="text-xs text-amber-800 leading-relaxed font-sans">
              Welcome to the digital investor portal of Laxmi Steels Limited.
              This platform is maintained in compliance with Company Acts and
              SEBON guidelines. Released reports are fully accessible to
              shareholders, while pending files are listed under active
              transition cycles below.
            </p>
          </div>
        </div>
      </div>

      {/*Documents Section*/}
      <Documents />
    </section>
  );
}

export default InvestorView;
