"use client";

import { useState } from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

interface HighlightArticle {
  id: string;
  title: string;
  author: string;
  sport: string;
  featuredImage: string;
  excerpt: string;
}

interface HighlightsSectionProps {
  articles: HighlightArticle[];
}

export function HighlightsSection({ articles }: HighlightsSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentArticle = articles[currentSlide];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Safety check - if no articles, don't render
  if (!articles.length || !currentArticle) {
    return null;
  }

  return (
    <section className="highlights-section relative py-8 sm:py-12 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8">
          <div className="flex items-center flex-1 mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mr-4 sm:mr-6">
              Highlights
            </h2>
            <div className="flex-1 h-[2px] bg-highlight-bg mt-4 hidden sm:block"></div>
          </div>
        </div>
        
        {/* Social Media Icons - Positioned directly under the horizontal line on the right */}
        <div className="flex justify-end mb-6 sm:mb-8 -mt-10 sm:-mt-10">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors hover:scale-110"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={16}
                height={16}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Link>
            <Link 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors hover:scale-110"
            >
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={16}
                height={16}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors hover:scale-110"
            >
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Link>
          </div>
        </div>

        {/* Hero Article Card */}
        <div className="relative mb-6 sm:mb-8">
          <Card className="overflow-hidden rounded-3xl">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
              <Image
                src={currentArticle.featuredImage}
                alt={currentArticle.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Article Content Overlay - Responsive text sizing */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Chip 
                    color="primary" 
                    variant="solid" 
                    size="sm" 
                    className="bg-blue-600 text-white text-xs sm:text-sm"
                  >
                    {currentArticle.sport}
                  </Chip>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                  {currentArticle.title}
                </h3>
                <p className="text-white text-xs sm:text-sm md:text-base">
                  Written by: {currentArticle.author}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Pagination Indicators - Responsive sizing */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-orange-500 scale-110'
                  : 'border-2 border-orange-500 bg-transparent'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Background Elements - Responsive sizing */}
      {/* <div className="absolute bottom-0 right-0 pointer-events-none">
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-orange-500 transform rotate-45 translate-x-8 translate-y-8 sm:translate-x-12 sm:translate-y-12 md:translate-x-16 md:translate-y-16 opacity-20"></div>
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-teal-500 transform rotate-45 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 md:translate-x-8 md:translate-y-8 opacity-20"></div>
      </div> */}
    </section>
  );
} 