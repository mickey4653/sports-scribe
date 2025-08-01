import { ArticleGrid } from "@/components/articles/article-grid";
import { getAllArticles } from "@/data/sample-articles";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Sports Articles</h1>
      <ArticleGrid articles={articles} />
    </div>
  );
}
