"use client";

import { useState } from "react";
import {
  Droplets,
  Recycle,
  TreeDeciduous,
  Users,
  Scale,
  GraduationCap,
  Flame,
  ShieldCheck,
} from "lucide-react";

interface ESGInitiative {
  id: string;
  title: string;
  shortDesc: string;
  metric: string;
  metricLabel: string;
  details: string[];
  icon: React.ReactNode;
}

const ENVIRONMENT_INITIATIVES: ESGInitiative[] = [
  {
    id: "env-1",
    title: "Closed-Loop Hydrological System",
    shortDesc:
      "Recycling and neutralising water to prevent industrial discharge into Nepalese watersheds.",
    metric: "95%",
    metricLabel: "Water Recycled",
    icon: <Droplets className="text-emerald-500" size={24} />,
    details: [
      "Advanced sedimentation and scale-filtration systems installed in Nawalparasi.",
      "Saves over 150 million litres of fresh ground water annually.",
      "Zero liquid discharge (ZLD) guarantees no wastewater reaches local agricultural river valleys.",
    ],
  },
  {
    id: "env-2",
    title: "Recuperator Clean Combustion",
    shortDesc:
      "Capturing waste thermodynamic heat from reheating furnaces to pre-heat fuel inputs.",
    metric: "18%",
    metricLabel: "Fuel Consumption Cut",
    icon: <Flame className="text-[#B8001F]" size={24} />,
    details: [
      "German-engineered furnace recuperator technology recycles draft heat.",
      "Lowers greenhouse gas emission factor per ton of rebar produced.",
      "Saves high-quality fuel imports, reducing national balance of trade impact.",
    ],
  },
  {
    id: "env-3",
    title: "Nawalparasi Afforestation Program",
    shortDesc:
      "Creating robust vegetative micro-climates surrounding our industrial manufacturing zones.",
    metric: "12,000+",
    metricLabel: "Trees Planted",
    icon: <TreeDeciduous className="text-[#D4A017]" size={24} />,
    details: [
      "Native dense foliage trees planted around the Khaireni, Sunwal plant site.",
      "Actively monitors and reduces dust, suspended particulate matter (SPM), and atmospheric noise.",
      "Regular preservation projects in alliance with surrounding community forest groups.",
    ],
  },
  {
    id: "env-4",
    title: "Precision Scrap Recycling Feed",
    shortDesc:
      "Upgrading metal recycling by-products to feed clean steel-making operations.",
    metric: "100%",
    metricLabel: "By-Product Re-use",
    icon: <Recycle className="text-[#B8001F]" size={24} />,
    details: [
      "All mill scale and crop shear endings are captured and diverted from landfills.",
      "Sourced predominantly from sustainable domestic and certified regional scrap streams.",
      "Bypasses highly polluting primary blast-furnace methods through advanced induction melting.",
    ],
  },
];

const SOCIAL_INITIATIVES: ESGInitiative[] = [
  {
    id: "soc-1",
    title: "Community Education Support",
    shortDesc:
      "Sponsoring schools and smart labs in Nawalparasi to break rural educational barriers.",
    metric: "4 Schools",
    metricLabel: "Sustained Annually",
    icon: <GraduationCap className="text-[#D4A017]" size={24} />,
    details: [
      "Provides high-speed computers, textbooks, and protective uniforms to underprivileged students.",
      "Sustained operational funding for primary school structures near Sunwal.",
      "Annual technical learning workshops to bridge digital divides.",
    ],
  },
  {
    id: "soc-2",
    title: "Construction Safety Training",
    shortDesc:
      "Raising technical safety competence among masons, builders, and bar benders in Nepal.",
    metric: "5,000+",
    metricLabel: "Masons Certified",
    icon: <Users className="text-emerald-500" size={24} />,
    details: [
      "Free technical seminars on steel properties, correct site handling, and seismic-secure hooks.",
      "Direct safety gear kit donation (helmets, gloves, boots) to manual labor shifts on major infrastructure projects.",
      "Equips homebuilders with vital engineering awareness for building codes compliance.",
    ],
  },
];

