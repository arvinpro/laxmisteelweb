"use client";



import { MapPin, Search, LayoutGrid, Table, Info } from "lucide-react";
import Image from "next/image";
import blooddonation from "@/assets/images/blood donation.jpeg";
import envday from "@/assets/images/env  day.jpeg";
import toiletImg from "@/assets/images/ccs.jpg";
import ccs1 from "@/assets/images/ccs1.jpg";
import ccs2 from "@/assets/images/ccs2.jpg";
import streetLightsImg from "@/assets/images/streetlight.jpg";
import { useState } from "react";
import { csrActivities } from "./data";

const getLocalImage = (key: string) => {
  switch (key) {
    case "ccs":
      return toiletImg;
    case "ccs1":
      return ccs1;
    case "ccs2":
      return ccs2;
    case "blooddonation":
      return blooddonation;
    case "envday":
      return envday;
    case "streetlights":
      return streetLightsImg;
    default:
      return null;
  }
};

const filterCategories = [
  "All",
  "Sanitation & Health",
  "Infrastructure & Culture",
  "Education & Sports",
  "Environment & Safety",
];

const fitsCategory = (
  itemCategory: string,
  selectedCategory: string
): boolean => {
  if (selectedCategory === "All") return true;
  if (selectedCategory === "Sanitation & Health") {
    return (
      itemCategory === "Sanitation" ||
      itemCategory === "Health" ||
      itemCategory === "Health & Social Welfare"
    );
  }
  if (selectedCategory === "Infrastructure & Culture") {
    return (
      itemCategory === "Religious Infrastructure" ||
      itemCategory === "Infrastructure Development"
    );
  }
  if (selectedCategory === "Education & Sports") {
    return itemCategory === "Education" || itemCategory === "Sports";
  }
  if (selectedCategory === "Environment & Safety") {
    return (
      itemCategory === "Environment & Community Development" ||
      itemCategory === "Environmental Conservation" ||
      itemCategory === "Community Development & Public Safety"
    );
  }
  return false;
};

