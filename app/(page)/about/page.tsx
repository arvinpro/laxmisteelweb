import AboutView from "@/components/about/AboutView";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Laxmi Steel Limited, our history, manufacturing excellence, quality standards, certifications, and commitment to building Nepal with reliable steel products.",

  openGraph: {
    title: "About Laxmi Steel Limited",
    description:
      "Discover our journey, manufacturing expertise, and commitment to producing world-class steel products in Nepal.",
    images: ["/company/dccc (23).jpg"],
  },
};

function page() {
  return (
    <div>
      <AboutView />
    </div>
  )
}

export default page