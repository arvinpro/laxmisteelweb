import Image from "next/image";
import { Quote } from "lucide-react";
import Picture3Img from "@/assets/images/tikaram.png";

function ChairmanMessage() {
  return (
    <section>
         <div className="bg-brand-black text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden select-none border-b border-brand-black">
        <div className="absolute inset-0 bg-radial-to-r from-brand-red/10 to-transparent opacity-60" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Column: Chairman Quote & Signature */}
          <div className="md:col-span-7 col-span-1 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            <Quote className="text-brand-gold opacity-80" size={36} />

            <h3 className="text-lg md:text-xl font-bold italic text-slate-100 leading-relaxed md:max-w-2xl">
              "At Laxmi Steels, our legacy is forged not just in melting heat,
              but in absolute accountability to the safety of our country.
              Because Nepal represents active earthquake risks, every single bar
              rolled under our supervision is engineered as a mechanical shield
              to secure civil lives in the generations to follow."
            </h3>

            <div className="space-y-1">
              <h4 className="font-bold text-lg tracking-wide text-brand-gold uppercase">
                Mr. Tikaram Neupane
              </h4>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-mono">
                Chairman, Laxmi Steels Limited
              </p>
            </div>
          </div>

          {/* Right Column: Chairman Image Portrait */}
          <div className="md:col-span-5 col-span-1 flex justify-center md:justify-end">
            <div className="relative group max-w-sm w-full aspect-[4/5] md:aspect-[3/4] border border-brand-border/20 rounded-xs overflow-hidden shadow-2xl bg-neutral-900">
              {/* Subtle gold shadow or corner borders */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-brand-red to-brand-gold rounded-xs blur-xs opacity-15 group-hover:opacity-30 transition duration-1000" />
              <div className="relative w-full h-full">
                <Image
                  src={Picture3Img}
                  alt="Mr. Tikaram Neupane, Chairman"
                  className="w-full h-full object-cover filter brightness-95 hover:brightness-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Decorative overlay trim */}
                <div className="absolute inset-0 border border-white/10 group-hover:border-brand-gold/30 transition-colors pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end text-center md:text-left">
                  <span className="text-[10px] text-brand-gold font-mono uppercase tracking-widest">
                    Chairman Portrait
                  </span>
                  <span className="text-xs text-white uppercase font-bold tracking-wider">
                    Laxmi Steels Ltd.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ChairmanMessage