"use client";



import { useState } from "react";
import { Zap, TreeDeciduous, Droplets} from "lucide-react";

function EstimatedRebar() {
      const [tonnage, setTonnage] = useState<number>(50);
        const co2Saved = (tonnage * 1000 * 0.35).toFixed(0); 
  const equivalentTrees = (parseFloat(co2Saved) / 22).toFixed(0);
  const waterSavedLiters = (tonnage * 350).toFixed(0);
  return (
    <section>
        <div 
        className="relative bg-neutral-950 text-white py-16 px-4 md:px-8 border-y border-emerald-950/20 bg-cover bg-center"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(17, 17, 17, 0.65), rgba(17, 17, 17, 0.93)), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-emerald-950/5 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-3">
            <span className="text-brand-skytext text-sm font-mono font-medium uppercase tracking-[0.2em] block mb-1">
              Specifier Simulator
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-normal text-white">
              Laxmi Green-Steel Estimator
            </h2>
            <p className="text-sm text-gray-400 font-sans max-w-xl mx-auto">
              Drag the slider to input the required rebar tonnage for your home or project, and evaluate the environmental savings realized by choosing eco-optimized Laxmi Steel instead of generic imports.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-sm p-6 md:p-8 space-y-8 select-none">
            {/* Slider Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-mono">
                <span className="text-gray-300">ESTIMATED REBAR TONNAGE:</span>
                <span className="text-[#D4A017] font-bold text-lg">{tonnage} Tons</span>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min="5"
                  max="1000"
                  step="5"
                  value={tonnage}
                  onChange={(e) => setTonnage(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#B8001F]"
                />
                <div className="flex justify-between text-[14px] text-gray-500 font-mono mt-1 pt-1">
                  <span>5 Tons (Home foundation)</span>
                  <span>500 Tons (Bridges/Infra)</span>
                  <span>1000 Tons (Mega Hydro)</span>
                </div>
              </div>
            </div>

            {/* Savings Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
              
              {/* Metric 1 */}
              <div className="bg-white/5 p-5 rounded-xs border border-white/5 text-center space-y-2">
                <div className="flex justify-center text-red-400">
                  <Zap size={20} />
                </div>
                <div className="font-mono text-3xl font-bold tracking-tight text-white">
                  {parseFloat(co2Saved).toLocaleString()} <span className="text-sm font-light text-gray-400">kg</span>
                </div>
                <div className="text-[14px] text-gray-400 uppercase tracking-widest font-mono">
                  Carbon Dioxide Saved
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-white/5 p-5 rounded-xs border border-white/5 text-center space-y-2">
                <div className="flex justify-center text-emerald-400">
                  <TreeDeciduous size={20} />
                </div>
                <div className="font-mono text-3xl font-bold tracking-tight text-white">
                  {parseFloat(equivalentTrees).toLocaleString()} <span className="text-sm font-light text-gray-400">Trees</span>
                </div>
                <div className="text-[14px] text-gray-400 uppercase tracking-widest font-mono">
                  Tree Carbon Equilibrium
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-white/5 p-5 rounded-xs border border-white/5 text-center space-y-2">
                <div className="flex justify-center text-sky-400">
                  <Droplets size={20} />
                </div>
                <div className="font-mono text-3xl font-bold tracking-tight text-white">
                  {parseFloat(waterSavedLiters).toLocaleString()} <span className="text-sm font-light text-gray-400">Liters</span>
                </div>
                <div className="text-[14px] text-gray-400 uppercase tracking-widest font-mono">
                  Potable Water Conserved
                </div>
              </div>

            </div>

            <div className="text-[14px] text-gray-400 text-center leading-relaxed italic font-sans max-w-md mx-auto">
              *Savings computed relative to blast-furnace coal-based rebar imports into Nepal. We are proud of our ongoing modernization journey to support regional environmental responsibility.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EstimatedRebar