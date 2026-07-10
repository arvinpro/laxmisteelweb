import {Check} from "lucide-react";

function ChooseUs() {
  return (
    <section>
        <div className="bg-brand-black text-white py-16 px-4 md:px-8 border-t border-brand-red/15 select-none">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-brand-gold font-mono text-sm uppercase tracking-widest">Uncompromised Quality Controls</span>
            <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white uppercase">Why National Projects Specify Laxmi Steels</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="border border-white/5 bg-[#111111] p-6 space-y-2.5">
              <div className="flex items-center gap-2">
                <Check className="text-brand-red" size={16} />
                <h4 className="font-condensed font-extrabold text-sm uppercase text-white tracking-wider">Heavy-Load Strength</h4>
              </div>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                Consistent 500 MPa yield limit ensures column and beam structures absorb high-compression loads in deep foundations.
              </p>
            </div>
            <div className="border border-white/5 bg-[#111111] p-6 space-y-2.5">
              <div className="flex items-center gap-2">
                <Check className="text-brand-red" size={16} />
                <h4 className="font-condensed font-extrabold text-sm uppercase text-white tracking-wider">Seismic Ductility</h4>
              </div>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                FE 500D grades comply with critical global standards, allowing structures to absorb displacement waves under severe tremors.
              </p>
            </div>
            <div className="border border-white/5 bg-[#111111] p-6 space-y-2.5">
              <div className="flex items-center gap-2">
                <Check className="text-brand-red" size={16} />
                <h4 className="font-condensed font-extrabold text-sm uppercase text-white tracking-wider">Reliable Daily Delivery</h4>
              </div>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                With a capacity of 800 Metric Tons per day, Laxmi Steels secures continuous dispatch logs to keep project sites active.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChooseUs