import BlogView from "@/components/blogs/BlogView";

export const metadata = {
  title: "Blogs",
  description:
    "Read the latest blogs from Laxmi Steel Limited covering steel manufacturing, construction tips, engineering insights, and industry trends.",

  openGraph: {
    title: "Blogs | Laxmi Steel Limited",
    description:
      "Stay informed with expert articles on steel, construction, and infrastructure development.",
    images: ["/company/dccc (27).jpg"],
  },
};

function page() {
  return (
    <section>
        <BlogView />
    </section>
  )
}

export default page