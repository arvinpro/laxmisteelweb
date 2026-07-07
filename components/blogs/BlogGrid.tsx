import { BLOG_POSTS } from "@/data/blogs";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}