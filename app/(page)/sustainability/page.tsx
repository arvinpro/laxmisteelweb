import SustainabilityView from "@/components/sustainability/SustainabilityView";
export const metadata = {
  title: "Sustainability",
  description:
    "Explore Laxmi Steel Limited's sustainability initiatives, including environmentally responsible manufacturing, energy efficiency, recycling, and resource conservation.",

  openGraph: {
    title: "Sustainability | Laxmi Steel Limited",
    description:
      "Building a greener future with sustainable steel manufacturing and environmentally responsible practices.",
    images: ["/company/dccc (10).jpg"],
  },
};

function page() {
  return (
    <div>
        <SustainabilityView />
    </div>
  )
}

export default page