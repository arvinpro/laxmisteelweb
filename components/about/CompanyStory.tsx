import { Award } from "lucide-react"

function CompanyStory() {
  return (
    <section>
         <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 font-sans text-brand-black items-center">
        {/* Left Story */}
        <div className="lg:col-span-7 space-y-6 relative">
          {/* Large decorative 2008 background */}
          <div className="absolute -top-12 -left-6 text-brand-sand font-mono text-7xl md:text-9xl font-extrabold opacity-40 -z-10 select-none">
            2008
          </div>

          <span className="font-extrabold tracking-widest text-[#B8001F] text-sm uppercase border-b border-brand-red/30 pb-2 inline-block">
            Our Historic Legacy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black tracking-tight leading-tight select-none">
            A Legacy Built on Steel
          </h2>

          <div className="space-y-4 text-xs text-justify md:text-base text-brand-muted leading-relaxed">
            <p>
              Founded in 2008 as a prominent pillar of the elite Saurabh Group,
              Laxmi Steels Limited emerged with a distinct, patriotic vision: to
              satisfy Nepal's rapidly growing infrastructure demands with
              locally manufactured, high-yield earthquake-resistant steel.
            </p>
            <p>
              From our state-of-the-art heavy rolling mill complex in Khaireni,
              Sunwal-7, Nawalparasi, we became the first in the country to
              install authenticated German Thermex Technology under
              international specifications, securing structural integrity for
              landmark government and civil developments.
            </p>
            <p>
              With a robust manufacturing density of 800 Metric Tons per day,
              Laxmi Steels unites high-purity carbon chemistry with automated
              metallurgical checks, defining quality guidelines that make us the
              No. 1 trusted name for Nepalese structural engineers, project
              contractors, and regional builders.
            </p>
          </div>
        </div>

        {/* Right Story Visual Panel */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="border border-brand-border bg-white p-8 rounded-sm relative max-w-sm w-full shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -top-3 -right-3 bg-brand-red text-white p-2 text-[10px] font-condensed font-bold uppercase tracking-widest rounded-sm">
              ESTABLISHED 2008
            </div>

            <div className="space-y-4">
              <Award className="text-brand-red" size={32} />
              <h3 className="font-serif text-lg font-bold text-brand-black">
                Part of the Saurabh Group
              </h3>
              <p className="text-base text-brand-muted leading-relaxed">
                Operating multi-sector manufacturing clusters throughout Nepal.
                Consistently defining benchmark quality paradigms across cement,
                steel, and trade logistics imports.
              </p>
              <div className="border-t border-brand-border/60 pt-4 flex items-center justify-between text-xs whitespace-nowrap">
                <span>HEADQUARTERS: KATHMANDU</span>
                <span className="text-brand-red">800 MT / DAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyStory