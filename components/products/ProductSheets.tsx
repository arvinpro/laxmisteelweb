"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Info, Check, Award, Layers, ShieldAlert, Workflow, Hammer, Building2, Grid3X3, Anchor, Zap} from "lucide-react";
import DataTable from "./DataTable";
import HighLevelBusinessComp from "./HighLevelBusinessComp";
import { useSearchParams } from "next/navigation";

function MartensiticTooltip({ label = "Martensitic" }: { label?: string }) {
  return (
    <span className="relative group inline-block">
      <span className="border-b-2 border-dotted border-brand-red cursor-help text-brand-black hover:text-[#B8001F] transition-colors font-medium">
        {label}
      </span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 w-72 z-50 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 transform scale-95 origin-bottom opacity-0 block">
        <div className="bg-neutral-950 text-white rounded-xs shadow-xl border border-white/10 p-4 text-xs text-left">
          <span className="font-mono text-[#8F9E75] text-[10px] tracking-widest uppercase block mb-1 font-bold">
            METALLURGICAL DEFINITION
          </span>
          <span className="font-serif text-sm font-bold text-white block mb-1.5 uppercase">
            Martensite Structure
          </span>
          <div className="text-gray-300 font-sans text-[11px] leading-relaxed mb-3">
            A hard, high-strength crystalline steel microstructure formed on the
            outer layer of TMT bars through rapid Thermex water-quenching. It
            provides superb tensile resistance while a ductile ferrite-pearlite
            core remains core-intact.
          </div>        
        </div>
      </span>
    </span>
  );
}

