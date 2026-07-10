import { Award, Droplet, Gauge, CheckCircle2, Microscope, ChevronRight, Wind, Flame } from "lucide-react";
import banner from "./public/company/dccc (4).jpg"

const benefits = [
    {
      label: "High Tensile & Yield Strength",
      desc: "Maintains extreme weight and tension loads.",
    },
    {
      label: "Excellent Bendability",
      desc: "Allows simple onsite fabrication without tears.",
    },
    {
      label: "Superior Twist Resistance",
      desc: "Protects critical junctions under extreme shear.",
    },
    {
      label: "Earthquake Tolerance",
      desc: "High flexibility to dissipate cyclic shockwaves.",
    },
    {
      label: "Fire Resistance",
      desc: "Sustains structural margins under intense thermo-stress.",
    },
    {
      label: "Uniform Grade Consistency",
      desc: "Flawless quality across sequential shipments.",
    },
  ];


function MartensiticTooltip({ label = "Martensitic" }: { label?: string }) {
  return (
    <span className="relative group inline-block">
      <span className="border-b-2 border-dotted border-brand-red cursor-help text-brand-black hover:text-[#B8001F] transition-colors font-medium">
        {label}
      </span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 pb-2 w-72 z-50 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 transform scale-95 origin-bottom opacity-0 block">
        <div className="bg-neutral-950 text-white rounded-xs shadow-xl border border-white/10 p-4 text-sm text-left">
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
          <a
            href="/blog"
            className="w-full text-left border-t border-white/10 pt-2 flex items-center justify-between text-[#8F9E75] hover:text-[#A7B88A] font-condensed font-bold uppercase text-[10px] tracking-wider transition-colors"
          >
            <span>Read Engineering Insights</span>
            <ChevronRight size={12} />
          </a>
        </div>
      </span>
    </span>
  );
}

