import { ChevronRight } from "lucide-react";
import SustainabilityOverview from "./SustainabilityOverview";
import EstimatedRebar from "./EstimatedRebar";
import SustainabilityActivities from "./SustainabilityActivities";
import Highlights from "./Highlights";


function SustainabilityView() {
  return (
    <section
      className="bg-brand-sand min-h-screen pt-0 select-none"
      id="sustainability-portal"
    >
      <div
        className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 overflow-hidden select-none border-b border-emerald-950/20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.66) 45%, rgba(16, 185, 129, 0.25) 100%), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-4 relative z-10 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-mono">
            <span>Corporate Governance</span>
            <ChevronRight size={10} className="text-gray-500" />
            <span className="text-emerald-400 font-medium font-semibold">
              Eco Sustainability
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Sustainability & Green Legacy
          </h1>
          <p className="text-brand-gold text-sm md:text-base uppercase tracking-widest font-semibold">
            Nepal's Pioneer of Resource-Efficient Steel Production
          </p>
          <div className="h-1 w-24 bg-emerald-500 mt-4 mx-auto animate-pulse" />
        </div>
      </div>

       {/* THREE-PILLAR OVERVIEW */}
       <SustainabilityOverview />

        {/* INTERACTIVE ESG CALCULATOR WIDGET */}
        <EstimatedRebar />

        {/* NAVIGABLE ESG TABBED EXPLORER */}
        <SustainabilityActivities />

        {/* HIGHLIGHTS */}
        <Highlights />
    </section>
  );
}

export default SustainabilityView;
