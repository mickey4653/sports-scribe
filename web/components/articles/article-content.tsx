"use client";

import { useState } from "react";
import { Card, CardBody, CardHeader, Chip, Button } from "@heroui/react";

export interface ArticleContentProps {
  title: string;
  content: string;
  sport: string;
  createdAt: string;
  author?: string;
  subtitle?: string;
  featuredImage?: string;
  relatedArticles?: Array<{
    id: string;
    title: string;
    sport: string;
    createdAt: string;
  }>;
}

export function ArticleContent({
  title,
  content,
  sport,
  createdAt,
  author = "AI Sports Writer",
  subtitle,
  featuredImage,
  relatedArticles = [],
}: ArticleContentProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${title} - Sports Scribe`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="article-content">
      {/* Article Header */}
      <header className="article-header">
        <div className="flex items-center gap-3 mb-4">
          <span className="article-sport-tag">{sport}</span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{formatDate(createdAt)}</span>
        </div>
        
        <h1 className="article-title">{title}</h1>
        
        {subtitle && (
          <p className="article-subtitle">{subtitle}</p>
        )}
        
        <div className="article-meta">
          <span className="article-author">By {author}</span>
          <span className="article-date">{formatDate(createdAt)}</span>
        </div>
      </header>

      {/* Featured Image */}
      {featuredImage && (
        <div className="mb-8">
          <img 
            src={featuredImage} 
            alt={title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Article Body */}
      <div className="article-body">
        {content.split('\n\n').map((paragraph, index) => {
          // Handle different paragraph types
          if (paragraph.startsWith('### ')) {
            // Section heading
            return (
              <h3 key={index} className="article-section-title">
                {paragraph.replace('### ', '')}
              </h3>
            );
          } else if (paragraph.startsWith('> ')) {
            // Blockquote
            return (
              <blockquote key={index} className="article-highlight-box">
                <div className="article-highlight-content">
                  {paragraph.replace('> ', '')}
                </div>
              </blockquote>
            );
          } else if (paragraph.startsWith('- ')) {
            // List item
            const items = paragraph.split('\n').filter(item => item.startsWith('- '));
            return (
              <ul key={index} className="list-disc pl-6 mb-6">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item.replace('- ', '')}
                  </li>
                ))}
              </ul>
            );
          } else if (paragraph.trim()) {
            // Regular paragraph
            return (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            );
          }
          return null;
        })}
      </div>

      {/* Social Sharing */}
      <div className="article-social">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Share this article:</span>
        <Button
          size="sm"
          className="social-button social-button-twitter"
          onClick={() => handleShare('twitter')}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
          Twitter
        </Button>
        <Button
          size="sm"
          className="social-button social-button-facebook"
          onClick={() => handleShare('facebook')}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </Button>
        <Button
          size="sm"
          className="social-button social-button-copy"
          onClick={() => handleShare('copy')}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="article-related">
          <h3 className="article-related-title">Related Articles</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardBody className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Chip size="sm" color="primary" variant="flat">
                      {article.sport}
                    </Chip>
                    <span className="text-xs text-gray-500">{formatDate(article.createdAt)}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {article.title}
                  </h4>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