const GOVERNANCE_INITIATIVES: ESGInitiative[] = [
  {
    id: "gov-1",
    title: "ISO 14001:2015 Compliance",
    shortDesc:
      "Establishing rigorous, audited protocols for environmental management and regulatory standards.",
    metric: "100%",
    metricLabel: "Audit Score",
    icon: <Scale className="text-[#B8001F]" size={24} />,
    details: [
      "Full compliance with NS-191, ISO 9001:2015, and ISO 14001 guidelines.",
      "Regular independent third-party assessments of heavy gas emissions, noise, and discharge vectors.",
      "Transparent documentation and public availability of safety sheets and technical test matrices.",
    ],
  },
  {
    id: "gov-2",
    title: "Safe Living Work Environments",
    shortDesc:
      "Implementing highest European-standard occupational safety protocols inside heavy rolling mills.",
    metric: "Zero",
    metricLabel: "Major Milestones",
    icon: <ShieldCheck className="text-emerald-500" size={24} />,
    details: [
      "Strict protective gear policies across hazardous steel rolling sections.",
      "Continuous real-time gas sensors and automation cut-offs in reheating rooms.",
      "Zero minor operations injury records across three operational shifts.",
    ],
  },
];

function SustainabilityActivities() {
  const [activeTab, setActiveTab] = useState<"env" | "soc" | "gov">("env");

  const getInitiatives = () => {
    switch (activeTab) {
      case "env":
        return ENVIRONMENT_INITIATIVES;
      case "soc":
        return SOCIAL_INITIATIVES;
      case "gov":
        return GOVERNANCE_INITIATIVES;
    }
  };

  const currentInitiatives = getInitiatives();
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 space-y-12">
        {/* Core Header */}
        <div className="text-center space-y-2">
          <span className="text-[#B8001F] text-sm font-mono font-semibold uppercase tracking-[0.2em] block mb-1">
            Our Commitments
          </span>
          <h2 className="font-serif text-2xl md:text-4xl font-normal text-brand-black">
            The ESG Pillars of Laxmi Steels
          </h2>
          <p className="text-sm text-brand-muted font-sans font-light max-w-lg mx-auto">
            Governed by Nepalese industrial frameworks and international
            metrics, we ensure compliance, growth, and circular accountability.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center font-sans text-sm uppercase tracking-wider font-semibold border-b border-brand-border">
          <button
            onClick={() => setActiveTab("env")}
            className={`px-6 py-4 border-b-2 transition-all cursor-pointer focus:outline-none ${activeTab === "env" ? "border-[#B8001F] text-brand-black" : "border-transparent text-brand-muted hover:text-brand-black"}`}
          >
            Environment
          </button>
          <button
            onClick={() => setActiveTab("soc")}
            className={`px-6 py-4 border-b-2 transition-all cursor-pointer focus:outline-none ${activeTab === "soc" ? "border-[#B8001F] text-brand-black" : "border-transparent text-brand-muted hover:text-brand-black"}`}
          >
            Social Responsibility
          </button>
          <button
            onClick={() => setActiveTab("gov")}
            className={`px-6 py-4 border-b-2 transition-all cursor-pointer focus:outline-none ${activeTab === "gov" ? "border-[#B8001F] text-brand-black" : "border-transparent text-brand-muted hover:text-brand-black"}`}
          >
            Industrial Governance
          </button>
        </div>

        {/* Tab Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 select-none">
          {currentInitiatives.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-brand-border/80 rounded-sm p-6 space-y-5 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-sand/50 rounded-sm">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-brand-black leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-brand-muted leading-relaxed font-sans">
                  {item.shortDesc}
                </p>

                <div className="bg-brand-sand p-4 border border-brand-border/40 rounded-sm space-y-2">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-muted block">
                    Initiative Milestones:
                  </span>
                  <ul className="space-y-2 text-sm font-sans text-brand-black">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-red mt-1 font-bold text-sm flex-shrink-0">
                          &bull;
                        </span>
                        <span className="leading-relaxed font-light">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Unique Metric Bottom Strip */}
              <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-muted">
                  Targeted Metric Outcome
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold font-serif text-brand-black">
                    {item.metric}
                  </span>
                  <span className="text-[14px] font-mono text-[#D4A017] uppercase tracking-wide bg-brand-sand px-2 py-0.5 border border-[#D4A017]/30 font-semibold">
                    {item.metricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SustainabilityActivities;
