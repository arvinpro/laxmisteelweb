

import { ArrowRight } from "lucide-react";
import Link from "next/link";

function StrengthSection() {
  return (
    <section>
      <div 
                className="bg-[#F5F3EE] py-16 md:py-24 border-b border-brand-border/70"
              >
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-brand-black">
                  <div className="lg:col-span-5 hidden lg:block">
                    <div className="bg-brand-darksky p-8 text-white max-w-sm rounded-xs border border-brand-skyaccent/30 space-y-4 shadow-xl">
                      <span className="font-mono text-xs text-brand-skytext font-bold block">Sunwal Rolling Mill Complex</span>
                      <h3 className="font-serif text-lg font-bold">Quenching is a science, not a guess.</h3>
                      <p className="text-xs text-stone-300 font-sans leading-relaxed">
                        We track furnace temperatures carefully to achieve the perfect ferrite-pearlite core ratio, delivering high elastic ductility that prevents structural cracking during earthquakes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-7 space-y-6 text-xs md:text-sm">
                    <span className="text-xs uppercase font-black tracking-widest text-brand-red border-b border-brand-red/35 pb-2 inline-block">
                      Where Strength is Engineered
                    </span>
                    
                    <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-brand-black uppercase">From Billets to TMT Bars</h3>
                    
                    <div className="space-y-4 font-sans text-brand-muted">
                      <div className="flex gap-3 leading-normal">
                        <span className="font-mono font-bold text-brand-red text-sm">01.</span>
                        <p><strong>Prime Billet Selection:</strong> Low impurity, refined raw casts compliant completely with chemical carbon quotas.</p>
                      </div>
                      <div className="flex gap-3 leading-normal">
                        <span className="font-mono font-bold text-brand-red text-sm">02.</span>
                        <p><strong>Deform Rolling:</strong> Custom heat treatment sequence shaping exact nominal diameters, plus high concrete grip ribs.</p>
                      </div>
                      <div className="flex gap-3 leading-normal">
                        <span className="font-mono font-bold text-brand-red text-sm">03.</span>
                        <p><strong>Thermex Quenching Process:</strong> Spray spray cooling converts outer skins into wear-resistant high-yield martensite layers.</p>
                      </div>
                      <div className="flex gap-3 leading-normal">
                        <span className="font-mono font-bold text-brand-red text-sm">04.</span>
                        <p><strong>Rigid Mechanical Inspection:</strong> Random lab checks verifying yield limits, re-bending angles, and surface accuracy.</p>
                      </div>
                    </div>

                    <Link
                      href={"/product#manufacturing"}
                      className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red/80 font-black px-4 py-2 uppercase text-xs tracking-wider cursor-pointer focus:outline-none"
                    >
                      <span>Discover Full Milling Process</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default StrengthSection