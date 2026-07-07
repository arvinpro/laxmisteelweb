import ProductView from "@/components/products/ProductView";

export const metadata = {
  title: "Our Products",
  description:
    "Explore Laxmi Steel Limited's range of premium TMT rebars, billets, and high-quality steel products designed for residential, commercial, and infrastructure construction.",

  openGraph: {
    title: "Steel Products | Laxmi Steel Limited",
    description:
      "Discover premium-quality TMT rebars and steel products manufactured for strength, durability, and safety.",
    images: ["/company/dccc (18).jpg"],
  },
};

function page() {
  return (
    <div>
        <ProductView />
    </div>
  )
}

export default page