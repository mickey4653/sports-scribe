import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Chip,
} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

export interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  sport: string;
  createdAt: string;
  author?: string;
  featuredImage?: string;
}

export function ArticleCard({
  id,
  title,
  excerpt,
  sport,
  createdAt,
  author = "AI Sports Writer",
  featuredImage,
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="w-full h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
      {/* Featured Image */}
      {featuredImage && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Chip color="primary" variant="solid" size="sm" className="bg-blue-600 text-white">
              {sport}
            </Chip>
          </div>
        </div>
      )}
      
      <CardHeader className={`pb-0 pt-2 px-4 flex-col items-start ${!featuredImage ? 'pt-4' : ''}`}>
        {!featuredImage && (
          <div className="flex justify-between items-start w-full mb-2">
            <Chip color="primary" variant="flat" size="sm">
              {sport}
            </Chip>
            <small className="text-default-500 text-xs">
              {formatDate(createdAt)}
            </small>
          </div>
        )}
        <h3 className="font-bold text-lg leading-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardBody className="overflow-visible py-3">
        <p className="text-default-600 text-sm line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center justify-between mt-4">
          <small className="text-default-500 text-xs">By {author}</small>
          {featuredImage && (
            <small className="text-default-500 text-xs">
              {formatDate(createdAt)}
            </small>
          )}
        </div>
      </CardBody>
      
      <CardFooter className="pt-0 pb-4">
        <Button
          as={Link}
          href={`/articles/${id}`}
          color="primary"
          variant="flat"
          size="sm"
          className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
}
