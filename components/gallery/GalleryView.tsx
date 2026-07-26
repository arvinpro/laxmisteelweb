"use client";

import Image, { StaticImageData } from "next/image";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";
import Breadcrumb from "../ui/Breadcrumb";
function GalleryView() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  interface GalleryItem {
    id: string;
    title: string;
    image: string | StaticImageData;
  }

  const removedCompanyImages = [3,4,5,18,19,36,23,25,26,33,32,16,38,34,31,9,11,27,1,22,24,30];
const removedProjectImages = [3, 8,12,9,11];

const GALLERY_IMAGES: GalleryItem[] = [
  // Company Images
  ...Array.from({ length: 39 }, (_, i) => i + 1)
    .filter((num) => !removedCompanyImages.includes(num))
    .map((num) => ({
      id: `c${num}`,
      title: `Company Image ${num}`,
      image: `/company-webp/dccc (${num}).webp`,
    })),

  // Project Images
  ...Array.from({ length: 17 }, (_, i) => i + 1)
    .filter((num) => !removedProjectImages.includes(num))
    .map((num) => ({
      id: `p${num}`,
      title: `Project Image ${num}`,
      image: `/project/image1 (${num}).jpeg`,
    })),
];

  return (
    <section id="gallery-view-section">
      <div id="gallery-view-section">
        {/* Page Hero */}
        <div
          className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-brand-red/20 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.50) 30%, rgba(184, 0, 31, 0.45) 100%), url("/company-webp/dccc (9).webp")`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
            {/* Breadcrumbs Navigation Aid */}
           <Breadcrumb />
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Industrial Plant Gallery
            </h1>
            <p className="text-brand-gold font-bold text-lg max-w-2xl mx-auto uppercase tracking-wide">
              A Visual Journey Through Laxmi's State-of-the-art Manufacturing
              Facilities
            </p>
          </div>
        </div>

        {/* GALLERY GRID (MASONRY LAYOUT) */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 font-sans">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 [&>*]:break-inside-avoid">
            {GALLERY_IMAGES.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="inline-block w-full bg-white border border-brand-border shadow-xs hover:shadow-md transition-all group overflow-hidden cursor-pointer mb-6"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-brand-black">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 scale-100 group-hover:scale-105"
                  />
                  {/* Category Pill overlay on hover */}
                  {/* <span className="absolute top-2.5 left-2.5 bg-brand-black/85 text-brand-gold text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 border border-brand-skyaccent/30 rounded-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.categoryLabel}
                </span> */}

                  {/* Dark hover layer */}
                  <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-brand-red text-white p-3 rounded-full hover:bg-brand-red/90 transition-all transform scale-90 group-hover:scale-100 shadow-lg flex items-center justify-center">
                      <Maximize2 size={16} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FULLSCREEN LIGHTBOX DIALOG */}
        {selectedItem && (
          <div className="fixed inset-0 bg-brand-black/95 z-50 flex items-center justify-center p-4 md:p-8 animate-fade-in">
            <div className="bg-neutral-900 border border-brand-border/10 w-full max-w-4xl overflow-hidden relative shadow-2xl rounded-sm animate-in zoom-in-95 duration-200">
              {/* Close Button top-right */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-brand-black/70 hover:bg-brand-red text-white p-2 rounded-xs transition-colors duration-200 focus:outline-none cursor-pointer z-25"
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>

              {/* Image Section */}
              <div className="lg:col-span-8 bg-black relative flex items-center justify-center aspect-video lg:aspect-auto lg:h-[480px]">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GalleryView;
