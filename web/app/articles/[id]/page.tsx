import { ArticleContent } from "@/components/articles/article-content";
import { getArticleById } from "@/data/sample-articles";
import { notFound } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Articles
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium line-clamp-1">
            {article.title}
          </span>
        </nav>

        {/* Article Content */}
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
    </div>
  );
}
