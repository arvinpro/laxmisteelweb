import { Layers, ArrowRight, Construction, HardHat} from "lucide-react";
import Link from "next/link";

function Products() {
  return (
    <section>
       <div 
                className="bg-[#f5f3ee] border-b border-brand-border/70 py-16 md:py-24 px-4 md:px-8 select-none text-brand-black"
              >
                <div className="max-w-7xl mx-auto space-y-12">
                  <div className="text-center max-w-xl mx-auto space-y-2">
                    <span className="text-[#B8001F] text-xs font-mono font-semibold uppercase tracking-[0.2em] block mb-1">
                      Our Catalog
                    </span>
                    <h2 className="font-serif text-2xl md:text-4xl font-normal text-brand-black tracking-tight">Our Premium Products</h2>
                    <p className="text-xs text-brand-muted font-sans font-light">Discover engineered steel products, calibrated for precise loading demands.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1 */}
                    <div className="border border-brand-border bg-white rounded-xs overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-brand-red group">
                      <div>
                        {/* Image frame */}
                        <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                          <img 
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                            alt="TMT Steel Bars" 
                            className="w-full h-full object-cover grayscale contrast-[110%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                            referrerPolicy="no-referrer"
                          />
                          {/* Tags / Badges */}
                          <div className="absolute top-3 left-3 bg-[#B8001F] text-white text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase font-bold">
                            Thermex FE 500D
                          </div>
                          <div className="absolute bottom-3 right-3 bg-brand-black/80 text-brand-gold p-2 border border-brand-gold/30">
                            <Layers size={18} />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="p-6 md:p-8 space-y-3">
                          <h4 className="font-black text-lg uppercase tracking-wide text-brand-black group-hover:text-brand-red transition-colors">
                            TMT Steel Bars (FE 500 / 500D)
                          </h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-sans">
                            High yield strength reinforcement rods treated with Thermex quenching. Possesses supreme mechanical ductility, ideal for earthquake resilience.
                          </p>
                        </div>
                      </div>

                      {/* Button with black faded overlay */}
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 relative">
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                        <Link
                          href={"/product?tab=fe-500/500D"}
                          className="relative w-full py-3 px-4 font-bold uppercase tracking-widest text-xs text-white overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 hover:from-brand-red hover:to-[#9E0016] border border-neutral-800 transition-all duration-350 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-brand-border bg-white rounded-xs overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-brand-red group">
                      <div>
                        {/* Image frame */}
                        <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                          <img 
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                            alt="4.75mm Cold Ribbed Wire" 
                            className="w-full h-full object-cover grayscale contrast-[110%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                            referrerPolicy="no-referrer"
                          />
                          {/* Tags / Badges */}
                          <div className="absolute top-3 left-3 bg-[#B8001F] text-white text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase font-bold">
                            High Adhesion
                          </div>
                          <div className="absolute bottom-3 right-3 bg-brand-black/80 text-brand-gold p-2 border border-brand-gold/30">
                            <Construction size={18} />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="p-6 md:p-8 space-y-3">
                          <h4 className="font-black text-lg uppercase tracking-wide text-brand-black group-hover:text-brand-red transition-colors">
                            4.75mm Cold Ribbed Wire
                          </h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-sans">
                            Cold-drawn indentation mesh wiring, providing accurate structural concrete adhesion for lightweight slabs, flooring overlays, and pipes.
                          </p>
                        </div>
                      </div>

                      {/* Button with black faded overlay */}
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 relative">
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                        <Link
                          href={"/product?tab=ribbed"}
                          className="relative w-full py-3 px-4 font-bold uppercase tracking-widest text-xs text-white overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 hover:from-brand-red hover:to-[#9E0016] border border-neutral-800 transition-all duration-350 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-brand-border bg-white rounded-xs overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-brand-red group">
                      <div>
                        {/* Image frame */}
                        <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                          <img 
                            src="https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800" 
                            alt="High-Tensile Binding Wire" 
                            className="w-full h-full object-cover grayscale contrast-[110%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 brightness-90 group-hover:brightness-100"
                            referrerPolicy="no-referrer"
                          />
                          {/* Tags / Badges */}
                          <div className="absolute top-3 left-3 bg-[#B8001F] text-white text-[9px] font-mono tracking-widest px-2.5 py-1 uppercase font-bold">
                            Oxygen-Free Annealed
                          </div>
                          <div className="absolute bottom-3 right-3 bg-brand-black/80 text-brand-gold p-2 border border-brand-gold/30">
                            <HardHat size={18} />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="p-6 md:p-8 space-y-3">
                          <h4 className="font-black text-lg uppercase tracking-wide text-brand-black group-hover:text-brand-red transition-colors">
                            High-Tensile Binding Wire
                          </h4>
                          <p className="text-xs text-brand-muted leading-relaxed font-sans">
                            Oxygen-free annealed drawing wire, ensuring absolute knot strength to lock reinforcement rebar structures before pouring concrete block cages.
                          </p>
                        </div>
                      </div>

                      {/* Button with black faded overlay */}
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 relative">
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                        <Link
                          href={"/product?tab=binding"}
                          className="relative w-full py-3 px-4 font-bold uppercase tracking-widest text-xs text-white overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 hover:from-brand-red hover:to-[#9E0016] border border-neutral-800 transition-all duration-350 shadow-md flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                        >
                          <span>Explore Specs</span>
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
    </section>
  )
}

export default Products