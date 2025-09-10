"use client";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { laLigaSlides } from "../../../data/la-liga-slides";

interface SportPageProps {
  params: {
    sport: string;
  };
}

export default function SportPage({ params }: SportPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % laLigaSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + laLigaSlides.length) % laLigaSlides.length);
  };

  // Only show La Liga section for soccer
  if (params.sport !== 'soccer') {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {params.sport} Articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">
                Sample {params.sport} Article
              </h3>
            </CardHeader>
            <CardBody>
              <p>This is a placeholder for {params.sport} articles.</p>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* La Liga Section */}
      <section className="mb-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          
          <div className="w-16 h-16 flex items-center justify-center">
            <Image 
              src="/images/premier-logo.svg" 
              alt="Premier League Logo" 
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold">All La Liga News</h2>
            <svg 
              className="w-5 h-5 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Slideshow Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {laLigaSlides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <Card className="h-80">
                    <div className="relative h-full">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center rounded-xl"
                        style={{ 
                          backgroundImage: `url(${slide.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                      </div>
                      
                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="mb-2">
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                            {slide.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">
                          {slide.title}
                        </h3>
                        <p className="text-sm opacity-90 mb-1">
                          {slide.teams}
                        </p>
                        <p className="text-xs opacity-75">
                          {new Date(slide.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
            aria-label="Next slide"
          >
            <Image 
              src="/icons/arrow-right.svg" 
              alt="Arrow Right" 
              width={24}
              height={24}
              className="object-contain"
            />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {laLigaSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-red-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for other sections */}
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">More sections coming soon...</h3>
        <p className="text-gray-600">Additional content sections will be added here.</p>
      </div>
    </div>
  );
}
