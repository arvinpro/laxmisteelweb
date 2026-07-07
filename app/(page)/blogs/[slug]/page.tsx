import { notFound } from "next/navigation";
import { getBlog, getBlogs } from "@/lib/blog";
import BlogContent from "@/components/blogs/BlogContent";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return getBlogs().map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPage({ params }: Props) {
    const { slug } = await params;
    
    console.log("all blogs slug: ", slug)

    const blog = getBlog(slug);

    console.log("blog: ", blog)

    if (!blog) {
        notFound();
    }

    return <BlogContent post={blog} />;
}