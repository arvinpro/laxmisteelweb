import { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  const url = `https://laxmisteel.com.np/blogs/${blog.slug}`;

  return {
    title: `${blog.title} | Laxmi Steel`,
    description: blog.excerpt,
    keywords: [
      blog.category,
      "Laxmi Steel",
      "TMT Bars Nepal",
      "Steel Nepal",
      "Construction Nepal",
      ...blog.title
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(" ")
        .filter((word) => word.length > 3),
    ],

    authors: [{ name: "Laxmi Steel" }],
    category: blog.category,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "article",
      url,
      title: blog.title,
      description: blog.excerpt,
      publishedTime: new Date(blog.date).toISOString(),
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;

  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  return <BlogContent post={blog} />;
}