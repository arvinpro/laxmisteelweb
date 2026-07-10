import ProductSheets from "./ProductSheets";
import TrustSteel from "./TrustSteel";
import Breadcrumb from "../ui/Breadcrumb";
import ManufactureProcess from "./ManufactureProcess";
import { Suspense } from "react";

function ProductView() {
  return (
    <section id="products-view-section">
      {/* Page Hero */}
      <div
        className="relative bg-neutral-950 pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 overflow-hidden border-b border-brand-red/20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60) 45%, rgba(184, 0, 31, 0.25) 100%), url("/company/banner.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          {/* dynamic breadcrumb */}
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Premium Products
          </h1>
          <p className="text-brand-gold font-bold text-lg max-w-2xl mx-auto uppercase tracking-wide">
            Industrial Strength Steel Engineered for Nepal's Seismic Conditions
          </p>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            At Laxmi Steels, our structures are forged with deep technological
            stewardship. We manufacture robust, earthquake-tolerant structural
            steel with consistent diameters, strict mechanical safety nets, and
            seamless site workability.
          </p>
        </div>
      </div>

      {/* PRODUCT SHEETS MAIN */}
      <Suspense fallback={<div>Loading..</div>}>
        <ProductSheets />
      </Suspense>

      {/* PROCESS INTEGRATION: WHERE STRENGTH IS ENGINEERED */}
      <ManufactureProcess />

      {/* BOTTOM TRUST STRIP */}
      <TrustSteel />
    </section>
  );
}

export default ProductView;
