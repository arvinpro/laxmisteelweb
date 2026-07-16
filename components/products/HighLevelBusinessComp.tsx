import { Award, ChevronRight} from "lucide-react";

function HighLevelBusinessComp() {
  return (
    <section>
        <div className="bg-brand-sand border border-brand-border p-6 md:p-10 rounded-sm space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-[#B8001F]" />
                  <h4 className="font-condensed font-extrabold text-sm tracking-wider uppercase text-brand-black">
                    High-Level Business & Project Comparison (500 vs 500D)
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-brand-border/60 p-4 rounded-xs space-y-2">
                    <h5 className="font-condensed font-bold text-[11px] text-[#B8001F] uppercase tracking-wide">
                      1. Project Cost Dynamics
                    </h5>
                    <div className="space-y-1.5 text-sm text-brand-muted font-sans leading-relaxed">
                      <p>
                        <strong className="text-brand-black">FE 500:</strong>{" "}
                        Baseline budget pricing, saving approximately 2-3% on
                        initial raw rebar purchase value.
                      </p>
                      <p>
                        <strong className="text-brand-black">FE 500D:</strong>{" "}
                        Minor cost premium (2-4%), but high ductility limits
                        allow designers/engineers to optimize detailing
                        ratios—often reducing global tonnage requirements by up
                        to 10%.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-brand-border/60 p-4 rounded-xs space-y-2">
                    <h5 className="font-condensed font-bold text-[11px] text-[#B8001F] uppercase tracking-wide">
                      2. Risk & Asset Valuation
                    </h5>
                    <div className="space-y-1.5 text-sm text-brand-muted font-sans leading-relaxed">
                      <p>
                        <strong className="text-brand-black">FE 500:</strong>{" "}
                        Standard code compliance. Better suited for non-seismic
                        secondary reinforcement or low-density layouts.
                      </p>
                      <p>
                        <strong className="text-brand-black">FE 500D:</strong>{" "}
                        Strategic hazard hedge. Preserves residential property
                        resale value, shields absolute equity, and protects
                        family life during earthquakes.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white border border-brand-border/60 p-4 rounded-xs space-y-2">
                    <h5 className="font-condensed font-bold text-[11px] text-[#B8001F] uppercase tracking-wide">
                      3. Structural Workability
                    </h5>
                    <div className="space-y-1.5 text-sm text-brand-muted font-sans leading-relaxed">
                      <p>
                        <strong className="text-brand-black">FE 500:</strong>{" "}
                        Standard bending margins. Higher risk of surface
                        micro-tears during rigorous on-site re-bending cycles.
                      </p>
                      <p>
                        <strong className="text-brand-black">FE 500D:</strong>{" "}
                        Meticulous chemical control restricts trace impurities.
                        Yields superior fatigue resistance and error-free
                        on-site structural welding.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
                  <span className="text-brand-muted font-sans">
                    Want to see complete metallurgical test statistics, carbon
                    chemistry specs, and deep structural parameters?
                  </span>
                  <a
                    href="/blog/fe-500-vs-fe-500d"
                    className="bg-brand-black hover:bg-[#B8001F] text-white py-2 px-4 uppercase font-condensed font-bold tracking-widest text-[10px] transition-colors focus:outline-none cursor-pointer flex items-center justify-center gap-1.5 self-start sm:self-center"
                  >
                    <span>Read Fe 500 vs Fe 500D Comparison</span>
                    <ChevronRight size={12} />
                  </a>
                </div> */}
              </div>
            </div>
    </section>
  )
}

export default HighLevelBusinessComp