function ProductSheets() {
    const [activeTab, setActiveTab] = useState<"tmt" | "ribbed" | "binding">(
        "tmt"
      );

        const searchParams = useSearchParams();
      
        useEffect(() => {
          const tab = searchParams.get("tab");
          if (tab === "ribbed") {
            setActiveTab("ribbed");
            setSelectedProductCategory("4.75mm Cold Ribbed Wire");
          } else if (tab === "binding") {
            setActiveTab("binding");
            setSelectedProductCategory("High-Tensile Annealed Binding Wire");
          } else if (tab === "tmt") {
            setActiveTab("tmt");
            setSelectedProductCategory("FE 500 TMT Steel Bars");
          }
      
          if (tab) {
            setTimeout(() => {
              const section = document.getElementById("product-content");
              if (section) {
                const offset = 80; // accounts for the sticky navbar + tab bar height
                const top =
                  section.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }, 150);
          }
        }, [searchParams]);
      
        const [quoteProduct, setQuoteProduct] = useState<string | null>(null);
        const [selectedProductCategory, setSelectedProductCategory] =
          useState<string>("FE 500 TMT Steel Bars");
      
        const sizes = [
          "8mm",
          "10mm",
          "12mm",
          "16mm",
          "20mm",
          "22mm",
          "25mm",
          "28mm",
          "32mm",
        ];
    
  return (
    <section>
        {/* STICKY TAB WIDGET */}
      <div className="bg-brand-nearblack sticky top-[68px] z-30 border-b border-brand-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center py-1">
          <div className="flex bg-brand-black/80 rounded-sm p-1.5 border border-white/5 w-full md:w-auto my-3 gap-2">
            <button
              onClick={() => {
                setActiveTab("tmt");
                setQuoteProduct(null);
                setSelectedProductCategory("FE 500D TMT Steel Bars");
              }}
              className={`flex-1 md:flex-initial px-6 py-3 font-condensed font-bold text-xs uppercase tracking-widest transition-all cursor-pointer focus:outline-none block select-none ${
                activeTab === "tmt"
                  ? "bg-brand-red text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              TMT Steel Bars (FE 500 / 500D)
            </button>
            <button
              onClick={() => {
                setActiveTab("ribbed");
                setQuoteProduct(null);
                setSelectedProductCategory("4.75mm Cold Ribbed Wire");
              }}
              className={`flex-1 md:flex-initial px-6 py-3 font-condensed font-bold text-xs uppercase tracking-widest transition-all cursor-pointer focus:outline-none block select-none ${
                activeTab === "ribbed"
                  ? "bg-brand-red text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              4.75mm Ribbed Wire
            </button>
            <button
              onClick={() => {
                setActiveTab("binding");
                setQuoteProduct(null);
                setSelectedProductCategory(
                  "High-Tensile Annealed Binding Wire"
                );
              }}
              className={`flex-1 md:flex-initial px-6 py-3 font-condensed font-bold text-xs uppercase tracking-widest transition-all cursor-pointer focus:outline-none block select-none ${
                activeTab === "binding"
                  ? "bg-brand-red text-white shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Binding Wire
            </button>
          </div>
        </div>
      </div>

      {/* PRODUCT SHEETS MAIN */}
      <div
        id="product-content"
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20"
      >
        {activeTab === "tmt" && (
          <div key="tmt-pane" className="space-y-16">
            {/* Product Intro */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="font-serif text-3xl font-extrabold text-brand-black">
                Thermex High-Ductility TMT Rebars
              </h2>
              <div className="text-brand-muted font-sans text-sm md:text-base leading-relaxed">
                Our TMT (Thermo-Mechanically Treated) reinforcement bars are
                engineered using licensed German Thermex technology. This yields
                rebars with a rugged, wear-resistant outer{" "}
                <MartensiticTooltip label="martensitic" /> ring coupled with a
                tough, self-tempered ferrite-pearlite core—delivering the high
                flex and tensile capacities required to safely absorb seismic
                movements in Nepal.
              </div>
            </div>

            {/* TWO SUB-PRODUCT CARDS SIDE-BY-SIDE */}
            <div id="fe-500/500D" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* CARD A: FE 500 */}
              <div className="bg-white border border-brand-border/80 rounded-sm overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow relative">
                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-condensed font-semibold text-[10px] tracking-widest bg-brand-black/5 text-brand-black px-2 py-0.5 uppercase">
                        Standard Grade
                      </span>
                      <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2">
                        FE 500 TMT Steel Bars
                      </h3>
                    </div>
                    <div className="bg-brand-black text-white px-3 py-1 font-mono text-xs font-semibold">
                      Fe 500
                    </div>
                  </div>

                  <p className="text-brand-muted text-sm font-sans">
                    Our flagship commercial product designed for high-strength
                    application in conventional RCC structures throughout urban
                    housing projects.
                  </p>

                  {/* Size widget */}
                  <div className="space-y-2">
                    <h4 className="font-condensed font-bold text-xs uppercase tracking-wider text-brand-black">
                      Available Nominal Sizes:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {sizes.map((size) => (
                        <span
                          key={size}
                          className="bg-brand-sand border border-brand-border text-brand-black text-xs font-mono px-2.5 py-1"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description Detail */}
                  <div className="bg-brand-sand p-4 border`l-2 border-brand-black">
                    <p className="text-xs text-brand-black font-sans font-medium mb-1 flex items-center gap-1.5">
                      <Info size={14} className="text-brand-red" />
                      <span>What is Fe 500?</span>
                    </p>
                    <p className="text-xs text-brand-muted font-sans font-normal leading-relaxed">
                      Features a minimum guaranteed yield strength of 500
                      Newtons per square millimeter (MPa). Delivers robust
                      carbon consistency and load capacity.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-condensed font-bold text-xs uppercase tracking-wider text-brand-black">
                      Key Project Benefits:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-brand-muted font-sans">
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          High Load Capacity — Perfect for conventional slabs,
                          beams, columns, and deep pile footings.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          Strict Ribbed Profile — Angled helical rib
                          configurations ensure high-strength bond grip with
                          concrete.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          Reliable Durability — Resists degradation and
                          weathering when embedded inside dense alkaline
                          concrete.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          Optimal Workability — Easy to cut, shape, and weld
                          using conventional tools.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Best used for */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-condensed font-bold text-xs uppercase tracking-wider text-brand-black">
                      Best Suited For:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans text-brand-black font-medium">
                      <div className="bg-brand-sand p-2 rounded-xs">
                        ✓ Private Residential Houses
                      </div>
                      <div className="bg-brand-sand p-2 rounded-xs">
                        ✓ Medium-Rise Offices
                      </div>
                      <div className="bg-brand-sand p-2 rounded-xs">
                        ✓ Commercial Warehouses
                      </div>
                      <div className="bg-brand-sand p-2 rounded-xs">
                        ✓ Retaining Slabs
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD B: FE 500D */}
              <div className="bg-white border-2 border-brand-red rounded-sm overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow relative">
                {/* Recommended badge */}
                <div className="absolute top-0 right-0 bg-brand-red text-white px-4 py-1.5 font-condensed font-extrabold text-[10px] tracking-widest uppercase rounded-bl-sm flex items-center gap-1">
                  <Award size={12} className="text-brand-gold animate-pulse" />
                  <span>RECOMMENDED FOR EARTHQUAKE SAFETY</span>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-condensed font-bold text-[10px] tracking-widest text-brand-red uppercase">
                        Premium Ductility Grade
                      </span>
                      <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2">
                        FE 500D TMT Steel Bars
                      </h3>
                    </div>
                  </div>

                  <p className="text-brand-muted text-sm font-sans pt-1">
                    Our elite-tier infrastructure steel rebar. Processed with
                    meticulous thermal quenching parameters for critical safety
                    margins.
                  </p>

                  {/* Size widget */}
                  <div className="space-y-2">
                    <h4 className="font-condensed font-bold text-xs uppercase tracking-wider text-brand-black">
                      Available Nominal Sizes:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {sizes.map((size) => (
                        <span
                          key={size}
                          className="bg-brand-red/5 border border-brand-red/20 text-brand-red font-mono text-xs px-2.5 py-1"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description Detail */}
                  <div className="bg-brand-red/5 p-4 border-l-2 border-brand-red">
                    <p className="text-xs text-brand-red font-sans font-semibold mb-1 flex items-center gap-1.5">
                      <ShieldAlert
                        size={14}
                        className="text-brand-red focus:outline-none"
                      />
                      <span>Why "D" stands for Ductility:</span>
                    </p>
                    <p className="text-xs text-brand-muted font-sans font-normal leading-relaxed">
                      Fe 500D guarantees the same 500 MPa strength limits but
                      mandates far lower levels of volatile sulfur/phosphorus.
                      This elevates elongation to over 16%, allowing structures
                      to twist and displace without stress-fracturing.
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-condensed font-bold text-xs uppercase tracking-wider text-brand-black">
                      Key Safety Benefits:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-brand-muted font-sans">
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span className="text-brand-black font-semibold">
                          Exemplary Seismic Resistance — Withstands repetitive
                          ground waves under intense cyclic shear loads limit.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          Advanced Bendability — Can be bent to acute angles (3d
                          mandrel size guidelines) without outer fiber
                          micro-cracking.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          Superior Elongation — Extends visible sags and
                          warnings during masonry overload rather than
                          collapsing cleanly.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check
                          size={14}
                          className="text-brand-red flex-shrink-0 mt-0.5"
                        />
                        <span>
                          Ultra-Pure Chemistry — Resists low temperature
                          cracking, ideal for high altitude projects in northern
                          Nepal.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Best used for */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-condensed font-bold text-xs uppercase tracking-wider text-brand-black">
                      Mandatory For:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs font-sans text-brand-black font-semibold">
                      <div className="bg-brand-red/5 p-2 rounded-xs text-brand-red">
                        ✓ National Bridges & Highways
                      </div>
                      <div className="bg-brand-red/5 p-2 rounded-xs text-brand-red">
                        ✓ Hydropower Penstocks
                      </div>
                      <div className="bg-brand-red/5 p-2 rounded-xs text-brand-red">
                        ✓ High-Rise Commercial Complexes
                      </div>
                      <div className="bg-brand-red/5 p-2 rounded-xs text-brand-red">
                        ✓ Modern Earthquake-Proof Homes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HIGH LEVEL BUSINESS COMPARISON */}
            <HighLevelBusinessComp />

            {/* COMPARISON DATA TABLE */}
            <DataTable />
          </div>
        )}

        {activeTab === "ribbed" && (
          <div id="ribbed" key="ribbed-pane">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs tracking-widest text-brand-red uppercase font-semibold">
                  Product Classification: Special Construction Wire
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-black">
                  Laxmi 4.75mm Cold Ribbed Wire
                </h2>
                <p className="text-brand-muted text-base font-sans leading-relaxed">
                  Cold ribbed wire is a highly functional specialized metal
                  reinforcement. Rolled accurately from high-strength wire rods,
                  our 4.75mm ribbed wire features specialized continuous
                  indentation indentations to reinforce lightweight concrete
                  structures, precast slabs, and industrial floors.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-brand-black border-l-2 border-brand-red pl-2.5">
                  Key Performance Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans text-brand-muted">
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Excellent Concrete Adhesion
                    </strong>
                    Continuous ribbed indentation profile maximizes localized
                    friction, ensuring mortar binds securely around the wire
                    core.
                  </div>
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Controlled Dimensions
                    </strong>
                    Processed with strict cold-rolling tooling. Standardized
                    exactly to a 4.75mm diameter with extremely low toll
                    variance.
                  </div>
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Premium Weldability
                    </strong>
                    Optimized chemical carbon composition allows on-site welding
                    or custom fabric pre-assembly without compromising steel
                    joints.
                  </div>
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Reduced Cost Excess
                    </strong>
                    Replaces heavier steel structural meshes in thinner
                    non-structural overlays, conserving bulk material costs.
                  </div>
                </div>
              </div>

              {/* Common Uses */}
              <div className="space-y-4">
                <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-brand-black border-l-2 border-brand-red pl-2.5">
                  Common Structural Uses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Layers size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Precast Pipe Systems
                    </span>
                  </div>
                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Anchor size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Pre-stressed Slabs
                    </span>
                  </div>
                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Zap size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Welded Wire Fabric
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "binding" && (
          <div id="binding" key="binding-pane">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs tracking-widest text-brand-red uppercase font-semibold">
                  Product Classification: Binding Steel Wire
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-black">
                  High-Tensile Annealed Binding Wire
                </h2>
                <p className="text-brand-muted text-base font-sans leading-relaxed">
                  Binding wire holds the reinforcement steel bars in place until
                  concrete is poured. Laxmi Steels Binding Wire is annealed
                  systematically under precise oxygen-free furnace parameters to
                  deliver high ductility matched with structural knot strength.
                </p>
              </div>

              {/* The skeleton analogy box */}
              <div className="bg-brand-sand border-l-4 border-brand-red p-5">
                <h4 className="font-condensed font-bold text-sm tracking-wide text-brand-black uppercase mb-1">
                  The Analogy: Binding the Skeleton of Your Home
                </h4>
                <p className="text-xs text-brand-muted font-sans leading-relaxed">
                  "Binding wire is what keeps the steel skeleton tight and fixed
                  before concrete is poured. If poor, brittle wires break, the
                  structural rebars displace under the heavy load of falling
                  liquid concrete, resulting in off-center column cores that
                  reduce structural load limits."
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-brand-black border-l-2 border-brand-red pl-2.5">
                  Key Technical Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans text-brand-muted">
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Outstanding Softness & Flexibility
                    </strong>
                    Processed under custom thermal heat-cycles to verify easy
                    twisting and knot binding without using excess power.
                  </div>
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Excellent Knot Grip
                    </strong>
                    Once tied, our wires keep a steady, high-tension locks with
                    zero risk of loosening during heavy construction operations.
                  </div>
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Uniform Thick Profile
                    </strong>
                    Ensures consistent gauge, with zero weak points along the
                    coil structure.
                  </div>
                  <div className="bg-white border border-brand-border p-4 rounded-xs">
                    <strong className="text-brand-black block text-sm mb-1 uppercase font-condensed">
                      Oxidation Guard Layer
                    </strong>
                    High quality thermal chemical treatment provides higher
                    natural resistance to surface rust during rain delays.
                  </div>
                </div>
              </div>

              {/* Common Uses */}
              <div className="space-y-4">
                <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-brand-black border-l-2 border-brand-red pl-2.5">
                  Common Wire Tying Operations
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Grid3X3 size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Tying Slabs Mesh
                    </span>
                  </div>

                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Building2 size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Column Cage Fixing
                    </span>
                  </div>

                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Hammer size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Foundation Grid Work
                    </span>
                  </div>

                  <div className="border bg-white border-brand-border p-3.5 rounded-sm flex items-center gap-2.5">
                    <Workflow size={18} className="text-brand-red" />
                    <span className="text-xs font-semibold text-brand-black">
                      Beam Shear Stirrups
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductSheets