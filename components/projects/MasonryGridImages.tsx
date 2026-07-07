"use client";

import { useState } from "react";
import {
  MapPin,
  HardHat,
  Construction,
  Bolt,
  Layers,
  Landmark,
} from "lucide-react";
import { PROJECTS } from "./data";
import Image from "next/image";

function MasonryGridImages() {
  const [activeTab, setActiveTab] = useState<
    "all" | "tunnels" | "hydro" | "transmission" | "government" | "residential"
  >("all");
  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case "tunnels":
        return {
          bg: "bg-amber-100 text-amber-800 border-amber-300",
          label: "Tunnels & Highways",
          icon: <Construction size={12} />,
        };
      case "hydro":
        return {
          bg: "bg-blue-100 text-blue-800 border-blue-300",
          label: "Hydropower & Energy",
          icon: <Bolt size={12} />,
        };
      case "transmission":
        return {
          bg: "bg-emerald-100 text-emerald-800 border-emerald-300",
          label: "Transmission Lines",
          icon: <Layers size={12} />,
        };
      case "government":
        return {
          bg: "bg-purple-100 text-purple-800 border-purple-300",
          label: "Government & Landmarks",
          icon: <Landmark size={12} />,
        };
      default:
        return {
          bg: "bg-slate-100 text-slate-800 border-slate-300",
          label: "Residential & Urban",
          icon: <Construction size={12} />,
        };
    }
  };
  return (
    <section>
      {/* CATEGORY FILTER TABS */}
      <div className="bg-brand-sand border-b border-brand-border py-4 overflow-x-auto select-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex space-x-2 justify-start md:justify-center min-w-max md:min-w-0 md:flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs ${
              activeTab === "all"
                ? "bg-brand-red text-white"
                : "bg-white border border-brand-border text-brand-black hover:bg-brand-sand"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("tunnels")}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs ${
              activeTab === "tunnels"
                ? "bg-brand-red text-white"
                : "bg-white border border-brand-border text-brand-black hover:bg-brand-sand"
            }`}
          >
            Tunnels & Highways
          </button>
          <button
            onClick={() => setActiveTab("hydro")}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs ${
              activeTab === "hydro"
                ? "bg-brand-red text-white"
                : "bg-white border border-brand-border text-brand-black hover:bg-brand-sand"
            }`}
          >
            Hydropower & Energy
          </button>
          <button
            onClick={() => setActiveTab("transmission")}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs ${
              activeTab === "transmission"
                ? "bg-brand-red text-white"
                : "bg-white border border-brand-border text-brand-black hover:bg-brand-sand"
            }`}
          >
            Transmission Lines
          </button>
          <button
            onClick={() => setActiveTab("government")}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs ${
              activeTab === "government"
                ? "bg-brand-red text-white"
                : "bg-white border border-brand-border text-brand-black hover:bg-brand-sand"
            }`}
          >
            Government & Landmarks
          </button>
          <button
            onClick={() => setActiveTab("residential")}
            className={`px-4 py-2 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none rounded-xs ${
              activeTab === "residential"
                ? "bg-brand-red text-white"
                : "bg-white border border-brand-border text-brand-black hover:bg-brand-sand"
            }`}
          >
            Residential & Urban
          </button>
        </div>
      </div>

      {/* masonry grid*/}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 font-sans text-[#1A1A1A]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => {
            const theme = getCategoryTheme(project.category);
            return (
              <div
                key={project.id}
                className="relative bg-white border border-brand-border/80 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-brand-red transition-all group min-h-[320px]"
              >
                {/* Background image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Content sits above the image/overlay */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Category Label badge */}
                    <div className="flex items-center gap-1.5">
                      {/* Gradient overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent group-hover:from-black/75 transition-colors" />
                      <span
                        className={`text-[9px] uppercase tracking-wider font-semibold border px-2.5 py-0.5 flex items-center gap-1 ${theme.bg}`}
                      >
                        {theme.icon}
                        <span>{theme.label}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-white leading-tight group-hover:text-brand-gold transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                      {project.name}
                    </h3>

                    {project.scale && (
                      <p className="text-xs text-white/90 font-medium flex items-center gap-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        <span>Scale: {project.scale}</span>
                      </p>
                    )}

                    <div className="border-t border-white/20 my-3 pt-3 space-y-2 text-xs text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      <div className="flex items-start gap-1.5">
                        <HardHat
                          size={14}
                          className="text-brand-gold mt-0.5 flex-shrink-0"
                        />
                        <span>
                          <strong className="text-white">Contractor:</strong>{" "}
                          {project.contractor}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-1.5 text-xs text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    <MapPin size={13} className="text-brand-gold" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MasonryGridImages;
