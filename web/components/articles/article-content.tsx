"use client";

import { useState } from "react";
import { Card, CardBody, Chip, Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

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
      {/* Hero Section with Image Overlay - Full Width */}
      {featuredImage && (
        <div className="relative h-96 md:h-[500px] mb-8 overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="container mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Chip color="primary" variant="solid" size="sm" className="bg-blue-600 text-white">
                  {sport}
                </Chip>
                <span className="text-xs text-gray-300">•</span>
                <span className="text-xs text-white">{formatDate(createdAt)}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-3 max-w-4xl mx-auto">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="container mx-auto px-4">
        <div className="flex gap-12">
          {/* Left Sidebar - Author Info */}
          <div className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{author}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sports Writer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Covering the latest in sports with deep analysis and insights. Specializing in soccer, basketball, and football coverage.
                </p>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 max-w-4xl">
            {/* Author Info for Mobile/Tablet */}
            <div className="xl:hidden mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(createdAt)}</p>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="article-body prose prose-lg max-w-none">
              {content.split('\n\n').map((paragraph, index) => {
                // Handle different paragraph types
                if (paragraph.startsWith('### ')) {
                  // Section heading
                  return (
                    <h3 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12 first:mt-0">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('> ')) {
                  // Blockquote
                  return (
                    <blockquote key={index} className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
                      <div className="text-lg text-gray-700 dark:text-gray-300 italic">
                        {paragraph.replace('> ', '')}
                      </div>
                    </blockquote>
                  );
                } else if (paragraph.startsWith('- ')) {
                  // List item
                  const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700 dark:text-gray-300">
                          {item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.trim()) {
                  // Regular paragraph
                  return (
                    <p key={index} className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Social Sharing */}
            <div className="flex items-center gap-4 mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
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
          </div>

          {/* Right Sidebar - Related Articles */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              {relatedArticles.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedArticles.slice(0, 3).map((article) => (
                      <Link key={article.id} href={`/articles/${article.id}`}>
                        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                          <CardBody className="p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Chip size="sm" color="primary" variant="flat">
                                {article.sport}
                              </Chip>
                              <span className="text-xs text-gray-500">{formatDate(article.createdAt)}</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors text-sm">
                              {article.title}
                            </h4>
                          </CardBody>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
