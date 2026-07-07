import CSRHero from "./CSRHero";
import CommunityPillers from "./CommunityPillers";
import CSRActivities from "./CSRActivities";

function CSRView() {
  return (
    <section
    className="bg-[#FAF9F5] min-h-screen pb-16 pt-0 select-none"
      id="laxmi-csr-root-view"
    >
        {/* 1. HERO HERO BANNER */}
      <CSRHero />
      
      {/* 2. THREE CORE COMMUNITY PILLARS */}
      <CommunityPillers />

      {/* 3. INTERACTIVE REGISTRY SEARCH & GRID/TABLE PORFTOFLIO */}
      <CSRActivities />

    </section>
  )
}

export default CSRView