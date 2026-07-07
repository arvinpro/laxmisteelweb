import CSRView from "@/components/csr/CSRView";

export const metadata = {
  title: "Corporate Social Responsibility",
  description:
    "Learn how Laxmi Steel Limited supports communities through education, environmental initiatives, employee welfare, disaster relief, and sustainable development.",

  openGraph: {
    title: "Corporate Social Responsibility | Laxmi Steel Limited",
    description:
      "Discover our commitment to creating a positive impact through responsible business practices.",
    images: ["/company/dccc (14).jpg"],
  },
};
function page() {
  return (
    <div>
        <CSRView />
    </div>
  )
}

export default page