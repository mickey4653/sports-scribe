import { Card, CardHeader, CardBody } from "@heroui/react";
import { ArticleCard, ArticleCardProps } from "./article-card";

export interface RelatedArticlesProps {
  articles: ArticleCardProps[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <h2 className="text-xl font-bold">Related Articles</h2>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
