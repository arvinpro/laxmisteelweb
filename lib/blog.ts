import { BLOG_POSTS } from "@/data/blogs";

export function getBlogs() {
    return BLOG_POSTS;
}

export function getBlog(slug: string) {
    return BLOG_POSTS.find(blog => blog.slug === slug);
}

export function getCategories() {
    return [
        "All",
        "Buyers Guide",
        "Tips and Common Mistakes",
        "Engineering Insights",
    ];
}

export function getFeaturedBlog() {
    return BLOG_POSTS[0];
}