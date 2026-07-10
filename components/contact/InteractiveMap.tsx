"use client";


import { useState } from "react";
import { Map } from "lucide-react";


const officeEmbedUrl =
  "https://maps.google.com/maps?q=Neupane%20Tower,%20Subidhanagar,%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed";
const factoryEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14138.828238101416!2d83.67049887714256!3d27.568465584510006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f43e06f9d7df%3A0x89dc2ddae2ee1a68!2sSunwal%2033000!5e0!3m2!1sen!2snp!4v1700000000002!5m2!1sen!2snp";

function InteractiveMap() {
    const [activeMapTab, setActiveMapTab] = useState<'office' | 'factory'>('office');
  return (
    <section>
      <div className="bg-brand-sand border-y border-brand-border py-16 px-4 md:px-8 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-2 select-none">
          <div className="flex items-center gap-2 justify-center text-brand-red font-condensed font-bold uppercase text-sm tracking-wider">
            <Map size={16} />
            <span>Interactive Geolocation Switcher</span>
          </div>
          <h3 className="font-serif text-2xl font-extrabold text-brand-black">
            Find Our Offices & Factory Complex
          </h3>
          <p className="text-sm text-brand-muted">
            Toggle between our main corporate headquarters in Kathmandu and
            active production mills in Nawalparasi.
          </p>
        </div>

        <div className="flex justify-center select-none">
          <div className="inline-flex bg-white rounded-xs p-1 border border-brand-border md:w-auto w-full gap-1 my-2">
            <button
              onClick={() => setActiveMapTab("office")}
              className={`flex-1 md:flex-initial px-5 py-2.5 font-condensed font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs select-none ${
                activeMapTab === "office"
                  ? "bg-brand-red text-white"
                  : "text-brand-black hover:bg-brand-sand"
              }`}
            >
              Head Office — Kathmandu
            </button>
            <button
              onClick={() => setActiveMapTab("factory")}
              className={`flex-1 md:flex-initial px-5 py-2.5 font-condensed font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs select-none ${
                activeMapTab === "factory"
                  ? "bg-brand-red text-white"
                  : "text-brand-black hover:bg-brand-sand"
              }`}
            >
              Factory — Nawalparasi
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-2 border-brand-black bg-brand-nearblack h-[400px] rounded-sm relative overflow-hidden shadow-md">
          {activeMapTab === "office" ? (
            <iframe
              id="iframe-office-map"
              src={officeEmbedUrl}
              className="w-full h-full grayscale-[20%] contrast-[110%]"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Laxmi Steels Neupane Tower Map"
            />
          ) : (
            <iframe
              id="iframe-factory-map"
              src={factoryEmbedUrl}
              className="w-full h-full grayscale-[20%] contrast-[110%]"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              title="Laxmi Steels Nawalparasi factory Map"
            />
          )}

          <div className="absolute bottom-4 left-4 bg-brand-nearblack text-white p-3 text-left border border-white/15 max-w-xs pointer-events-none rounded-xs">
            <span className="block font-condensed font-bold text-sm uppercase text-brand-gold">
              LAXMI LOCATOR
            </span>
            <p className="text-[10.5px] text-gray-300 mt-1">
              {activeMapTab === "office"
                ? "Corporate headquarters, facilitating trade licensing and board dispatches."
                : "Primary 800 Metric Tons rolling mill quenching facility in sunwal."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InteractiveMap;