function ManufactureProcess() {
  return (
    <section>
        <div
        id="milling-process-section"
        className="border-t border-brand-border mt-16"
      >
        {/* Process Hero Section */}
        <div
          className="relative bg-neutral-950 text-white py-24 md:py-28 px-4 md:px-8 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              `linear-gradient(to right, rgba(0, 0, 0, 0.65) 45%, rgba(184, 0, 31, 0.25) 100%), url("/company/dccc (34).jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />

          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
            <span className="font-condensed font-bold text-sm tracking-widest bg-brand-red text-white p-2 text-[10px] uppercase inline-block">
              Our Technology
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight uppercase">
              Where Strength Is Engineered
            </h2>
            <p className="font-condensed text-brand-gold text-lg uppercase tracking-widest font-bold">
              Inside the Laxmi Steels Manufacturing Plant
            </p>
            <p className="text-gray-300 font-sans text-sm md:text-sm max-w-2xl mx-auto leading-relaxed">
              Take a technical walkthrough of our automated manufacturing
              facilities in Sunwal-7, Nawalparasi. Discover how state-of-the-art
              machinery and German Thermex quenching process convert raw billets
              into high-safety TMT bars.
            </p>
          </div>
        </div>

        {/* TIMELINE VIEW */}
        <div id="manufacturing" className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 font-sans text-gray-700">
          <div className="relative border-l border-brand-border md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[2px] md:before:bg-brand-border">
            {/* STEP 01 */}
            <div className="mb-16 md:mb-24 relative flex flex-col md:flex-row items-start md:items-center">
              <div className="absolute -left-[16px] md:left-1/2 md:-ml-[16px] z-10 bg-brand-black text-white border-2 border-brand-red p-2 font-mono text-sm w-8 h-8 rounded-full flex items-center justify-center">
                01
              </div>

              <div className="md:w-1/2 pl-8 md:pl-0 md:pr-16 text-left md:text-right">
                <span className="text-sm md:text-sm font-mono font-bold tracking-widest text-[#B8001F] uppercase">
                  Phase 01: Raw Sourcing
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2 mb-3">
                  Prime Quality Billets Selection
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed max-w-lg md:ml-auto">
                  Quality starts at the structural core. Laxmi Steels selects
                  premium liquid-refined steel billets built under strict ISO
                  criteria. This maintains ultra-low levels of unstable
                  micro-impurities (such as sulfur and phosphorus elements),
                  ensuring maximum uniform toughness, complete weldability, and
                  resistance to environmental stress fractures.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2 pr-0 md:pl-16">
                <div className="border border-brand-border bg-white p-6 max-w-md select-none">
                  <span className="font-condensed font-black text-sm text-brand-black uppercase block tracking-wider mb-2">
                    Technical Standards Met
                  </span>
                  <span className="text-sm font-mono text-brand-red block">
                    FE 500 & FE 500D Grade Chemistry
                  </span>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                    Conforming directly to NS-191 & IS-1786 requirements for
                    chemical balance.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 02 */}
            <div className="mb-16 md:mb-24 relative flex flex-col md:flex-row-reverse items-start md:items-center">
              <div className="absolute -left-[16px] md:left-1/2 md:-ml-[16px] z-10 bg-brand-black text-white border-2 border-brand-red p-2 font-mono text-sm w-8 h-8 rounded-full flex items-center justify-center">
                02
              </div>

              <div className="md:w-1/2 pl-8 md:pl-16 text-left">
                <span className="text-sm md:text-sm font-mono font-bold tracking-widest text-[#B8001F] uppercase">
                  Phase 02: Deform Rolling
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2 mb-3">
                  Hot Rolling for Uniform Shape
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed max-w-lg">
                  The massive high-purity billets are heated uniformly up to
                  1200°C inside precision gas furnaces and fed into modern
                  scale-down sequence rolling mills. This stretches the glowing
                  metal into highly accurate nominal diameters from 8mm up to
                  32mm, while rolling cross-rib and longitudinal rib patterns
                  essential for high concrete bonding strength.
                </p>
              </div>
              <div className="hidden md:block md:w-1/2 pl-0 md:pr-16 text-right">
                <div className="border border-brand-border bg-white p-6 max-w-md ml-auto select-none">
                  <span className="font-condensed font-black text-sm text-brand-black uppercase block tracking-wider mb-2">
                    Automated Geometric Controls
                  </span>
                  <span className="text-sm font-mono text-brand-red block">
                    Precision Rib Angles & Spacing
                  </span>
                  <p className="text-sm text-brand-muted mt-1 leading-relaxed">
                    Continuous dimension scanning maintains zero variations in
                    steel unit weight.
                  </p>
                </div>
              </div>
            </div>

            {/* STEP 03: THE THERMEX TREATMENT */}
            <div className="mb-16 md:mb-24 relative flex flex-col md:flex-row items-start md:items-center">
              <div className="absolute -left-[16px] md:left-1/2 md:-ml-[16px] z-10 bg-brand-black text-white border-2 border-brand-red p-2 font-mono text-sm w-8 h-8 rounded-full flex items-center justify-center">
                03
              </div>

              <div className="md:w-1/2 pl-8 md:pl-0 md:pr-16 text-left md:text-right">
                <span className="text-sm md:text-sm font-mono font-bold tracking-widest text-[#B8001F] uppercase">
                  Phase 03: Thermex Quenching
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2 mb-3">
                  German Thermex Technology
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed max-w-lg md:ml-auto">
                  Laxmi Steels is the pioneer of German Thermex-certified
                  quenching inside Nepal. This high-pressure thermo-mechanical
                  treatment happens in micro-managed sequence parameters to
                  sculpt the composite crystal morphology of our TMT bars,
                  producing high yield strength while maintaining excellent core
                  elasticity.
                </p>
              </div>

              <div className="md:w-1/2 pl-8 md:pl-16 pt-6 md:pt-0">
                <div className="space-y-4 max-w-md">
                  <div className="bg-white border border-brand-border hover:border-brand-red p-4 space-y-2 rounded-xs relative shadow-xs transition-colors">
                    <div className="absolute top-2 right-2 bg-brand-red/10 px-2 py-0.5 font-mono text-[9px] font-bold text-brand-red">
                      STAGE A
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-red text-white p-2 rounded-xs mt-0.5 flex-shrink-0">
                        <Droplet size={16} />
                      </div>
                      <div>
                        <h4 className="font-condensed font-bold text-sm tracking-wide text-brand-black uppercase">
                          Rapid Water Quenching
                        </h4>
                        <div className="text-sm text-brand-muted font-sans leading-relaxed mt-1">
                          The glowing 950°C red hot rebar passes through
                          high-pressure spray water jets, cooling the outer skin
                          instantly into a hard{" "}
                          <MartensiticTooltip label="Martensitic" /> layer.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-brand-border hover:border-brand-red p-4 space-y-2 rounded-xs relative shadow-xs transition-colors">
                    <div className="absolute top-2 right-2 bg-brand-red/10 px-2 py-0.5 font-mono text-[9px] font-bold text-brand-red">
                      STAGE B
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-red text-white p-2 rounded-xs mt-0.5 flex-shrink-0">
                        <Flame size={16} />
                      </div>
                      <div>
                        <h4 className="font-condensed font-bold text-sm tracking-wide text-brand-black uppercase">
                          Core Self-Tempering
                        </h4>
                        <p className="text-sm text-brand-muted font-sans leading-relaxed mt-1">
                          Cooling halts and thermal energy stored in the hot
                          internal core flows outwards, annealing the outer
                          martensite ring into a durable tempered martensite
                          state.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-brand-border hover:border-brand-red p-4 space-y-2 rounded-xs relative shadow-xs transition-colors">
                    <div className="absolute top-2 right-2 bg-brand-red/10 px-2 py-0.5 font-mono text-[9px] font-bold text-brand-red">
                      STAGE C
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-brand-red text-white p-2 rounded-xs mt-0.5 flex-shrink-0">
                        <Wind size={16} />
                      </div>
                      <div>
                        <h4 className="font-condensed font-bold text-sm tracking-wide text-brand-black uppercase">
                          Atmospheric Cooling
                        </h4>
                        <p className="text-sm text-brand-muted font-sans leading-relaxed mt-1">
                          The bars cool naturally on massive beds under calm
                          ambient atmospheres, letting the hot active core
                          completely transform into a soft Ferrite-Pearlite
                          crystal lattice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 04 */}
            <div className="mb-16 md:mb-24 relative flex flex-col md:flex-row items-start md:items-center">
              <div className="absolute -left-[16px] md:left-1/2 md:-ml-[16px] z-10 bg-brand-black text-white border-2 border-brand-red p-2 font-mono text-sm w-8 h-8 rounded-full flex items-center justify-center">
                04
              </div>

              <div className="md:w-1/2 pl-8 md:pl-0 md:pr-16 text-left md:text-right">
                <span className="text-sm md:text-sm font-mono font-bold tracking-widest text-[#B8001F] uppercase">
                  Phase 04: Metallurgy benefits
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2 mb-3">
                  Built-In Performance Benefits
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed max-w-lg md:ml-auto">
                  Because we match high raw billet standards with genuine
                  Thermex water pressure cooling indexes, our completed bars
                  present superior physical qualities that exceed standard steel
                  grades. These qualities safeguard structures against concrete
                  failures.
                </p>
              </div>

              <div className="md:w-1/2 pl-8 md:pl-16 pt-6 md:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-brand-border p-3.5 rounded-xs text-left"
                    >
                      <h5 className="font-condensed font-bold text-sm uppercase text-brand-black mb-1">
                        {item.label}
                      </h5>
                      <p className="text-sm text-brand-muted font-sans leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STEP 05 */}
            <div className="mb-6 relative flex flex-col md:flex-row-reverse items-start md:items-center">
              <div className="absolute -left-[16px] md:left-1/2 md:-ml-[16px] z-10 bg-brand-black text-white border-2 border-brand-red p-2 font-mono text-sm w-8 h-8 rounded-full flex items-center justify-center">
                05
              </div>

              <div className="md:w-1/2 pl-8 md:pl-16 text-left">
                <span className="text-sm md:text-sm font-mono font-bold tracking-widest text-[#B8001F] uppercase">
                  Phase 05: Quality audit
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-black mt-2 mb-3">
                  Strict Quality Control & Inspection
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed max-w-lg">
                  We believe quality should be verified through testing, never
                  assumed. Every single batch is tracked via computer catalog
                  logs. Before shipping across Nepal, our on-site laboratories
                  run rigorous micro-structural, bend-back, yield-stress, and
                  nominal mass tests on random rebar cuts.
                </p>
              </div>

              <div className="md:w-1/2 pl-8 md:pl-0 pr-0 md:pr-16 pt-6 md:pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white border border-brand-border p-4 text-center rounded-xs hover:border-brand-red transition-all shadow-xs">
                    <Gauge size={22} className="text-brand-red mx-auto mb-2" />
                    <span className="font-condensed font-bold uppercase text-sm text-brand-black block">
                      Dimensional Accuracy
                    </span>
                  </div>
                  <div className="bg-white border border-brand-border p-4 text-center rounded-xs hover:border-brand-red transition-all shadow-xs">
                    <Microscope
                      size={22}
                      className="text-brand-red mx-auto mb-2"
                    />
                    <span className="font-condensed font-bold uppercase text-sm text-brand-black block">
                      Mechanical Testing
                    </span>
                  </div>
                  <div className="bg-white border border-brand-border p-4 text-center rounded-xs hover:border-brand-red transition-all shadow-xs">
                    <CheckCircle2
                      size={22}
                      className="text-brand-red mx-auto mb-2"
                    />
                    <span className="font-condensed font-bold uppercase text-sm text-brand-black block">
                      Surface Inspection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TMT BAR CSS INTERACTIVE ANATOMY DIAGRAM */}
          <div className="mt-16 bg-brand-black text-white p-6 md:p-10 rounded-sm flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-14 select-none relative z-10 shadow-lg">
            <div className="w-56 h-56 rounded-full border border-dashed border-brand-gold/40 flex items-center justify-center relative flex-shrink-0 bg-gradient-to-br from-neutral-900 to-brand-nearblack shadow-2xl overflow-visible">
              <div className="w-44 h-44 rounded-full border-4 border-[#B8001F] bg-[#B8001F]/10 flex items-center justify-center relative shadow-[0_0_15px_rgba(184,0,31,0.2)] overflow-visible">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-[#B8001F] font-bold uppercase tracking-widest bg-brand-black px-2.5 py-0.5 rounded border border-[#B8001F]/30 shadow-md whitespace-nowrap z-10">
                  Tempered Martensite
                </span>
                <div className="w-28 h-28 rounded-full border-2 border-brand-gold/60 bg-brand-gold/5 flex items-center justify-center relative overflow-visible">
                  <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 text-[10px] font-mono text-brand-gold font-bold uppercase tracking-widest bg-brand-black px-2.5 py-0.5 rounded border border-brand-gold/30 shadow-md whitespace-nowrap z-10">
                    Transition Zone
                  </span>
                  <div className="w-16 h-16 rounded-full bg-brand-sand/15 border border-white/20 flex flex-col items-center justify-center shadow-inner relative overflow-visible">
                    <span className="text-[10px] text-center font-black leading-tight text-white uppercase tracking-wider font-mono px-2 py-0.5 bg-neutral-900 rounded border border-white/10 shadow-sm whitespace-nowrap">
                      Ferrite Core
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 max-w-xl text-left">
              <div className="flex items-center gap-2">
                <Award size={18} className="text-brand-gold" />
                <span className="font-condensed font-bold uppercase text-sm tracking-wider text-brand-gold">
                  Micro-structural Blueprint Map
                </span>
              </div>
              <h4 className="font-serif text-xl md:text-2xl font-extrabold text-white">
                The Anatomy of a Laxmi TMT Bar
              </h4>
              <p className="text-sm text-gray-300 font-sans leading-relaxed">
                This schematic cuts through our Thermo-Mechanically Treated
                wire. The outer tempered layer delivers unmatched structural
                resistance to high tensile and yield forces. Meanwhile, the core
                retains highly elastic, ductile microstructures to absorb
                earthquake vibration parameters. This dual structural anatomy
                defines true Thermex quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManufactureProcess