import FAQView from "@/components/FAQView";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Laxmi Steel Limited, our products, manufacturing process, certifications, quality standards, and customer services.",

  openGraph: {
    title: "FAQ | Laxmi Steel Limited",
    description:
      "Get answers to frequently asked questions about our steel products and services.",
    images: ["/company/dccc (12).jpg"],
  },
};
function page() {
  return (
   <FAQView isEmbedded={false}/> 
  )
}

export default page