'use client';

import { useState } from 'react';
import Image from 'next/image';
import { horizontalSlides, verticalSlides } from '../../data/hero-data';

export function HeroSection() {
  const [currentHorizontalSlide, setCurrentHorizontalSlide] = useState(0);
  const [currentVerticalSlide, setCurrentVerticalSlide] = useState(0);

  const nextHorizontalSlide = () => {
    setCurrentHorizontalSlide((prev) => 
      prev === horizontalSlides.length - 1 ? 0 : prev + 1
    );
  };

  const nextVerticalSlide = () => {
    setCurrentVerticalSlide((prev) => 
      prev === verticalSlides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="max-w-[1024px] mx-auto h-[413px] flex justify-center gap-6 p-8 bg-sport-dark">
      {/* Left Box - Horizontal Slider (2/3 width) */}
      <div className="w-4/6 relative">
        <div className="relative h-[340px] overflow-hidden rounded-lg bg-gray-200">
          {/* Current slide */}
          <div className="relative h-full">
            <Image
              src={horizontalSlides[currentHorizontalSlide]?.image || ''}
              alt={horizontalSlides[currentHorizontalSlide]?.title || ''}
              fill
              className="object-cover"
            />
            
            {/* Overlay with text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h2 className="text-white text-2xl font-bold mb-2">
                {horizontalSlides[currentHorizontalSlide]?.title}
              </h2>
              <p className="text-white text-lg font-bold mb-1">
                {horizontalSlides[currentHorizontalSlide]?.description}
              </p>
              <p className="text-white/80 text-sm">
                Written by: {horizontalSlides[currentHorizontalSlide]?.author}
              </p>
            </div>
          </div>

          {/* Auto-advance timer */}
          <div className="absolute top-4 right-4">
            <button
              onClick={nextHorizontalSlide}
              className="text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
              aria-label="Next horizontal slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal navigation dots - moved outside and centered */}
        <div className="flex justify-center mt-2">
          <div className="flex gap-2">
            {horizontalSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHorizontalSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentHorizontalSlide 
                    ? 'bg-sport-orange' 
                    : 'border border-sport-orange bg-transparent'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Box - Vertical Slider (1/3 width) */}
      <div className="w-1/3 relative">
        <div className="relative h-[340px] overflow-hidden rounded-lg">
          {/* Stacked slides with vertical animation */}
          {verticalSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-500 ${
                index === currentVerticalSlide 
                  ? 'translate-y-0' 
                  : index < currentVerticalSlide 
                    ? '-translate-y-full' 
                    : 'translate-y-full'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              
              {/* Color overlay for differentiation */}
              <div 
                className={`absolute inset-0 opacity-20 ${
                  index % 3 === 0 ? 'bg-sport-green' : 
                  index % 3 === 1 ? 'bg-sport-yellow' : 
                  'bg-sport-orange'
                }`}
              />
              
              {/* Slide title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-bold text-lg mb-1">{slide.title}</h3>
                {slide.description && (
                  <p className="text-white/90 text-sm font-medium mb-1">
                    {slide.description}
                  </p>
                )}
                {slide.author && (
                  <p className="text-white/70 text-xs">
                    By: {slide.author}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Auto-advance timer */}
          <div className="absolute bottom-4 right-4">
            <button
              onClick={nextVerticalSlide}
              className="text-white bg-black/30 rounded-full p-2 hover:bg-black/50"
              aria-label="Next vertical slide"
            >
              ↓
            </button>
          </div>
        </div>

        {/* Vertical navigation - moved outside the box */}
        <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
          {verticalSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVerticalSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentVerticalSlide 
                  ? 'bg-sport-orange' 
                  : 'border border-sport-orange bg-transparent'
              }`}
              aria-label={`Go to vertical slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 