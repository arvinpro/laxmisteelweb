import GalleryView from "@/components/gallery/GalleryView";

export const metadata = {
  title: "Gallery",
  description:
    "Browse the official gallery of Laxmi Steel Limited featuring our manufacturing facilities, steel production process, projects, machinery, and company events.",

  openGraph: {
    title: "Gallery | Laxmi Steel Limited",
    description:
      "Explore photos showcasing our manufacturing excellence, steel products, and completed projects.",
    images: ["/company/dccc (8).jpg"],
  },
};

function page() {
  return (
    <div>
        <GalleryView />
    </div>
  )
}

export default page