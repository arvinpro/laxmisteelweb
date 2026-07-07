import MasonryGridImages from "./MasonryGridImages";
import ChooseUs from "./ChooseUs";
import { ChevronRight } from "lucide-react";

const stats = [
  { number: "30+", label: "Mega Projects Supplied" },
  { number: "7+", label: "Hydropower Plants" },
  { number: "5+", label: "National Highway Spans" },
  { number: "6+", label: "High-Voltage Transmission Lines" },
];

function ProjectsView() {
  return (
    <section id="projects-tracker-section">
      {/* Page Hero */}
      <div
        className="relative bg-brand-darksky text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-brand-skyaccent/30 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 45%, rgba(184, 0, 31, 0.25) 100%), url("/project/image1 (10).jpeg")`,
        }}
      >
        <div className="absolute inset-0 bg-brand-darksky/30" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          {/* Breadcrumbs Navigation Aid */}
          <div className="flex items-center justify-center gap-1.5 text-xs font-sans text-gray-400 select-none mb-4 md:mb-5">
            <span className="hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <ChevronRight size={10} className="text-gray-500" />
            <span className="text-brand-skytext font-medium">
              Projects & Legacy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight">
            Building Nepal, Project by Project
          </h1>
          <p className=" text-brand-gold text-lg uppercase tracking-wider font-bold">
            Trusted by the Nation's Largest Construction Contractors
          </p>
          <p className="text-gray-300 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            From national highways carved through mountains to fast-flowing
            hydropower plants and towering city skylines, Laxmi Steels provides
            the high-tensile bones that hold Nepal together.
          </p>
        </div>
      </div>

      {/* STATS STRIP (dark background with brand-blue accent) */}
      <div className="bg-gradient-to-r from-brand-darksky via-brand-bluemed to-brand-darksky border-y border-brand-skyaccent/30 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1.5 select-none animate-fade-in">
              <span className="block font-mono text-3xl md:text-4xl font-extrabold text-brand-gold">
                {stat.number}
              </span>
              <span className="block text-xs uppercase tracking-widest text-gray-400 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/*masonry grid*/}
      <MasonryGridImages />

      {/*Why to choose us*/}
      <ChooseUs />
    </section>
  );
}

export default ProjectsView;
