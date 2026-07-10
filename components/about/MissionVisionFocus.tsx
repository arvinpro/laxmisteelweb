import { Eye, Gem, Target } from "lucide-react"

function MissionVisionFocus() {
  return (
    <section>
        <div className="bg-brand-sand/50 border-y border-brand-border py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: MISSION */}
          <div className="bg-white border-t-4 border-t-brand-red border-x border-b border-brand-border p-6 md:p-8 space-y-4 rounded-b-xs shadow-xs hover:shadow-md transition-shadow">
            <div className="bg-brand-red/5 p-3 text-brand-red rounded-xs w-12 h-12 flex items-center justify-center">
              <Target size={22} />
            </div>

            <h3 className="font-bold text-lg tracking-wider text-brand-black uppercase">
              OUR MISSION
            </h3>

            <ul className="space-y-3.5 text-sm text-brand-muted font-semibold leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>
                  High-quality TMT steel for safe and durable construction.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>
                  Consistent quality through advanced manufacturing and testing.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>Support for earthquake-resistant infrastructure.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>
                  Long-term trust through reliable and responsible service.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: VISION */}
          <div className="bg-white border-t-4 border-t-brand-red border-x border-b border-brand-border p-6 md:p-8 space-y-4 rounded-b-xs shadow-xs hover:shadow-md transition-shadow">
            <div className="bg-brand-red/5 p-3 text-brand-red rounded-xs w-12 h-12 flex items-center justify-center">
              <Eye size={22} />
            </div>

            <h3 className="font-condensed font-extrabold text-lg tracking-wider text-brand-black uppercase">
              OUR VISION
            </h3>

            <ul className="space-y-3.5 text-sm text-brand-muted font-semibold leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>Globally respected steel manufacturer from Nepal.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>
                  Industry leadership through innovation and engineering
                  excellence.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full flex-shrink-0" />
                <span>
                  World-class steel solutions with sustainable technology.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 3: VALUES */}
          <div className="bg-white border-t-4 border-t-brand-red border-x border-b border-brand-border p-6 md:p-8 space-y-4 rounded-b-xs shadow-xs hover:shadow-md transition-shadow">
            <div className="bg-brand-red/5 p-3 text-brand-red rounded-xs w-12 h-12 flex items-center justify-center">
              <Gem size={22} />
            </div>
            <h3 className="font-condensed font-extrabold text-lg tracking-wider text-brand-black uppercase">
              OUR VALUES
            </h3>
            <ul className="space-y-3.5 text-sm text-brand-muted font-semibold leading-relaxed">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                <span>
                  Quality First — Zero compromises across manufacturing runs.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                <span>
                  Integrity & Trust — Honoring specifications with transparency.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                <span>
                  Innovation — Seamlessly adopting advanced metallurgy.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full" />
                <span>
                  Sustainability — Promoting local community health in
                  Nawalparasi.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVisionFocus