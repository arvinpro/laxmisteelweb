import { ChevronRight } from "lucide-react";

function CSRHero() {
  return (
    <section>
      {/* 1. HERO HERO BANNER */}
      <div
        className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-[#8F9E75]/20 overflow-hidden select-none bg-cover bg-center animate-fade-in"
        id="csr-hero"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.66) 45%, rgba(143, 158, 117, 0.2) 100%), url('/downloaded/csr.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#8F9E75]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-mono">
            <span>Home</span>
            <ChevronRight size={10} className="text-gray-500" />
            <span className="text-[#8F9E75] font-semibold">CSR Core</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight leading-none">
            Corporate Social Responsibility
          </h1>
          <p className="text-brand-gold text-sm uppercase tracking-widest font-semibold">
            Forging Stronger & Safe Communities Across Nepal
          </p>
          <div className="h-1 w-24 bg-[#8F9E75] mt-4 mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default CSRHero;
