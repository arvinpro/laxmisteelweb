import {ArrowRight, Landmark} from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <section>
      <div 
                className="bg-[#F5F3EE] py-16 md:py-24 border-b border-brand-border/70"
              >
                <div style={{ fontSize: '18px' }} className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-brand-black font-sans">
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text uppercase font-condensed font-black tracking-widest text-[#B8001F] border-b border-brand-red/30 pb-2 inline-block">
                      Who We Are
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight uppercase select-none">
                      Built in Nepal. <br />
                      Trusted by Nepal.
                    </h2>
                    <div className="space-y-4 text-justify text-sm md:text-base text-brand-muted leading-relaxed">
                      <p>
                        Laxmi Steels Limited is established with the strict corporate mandate of reinforcing the building security guidelines of our country. Operating as a hallmark brand under the elite <span className="text-[#B8001F] hover:text-[#B8001F]/70 underline transition ease-in-out"><Link href="https://saurabhgroup.com/" target="_blank" rel="noopener noreferrer">Saurabh Group</Link></span>, our heavy rolling plant in Nawalparasi coordinates precision engineering models to secure safe foundations.
                      </p>
                      <p>
                        By blending certified raw iron billets with German Thermex thermal quenching technology, we roll structural rebar rods that absorb displacement tension loads during tremors. This uncompromised commitment defines our legacy throughout all 7 provinces of Nepal.
                      </p>
                    </div>
                    <Link
                      href={"/about"}
                      className="inline-flex items-center gap-2 text-[#B8001F] hover:text-[#B8001F]/80 uppercase font-black text-sm tracking-wider cursor-pointer focus:outline-none"
                    >
                      <span>Our Full Corporate Story</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="lg:col-span-5 flex justify-center">
                    <div className="border border-brand-border bg-white rounded-xs p-6 shadow-sm relative w-full max-w-sm hover:shadow-md transition-shadow">
                      <span className="absolute -top-3 -right-3 bg-brand-red text-white text-[11px] font-black uppercase tracking-widest px-5 py-2 shrink-0">
                        ESTABLISHED 2008
                      </span>
                      <div className="space-y-4">
                        <div className="bg-brand-red text-white p-3 inline-block rounded-xs">
                           <Landmark size={24} />
                        </div>
                        <h3 className="text-lg font-bold">A <span className="hover:text-[#B8001F] hover:underline transition ease-in-out"><Link href="https://saurabhgroup.com/" target="_blank" rel="noopener noreferrer">Saurabh Group</Link></span> Conglomerate</h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                          Supporting Nepal’s macro-industrial development across steel, heavy cement manufacturing, trading logistics and corporate financial resources.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default About