import HomePage from "@/components/home/HomePage";

export const metadata = {
  title: "Home",
  description:
    "Laxmi Steel Limited is one of Nepal's trusted steel manufacturers, producing premium-quality TMT rebars, billets, and steel products for residential, commercial, industrial, and infrastructure projects.",

  openGraph: {
    title: "Laxmi Steel Limited",
    description:
      "Trusted steel manufacturer in Nepal delivering premium-quality TMT rebars, billets, and steel solutions for modern construction.",
    images: ["/company/dccc (2).jpg"],
  },
};

function Home() {
  return (
    <>
    <HomePage />
    </>
  )
}

export default Home