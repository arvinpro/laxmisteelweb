import React from "react";

function Highlights() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="bg-[#B8001F] text-white p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] [background-size:250px_250px] pointer-events-none opacity-40" />
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
            Building Nepal’s Infrastructures for a Green Tomorrow.
          </h3>
          <p className="text-xs text-white/80 max-w-xl mx-auto leading-relaxed font-sans">
            Laxmi Steels believes high-ductility rebar is more than structural
            security—it is our accountability to preserve local environments,
            safeguard lives, and build durable legacies.
          </p>
          <div className="pt-2">
            <span className="border border-white/40 hover:border-white bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest px-6 py-3 transition-colors inline-flex items-center gap-2 rounded-none">
              <span>ESTD 2008 &bull; NEPAL</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
