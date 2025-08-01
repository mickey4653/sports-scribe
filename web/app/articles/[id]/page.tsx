import { ArticleContent } from "@/components/articles/article-content";
import { getArticleById } from "@/data/sample-articles";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ArticleContent
        title={article.title}
        subtitle={article.subtitle}
        content={article.content}
        sport={article.sport}
        createdAt={article.createdAt}
        author={article.author}
        featuredImage={article.featuredImage}
        relatedArticles={article.relatedArticles}
      />
    </div>
  );
}
