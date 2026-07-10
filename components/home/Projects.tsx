import Link from "next/link"

function Projects() {
  return (
    <section>
      <div 
                className="bg-brand-sand py-16 md:py-24 border-b border-brand-border/70 text-brand-black"
              >
                <div className="max-w-7xl mx-auto space-y-12">
                  <div className="text-center max-w-xl mx-auto space-y-2 select-none">
                    <span className="text-[#B8001F] text-base uppercase font-bold tracking-widest block">Our Infrastructure</span>
                    <h3 className="text-3xl font-bold uppercase text-brand-black">Proven on National Milestones</h3>
                    <p className="text-[0.80rem] text-brand-muted font-medium">Laxmi Steels is the specified metal choice for critical civil projects across Nepal.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-black text-[0.80rem] uppercase text-brand-black">
                    <div className="bg-white border border-brand-border p-5 rounded-xs flex items-center justify-between shadow-xs">
                      <span className="tracking-wide">✓ Siddhababa National Tunnel</span>
                      <span className="text-[0.80rem] text-brand-red">supplied</span>
                    </div>
                    <div className="bg-white border border-brand-border p-5 rounded-xs flex items-center justify-between shadow-xs">
                      <span className="tracking-wide">✓ Upper Tamor Hydropower (285 MW)</span>
                      <span className="text-xs text-brand-red">supplied</span>
                    </div>
                    <div className="bg-white border border-brand-border p-5 rounded-xs flex items-center justify-between shadow-xs">
                      <span className="tracking-wide">✓ Kathmandu Fast Track Expressway</span>
                      <span className="text-xs text-brand-red">supplied</span>
                    </div>
                    <div className="bg-white border border-brand-border p-5 rounded-xs flex items-center justify-between shadow-xs">
                      <span className="tracking-wide">✓ Hetauda 220 kV Power Lines</span>
                      <span className="text-xs text-brand-red">supplied</span>
                    </div>
                    <div className="bg-white border border-brand-border p-5 rounded-xs flex items-center justify-between shadow-xs">
                      <span className="tracking-wide">✓ National Police Academy, Panauti</span>
                      <span className="text-xs text-brand-red">supplied</span>
                    </div>
                    <div className="bg-white border border-brand-border p-5 rounded-xs flex items-center justify-between shadow-xs">
                      <span className="tracking-wide">✓ Dharahara Seismic Reconstruction</span>
                      <span className="text-xs text-brand-red">supplied</span>
                    </div>
                  </div>

                  <div className="text-center select-none pt-4">
                    <Link
                      href={"/project"}
                      className="bg-brand-black hover:bg-brand-red text-white font-condensed font-black tracking-widest px-8 py-3.5 uppercase text-xs rounded-xs cursor-pointer focus:outline-none"
                    >
                      See Complete Project Database →
                    </Link>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default Projects