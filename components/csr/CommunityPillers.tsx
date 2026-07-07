import {Landmark, GraduationCap, Activity} from "lucide-react";

function CommunityPillers() {
  return (
    <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12" id="csr-pillars">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-brand-border/70 p-6 rounded-xs shadow-xs space-y-4 hover:border-[#8F9E75]/30 transition-all">
            <div className="w-10 h-10 bg-[#8F9E75]/10 flex items-center justify-center text-[#8F9E75] rounded-xs">
              <Landmark size={20} />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-black uppercase tracking-tight">
              Civil Sanitation & Infrastructure
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed font-sans">
              Upgrading public amenities including local pathways, community
              lighting, sanitary restrooms, and safe environment settings across
              the Nawalparasi region.
            </p>
          </div>

          <div className="bg-white border border-brand-border/70 p-6 rounded-xs shadow-xs space-y-4 hover:border-[#8F9E75]/30 transition-all">
            <div className="w-10 h-10 bg-brand-gold/10 flex items-center justify-center text-brand-gold rounded-xs">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-black uppercase tracking-tight">
              Educational Upliftment
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed font-sans">
              Ensuring under-privileged school students receive proper books,
              stationeries, and bag packs, while supporting regional
              multi-campus infrastructure expansions.
            </p>
          </div>

          <div className="bg-white border border-brand-border/70 p-6 rounded-xs shadow-xs space-y-4 hover:border-[#8F9E75]/30 transition-all">
            <div className="w-10 h-10 bg-[#B8001F]/10 flex items-center justify-center text-[#B8001F] rounded-xs">
              <Activity size={20} />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-black uppercase tracking-tight">
              Health & Athletic Wellness
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed font-sans">
              Organizing ongoing blood collection drives, free eye medical
              testing clinics, and sponsoring sub-ward and district athletic
              cups to sustain high community energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunityPillers