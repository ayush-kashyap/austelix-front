import { ArticleForm } from "@/features/articles/components/article-form";

export const metadata = { title: "Edit article · Austelix CMS" };

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  return <ArticleForm mode="edit" articleId={id} />;
}
