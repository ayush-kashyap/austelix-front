import { ArticleForm } from "@/features/articles/components/article-form";

export const metadata = { title: "New article · Austelix CMS" };

export default function NewArticlePage() {
  return <ArticleForm mode="create" />;
}
