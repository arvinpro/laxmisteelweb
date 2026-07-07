"use client";

import { useState } from "react"
import Image from "next/image"
import { ZoomIn, X } from "lucide-react"
import { StaticImageData } from "next/image";
import CcsImg from "@/assets/images/ccs.jpg";
import Ccs1Img from "@/assets/images/ccs1.jpg";
import Ccs2Img from "@/assets/images/ccs2.jpg";

function Certificate() {
      const [selectedCert, setSelectedCert] = useState<{
        src: StaticImageData;
        title: string;
        desc: string;
      } | null>(null);
  return (
    <section>
        <div className="bg-brand-sand/50 border-t border-brand-border py-16 px-4 md:px-8 select-none text-brand-black">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-[#B8001F] font-mono text-xs uppercase font-bold tracking-widest">
              Certified Integrity Guarantee
            </span>
            <h3 className="text-2xl md:text-3xl font-bold uppercase">
              Certified Quality You Can Trust
            </h3>
            <p className="text-xs text-brand-muted">
              Laxmi Steels is thoroughly accredited by Nepalese and
              international testing institutions. Click any certificate to view
              the original full-screen document document.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm font-sans">
            {/* Cert 1 */}
            <div
              onClick={() =>
                setSelectedCert({
                  src: Ccs2Img,
                  title: "Nepal Standards Certificate (NS-191)",
                  desc: "Official licensed status under standard NS-191 criteria. Verifies complete physical, chemical, and dimensional compliance for concrete reinforcement.",
                })
              }
              className="border border-brand-border bg-white p-4 rounded-xs space-y-4 shadow-xs group hover:shadow-lg hover:border-brand-red/30 transition-all text-center cursor-pointer flex flex-col justify-between animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100"
            >
              <div className="relative aspect-[3/4] w-full bg-brand-sand/30 overflow-hidden flex items-center justify-center border border-brand-border/40 min-h-[300px]">
                <Image
                  src={Ccs2Img}
                  alt="Nepal Standards Certification Seal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-brand-black/80 text-white text-xs font-mono py-2 px-3 flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-xs">
                    <ZoomIn size={14} />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-condensed font-extrabold text-base uppercase text-brand-black group-hover:text-[#B8001F] transition-colors">
                  Nepal Standards Certificate
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Licensed under NS-191 criteria, verifying complete dimensional
                  tolerance, elasticity ratios, and bending fatigue controls.
                </p>
              </div>
            </div>

            {/* Cert 2 */}
            <div
              onClick={() =>
                setSelectedCert({
                  src: Ccs1Img,
                  title: "ISO 9001:2015 Standards Compliance",
                  desc: "Accolades under ISO 9001 guidelines, confirming rigorous quality management pipelines across raw material sourcing, production lines, and delivery tracks.",
                })
              }
              className="border border-brand-border bg-white p-4 rounded-xs space-y-4 shadow-xs group hover:shadow-lg hover:border-brand-red/30 transition-all text-center cursor-pointer flex flex-col justify-between animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200"
            >
              <div className="relative aspect-[3/4] w-full bg-brand-sand/30 overflow-hidden flex items-center justify-center border border-brand-border/40 min-h-[300px]">
                <Image
                  src={Ccs1Img}
                  alt="ISO 9001:2015 Certification Badge"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-brand-black/80 text-white text-xs font-mono py-2 px-3 flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-xs">
                    <ZoomIn size={14} />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-condensed font-extrabold text-base uppercase text-brand-black group-hover:text-[#B8001F] transition-colors">
                  ISO 9001:2015 Standards
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Confirming strict adherence to Global Management Guidelines
                  across sourcing, thermal heat-cycling, and warehouse delivery
                  tracks.
                </p>
              </div>
            </div>

            {/* Cert 3 */}
            <div
              onClick={() =>
                setSelectedCert({
                  src: CcsImg,
                  title: "Bureau of Indian Standards License",
                  desc: "Renewal list under IS 1786:2008 for regional export criteria, ensuring complete metal composition purity and structural safety standards.",
                })
              }
              className="border border-brand-border bg-white p-4 rounded-xs space-y-4 shadow-xs group hover:shadow-lg hover:border-[#D4A017]/40 transition-all text-center cursor-pointer flex flex-col justify-between animate-in fade-in slide-in-from-bottom-3 duration-500 delay-300"
            >
              <div className="relative aspect-[3/4] w-full bg-brand-sand/30 overflow-hidden flex items-center justify-center border border-brand-border/40 min-h-[300px]">
                <Image
                  src={CcsImg}
                  alt="Bureau of Indian Standards Quality Seal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-brand-black/80 text-white text-xs font-mono py-2 px-3 flex items-center gap-1.5 uppercase tracking-wider backdrop-blur-xs">
                    <ZoomIn size={14} />
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-condensed font-extrabold text-base uppercase text-brand-black font-semibold group-hover:text-[#D4A017] transition-colors">
                  Bureau of Indian Standards
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Accredited completely for regional exporting requirements,
                  validating high purity chemical parameters in our cast metals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {selectedCert && (
        <div
          className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm z-9999 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white border border-brand-border max-w-xl w-full p-6 space-y-4 relative flex flex-col max-h-[80vh] shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-black transition-colors focus:outline-none cursor-pointer p-1 bg-brand-sand hover:bg-brand-border rounded-full"
            >
              <X size={18} />
            </button>

            <div className="space-y-1 pr-8">
              <h3 className="font-serif text-lg font-bold text-brand-black uppercase leading-tight">
                {selectedCert.title}
              </h3>
              <p className="text-[11px] text-brand-muted leading-relaxed font-sans pr-2">
                {selectedCert.desc}
              </p>
            </div>

            {/* Document display viewport */}
            <div className="flex-1 overflow-auto bg-neutral-100 border border-brand-border/60 max-h-[60vh] flex items-center justify-center relative select-text">
              <Image
                src={selectedCert.src}
                alt={selectedCert.title}
                className="max-h-[55vh] h-auto w-auto object-contain cursor-zoom-in hover:scale-105 transition-transform duration-300 shadow-md border border-neutral-200"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pt-2 border-t border-brand-border flex items-center justify-between font-mono text-[10px] text-brand-muted uppercase">
              <span>ESTD 2008 &bull; SHIVAUTOMATION</span>
              <span>Click document to zoom</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificate