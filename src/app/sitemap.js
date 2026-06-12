import { getAllBlogs } from "@/lib/blog";
import { siteConfig } from "@/data/blogs";

export default function sitemap() {
  const blogs = getAllBlogs();

  const blogEntries = blogs.map((blog) => ({
    url: `${siteConfig.url}/blogs/${blog.slug}`,
    lastModified: new Date(blog.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `${siteConfig.url}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
