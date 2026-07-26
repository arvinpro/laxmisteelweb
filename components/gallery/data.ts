import { StaticImageData } from "next/image";

export interface GalleryItem {
  id: string;
  title: string;
  image: string | StaticImageData;
}
export const GALLERY_IMAGES: GalleryItem[] = [
  // Company Images (39)
  ...Array.from({ length: 39 }, (_, i) => ({
    id: `c${i + 1}`,
    title: `Company Image ${i + 1}`,
    image: `/company-webp/dccc (${i + 1}).webp`,
  })),

  // Project Images (17)
  ...Array.from({ length: 17 }, (_, i) => ({
    id: `p${i + 1}`,
    title: `Project Image ${i + 1}`,
    image: `/project/image1 (${i + 1}).jpeg`,
  })),
];