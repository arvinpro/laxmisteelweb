import ProjectsView from "@/components/projects/ProjectsView";

export const metadata = {
  title: "Projects",
  description:
    "Explore landmark infrastructure, hydropower, industrial, commercial, and residential projects completed using Laxmi Steel Limited's premium steel products.",

  openGraph: {
    title: "Projects | Laxmi Steel Limited",
    description:
      "See how Laxmi Steel products contribute to Nepal's major construction and infrastructure projects.",
    images: ["/projects/image1 (6).jpeg"],
  },
};

function page() {
  return (
    <div>
        <ProjectsView />
    </div>
  )
}

export default page