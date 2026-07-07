import { ShieldCheck, Droplets, Sprout } from "lucide-react";

function SustainabilityOverview() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Carbon Footprint */}
          <div className="bg-white border border-brand-border/80 rounded-sm p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#B8001F]/5 p-3.5 rounded-sm inline-block">
              <Sprout className="text-[#B8001F]" size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-black">
              Lower CO2 Emissions
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              By utilizing sustainable local scrap streams coupled with
              high-efficiency recuperator furnaces, Laxmi Steels maintains a
              significantly lower carbon footprint than regional blast-furnace
              imports.
            </p>
            <div className="pt-2 border-t border-brand-border/40 flex justify-between items-center text-xs font-mono text-brand-muted">
              <span>Primary Process</span>
              <span className="text-[#B8001F] font-bold">
                Thermex Optimized
              </span>
            </div>
          </div>

          {/* Card 2: Water Closed Loop */}
          <div className="bg-white border border-brand-border/80 rounded-sm p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-500/5 p-3.5 rounded-sm inline-block">
              <Droplets className="text-emerald-500" size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-black">
              Closed-Loop Recycling
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              We conserve Nepal's pristine water resources. Our Sunwal facility
              loops 95% of its manufacturing water back into operations after
              advanced sediment separation and dual sand filters.
            </p>
            <div className="pt-2 border-t border-brand-border/40 flex justify-between items-center text-xs font-mono text-brand-muted">
              <span>Recycle Rate</span>
              <span className="text-emerald-600 font-bold">95% Recycled</span>
            </div>
          </div>

          {/* Card 3: Quality Standard */}
          <div className="bg-white border border-brand-border/80 rounded-sm p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#D4A017]/5 p-3.5 rounded-sm inline-block">
              <ShieldCheck className="text-[#D4A017]" size={24} />
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-black">
              Life-Cycle Integrity
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              High ductility steel lasts significantly longer under dynamic load
              stress, meaning structures require less frequent rebuild and
              reinforcement, saving raw resources across generations.
            </p>
            <div className="pt-2 border-t border-brand-border/40 flex justify-between items-center text-xs font-mono text-brand-muted">
              <span>Longevity Core</span>
              <span className="text-[#D4A017] font-bold">
                Seismic Optimized
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilityOverview;
