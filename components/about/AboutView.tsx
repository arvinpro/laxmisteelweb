
import banner from "@/assets/images/laxmisteelbanner.jpg";
import Team from "./Team";
import Certificate from "./Certificate";
import ChairmanMessage from "./ChairmanMessage";
import MissionVisionFocus from "./MissionVisionFocus";
import CompanyStory from "./CompanyStory";
import Breadcrumb from "../ui/Breadcrumb";

export default function AboutView() {

  return (
    <div id="about-us-view-section">
      {/* PAGE HERO */}
      <div
        className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 overflow-hidden select-none border-b border-brand-red/20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60) 45%, rgba(184, 0, 31, 0.25) 100%), url(${banner.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          {/* Breadcrumbs Navigation Aid */}
          <Breadcrumb />

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            About Laxmi Steels
          </h1>
          <p className="font-condensed text-brand-gold text-lg uppercase tracking-wider font-bold">
            Nepal's Largest Steel Manufacturer Since 2008
          </p>
        </div>
      </div>

      {/* COMPANY STORY SECTION */}
      <CompanyStory />

      {/* MISSION, VISION, VALUES SECTION */}
      <MissionVisionFocus/>

      {/* CHAIRMAN MESSAGE SECTION */}
     <ChairmanMessage />

      {/* LEADERSHIP CLUSTER */}
      <Team />

      {/* CERTIFICATIONS SECTIONS */}
      <Certificate />
    </div>
  );
}