function CSRActivities() {
  const [registrySearch, setRegistrySearch] = useState("");
  const [registryCategory, setRegistryCategory] = useState("All");
  const [registryView, setRegistryView] = useState<"grid" | "table">("grid");

  return (
    <section>
      {/* 3. INTERACTIVE REGISTRY SEARCH & GRID/TABLE PORFTOFLIO */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        id="csr-activities-portfolio"
      >
        <div className="space-y-2 text-center max-w-3xl mx-auto mb-10">
          <span className="font-mono tracking-[0.25em] text-sm uppercase font-bold text-[#8F9E75] block">
            VERIFIED STATUTORY CSR ARCHIVES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-brand-black tracking-tight uppercase">
            CSR Activity Registry & Showcase
          </h2>
          <p className="text-base text-brand-muted max-w-xl mx-auto leading-relaxed">
            A comprehensive, transparent log of social works executed directly
            by Laxmi Steels Limited. Expand, search, or toggle the layout
            formats to audit our local work.
          </p>
        </div>

        {/* Control Desk */}
        <div className="bg-white border border-brand-border/70 p-4 rounded-xs shadow-xs space-y-3 md:space-y-0 md:flex md:items-center md:justify-between gap-4 mb-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
              <Search size={15} />
            </span>
            <input
              type="text"
              value={registrySearch}
              onChange={(e) => setRegistrySearch(e.target.value)}
              placeholder="Search by activity, location, or remarks..."
              className="w-full text-sm bg-brand-sand/30 pl-10 pr-4 py-2 borders border-brand-border/80 focus:border-[#8F9E75] focus:ring-1 focus:ring-[#8F9E75] outline-none rounded-xs placeholder-brand-muted text-brand-black"
            />
          </div>

          {/* Format switches */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            <span className="text-[12px] font-mono uppercase tracking-wider text-stone-500 font-bold block">
              Format Toggle:
            </span>
            <div className="inline-flex rounded-xs border border-brand-border/80 p-0.5 bg-brand-sand/20">
              <button
                type="button"
                onClick={() => setRegistryView("grid")}
                className={`px-3 py-1.5 flex items-center gap-1.5 text-[14px] font-mono uppercase font-bold tracking-wider rounded-xs cursor-pointer focus:outline-none transition-all ${
                  registryView === "grid"
                    ? "bg-white text-[#8F9E75] shadow-xs border border-brand-border/40"
                    : "text-stone-500 hover:text-brand-black"
                }`}
              >
                <LayoutGrid size={11} />
                <span>Card Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setRegistryView("table")}
                className={`px-3 py-1.5 flex items-center gap-1.5 text-[14px] font-mono uppercase font-bold tracking-wider rounded-xs cursor-pointer focus:outline-none transition-all ${
                  registryView === "table"
                    ? "bg-white text-[#8F9E75] shadow-xs border border-brand-border/40"
                    : "text-stone-500 hover:text-brand-black"
                }`}
              >
                <Table size={11} />
                <span>Detailed table</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Horizontal Filter Scrolling / Chips */}
        <div className="flex flex-wrap items-center gap-1.5 justify-center mb-8">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setRegistryCategory(cat)}
              className={`px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider border rounded-xs cursor-pointer focus:outline-none transition-all ${
                registryCategory === cat
                  ? "bg-[#8F9E75] text-white border-[#8F9E75]"
                  : "bg-white text-stone-700 border-brand-border/80 hover:bg-brand-sand/50"
              }`}
            >
              {cat === "All" ? "Show All Activites" : cat}
            </button>
          ))}
        </div>

        {/* RESULTS SCENE */}
        {csrActivities.filter((activity) => {
          const matchesCategory = fitsCategory(
            activity.category,
            registryCategory
          );
          const matchesSearch =
            activity.activity
              .toLowerCase()
              .includes(registrySearch.toLowerCase()) ||
            activity.location
              .toLowerCase()
              .includes(registrySearch.toLowerCase()) ||
            activity.remarks
              .toLowerCase()
              .includes(registrySearch.toLowerCase());
          return matchesCategory && matchesSearch;
        }).length === 0 ? (
          <div className="bg-white border border-brand-border/60 py-16 text-center rounded-xs space-y-3">
            <div className="w-12 h-12 bg-brand-sand flex items-center justify-center rounded-full mx-auto text-stone-400">
              <Info size={20} />
            </div>
            <h4 className="font-serif text-sm font-bold text-brand-black">
              No matching projects located
            </h4>
            <p className="text-sm text-brand-muted max-w-sm mx-auto">
              We couldn't locate any CSR activities matching your current query.
              Try resetting filters below.
            </p>
            <button
              type="button"
              onClick={() => {
                setRegistrySearch("");
                setRegistryCategory("All");
              }}
              className="mt-2 text-sm font-mono tracking-wider font-bold text-[#8F9E75] uppercase hover:underline cursor-pointer focus:outline-none"
            >
              Clear Search Parameters
            </button>
          </div>
        ) : registryView === "grid" ? (
          /* Visual Cards System */
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            id="csr-activity-grid"
          >
            {csrActivities
              .filter((activity) => {
                const matchesCategory = fitsCategory(
                  activity.category,
                  registryCategory
                );
                const matchesSearch =
                  activity.activity
                    .toLowerCase()
                    .includes(registrySearch.toLowerCase()) ||
                  activity.location
                    .toLowerCase()
                    .includes(registrySearch.toLowerCase()) ||
                  activity.remarks
                    .toLowerCase()
                    .includes(registrySearch.toLowerCase());
                return matchesCategory && matchesSearch;
              })
              .map((act) => {
                const imgSource =
                  (act.localImage ? getLocalImage(act.localImage) : null) ||
                  act.image;
                return (
                  <div
                    key={act.sn}
                    className="bg-white border border-brand-border hover:border-[#8F9E75]/35 rounded-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-100 border-b border-brand-border/40 select-none">
                        <Image
                          src={imgSource}
                          fill
                          alt={act.activity}
                          referrerPolicy="no-referrer"
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-neutral-900/90 border border-white/10 px-2 py-0.5 text-[8px] font-mono text-brand-gold rounded-xs font-bold">
                          SN {act.sn.toString().padStart(2, "0")}
                        </div>
                        <div className="absolute bottom-3 right-3 bg-[#8F9E75] px-2.5 py-0.5 text-[8.5px] font-sans font-bold text-white uppercase tracking-wider rounded-xs">
                          {act.remarks}
                        </div>
                      </div>

                      {/* Content Frame */}
                      <div className="p-5 space-y-2.5">
                        <span className="text-[14px] font-mono font-bold text-[#8F9E75] uppercase tracking-widest block">
                          {act.category}
                        </span>
                        <h4 className="font-serif text-base font-bold text-brand-black leading-snug group-hover:text-[#8F9E75] transition-colors min-h-[40px] line-clamp-2">
                          {act.activity}
                        </h4>
                        <p className="text-stone-600 text-[14px] leading-relaxed line-clamp-3">
                          {act.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="px-5 py-3 bg-brand-sand/20 border-t border-brand-border/40 flex items-start gap-2">
                      <MapPin
                        size={15}
                        className="text-[#B8001F] shrink-0 mt-0.5"
                      />
                      <div className="text-[14px] overflow-hidden">
                        <span className="font-bold text-stone-400 block uppercase tracking-wider text-[10px] font-mono leading-none">
                          Designated Boundary
                        </span>
                        <span
                          className="leading-tight text-stone-700 block mt-1 font-medium truncate"
                          title={act.location}
                        >
                          {act.location}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          /* Formal Audit Table conforming perfectly to requested dataset */
          <div
            className="bg-white border border-brand-border rounded-xs shadow-xs overflow-hidden"
            id="csr-activity-table"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-sand/55 border-b border-brand-border text-brand-black font-semibold uppercase tracking-wider text-[9px] font-mono">
                    <th className="py-3 px-4 w-[60px] text-center border-r border-brand-border/50">
                      S.N.
                    </th>
                    <th className="py-3 px-4 w-[160px] border-r border-brand-border/50 text-center">
                      Visual Frame
                    </th>
                    <th className="py-3 px-4 border-r border-brand-border/50">
                      CSR Activity & Community Impact
                    </th>
                    <th className="py-3 px-4 border-r border-brand-border/50">
                      Location
                    </th>
                    <th className="py-3 px-4">Remarks/Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/50 text-brand-black">
                  {csrActivities
                    .filter((activity) => {
                      const matchesCategory = fitsCategory(
                        activity.category,
                        registryCategory
                      );
                      const matchesSearch =
                        activity.activity
                          .toLowerCase()
                          .includes(registrySearch.toLowerCase()) ||
                        activity.location
                          .toLowerCase()
                          .includes(registrySearch.toLowerCase()) ||
                        activity.remarks
                          .toLowerCase()
                          .includes(registrySearch.toLowerCase());
                      return matchesCategory && matchesSearch;
                    })
                    .map((act) => {
                      const imgSource =
                        (act.localImage
                          ? getLocalImage(act.localImage)
                          : null) || act.image;
                      return (
                        <tr
                          key={act.sn}
                          className="hover:bg-brand-sand/15 transition-colors align-middle"
                        >
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-stone-500 border-r border-brand-border/50 bg-brand-sand/10">
                            {act.sn}
                          </td>
                          <td className="py-3 px-4 border-r border-brand-border/50 text-center">
                            <div className="w-32 h-20 overflow-hidden bg-stone-100 border border-brand-border rounded-xs inline-block select-none">
                              <Image
                                src={imgSource}
                                width={400}
                                height={400}
                                alt="thumbnail"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </td>
                          <td className="py-3.5 px-4 border-r border-brand-border/50 space-y-1">
                            <div className="font-serif font-bold text-stone-900 text-sm">
                              {act.activity}
                            </div>
                            <div className="text-[10px] text-stone-500 leading-relaxed max-w-xl">
                              {act.desc}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 border-r border-brand-border/50">
                            <div className="flex items-start gap-1.5 max-w-xs">
                              <MapPin
                                size={11}
                                className="text-[#B8001F] mt-0.5 shrink-0"
                              />
                              <span className="text-[11px] leading-tight text-stone-700 font-medium">
                                {act.location}
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2 py-0.5 rounded-xs text-[9px] font-sans font-bold uppercase tracking-wider bg-[#8F9E75]/10 text-[#8F9E75] border border-[#8F9E75]/25">
                              {act.remarks}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            {/* Table Footer Stats */}
            <div className="bg-brand-sand/20 px-4 py-3 border-t border-brand-border text-[9px] font-mono text-stone-500 flex items-center gap-1.5">
              <Info size={11} className="text-[#8F9E75]" />
              <span>
                Displaying{" "}
                <strong>
                  {
                    csrActivities.filter((activity) => {
                      const matchesCategory = fitsCategory(
                        activity.category,
                        registryCategory
                      );
                      const matchesSearch =
                        activity.activity
                          .toLowerCase()
                          .includes(registrySearch.toLowerCase()) ||
                        activity.location
                          .toLowerCase()
                          .includes(registrySearch.toLowerCase()) ||
                        activity.remarks
                          .toLowerCase()
                          .includes(registrySearch.toLowerCase());
                      return matchesCategory && matchesSearch;
                    }).length
                  }
                </strong>{" "}
                matching records out of 15 statutory CSR investments.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CSRActivities;
