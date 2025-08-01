'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from './chevron-right-icon';
import { sportsSections, type SportsSection } from '../../data/sports-articles';

export function SportsSection() {
  const getColorClasses = (color: 'orange' | 'green') => {
    return color === 'orange' ? 'bg-[#F59E0B]' : 'bg-[#10B981]';
  };

  const getDiagonalColor = (color: 'orange' | 'green') => {
    return color === 'orange' ? 'border-bottom-corner-orange' : 'border-bottom-corner-green';
  };

  return (
    <section className="max-w-[1024px] mx-auto py-8 sm:py-12 px-4 font-inter">
      {sportsSections.map((section) => (
        <div key={section.sport} className="mb-12 last:mb-0">
          {/* Header Bar */}
          <div className="flex items-center justify-between">
            {/* Sport Title with SVG Background */}
            <div className="relative">
              <div className={`${getColorClasses(section.color)} rounded-tl-lg p-4 sm:p-6 relative overflow-hidden border-t-[1px] border-l-[1px]  border-black`}>
                {/* SVG Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Image
                    src={`/images/${section.sport}.svg`}
                    alt={`${section.title} background`}
                    width={800}
                    height={100}
                    className="w-[800px] h-[100px]"
                  />
                </div>
                {/* Title Text */}
                <h2 className="text-2xl sm:text-3xl font-bold text-font-black relative z-10">
                  {section.title}
                </h2>
              </div>
            </div>
            
            <Link 
              href={`/sports/${section.sport}`} 
              className="text-font-blue hover:text-[#B70BF5] transition-colors flex items-center gap-2"
            >
              <span className="text-sm sm:text-base">More on {section.title}</span>
              <ChevronRightIcon className="w-6 h-6" />
            </Link>
          </div>

          {/* Article Cards Layout */}
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 px-6 py-4">
            {/* Large Article Card (Left) */}
            <div className="w-full lg:w-6/12 relative group">
              <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-b-lg">
                <Image
                  src={section.articles[0]?.image || ''}
                  alt={section.articles[0]?.title || ''}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                      {section.title}
                    </span>
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">
                    {section.articles[0]?.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {section.articles[0]?.author}
                  </p>
                </div>

                {/* Diagonal Accent */}
                <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[60px] sm:border-l-[80px] lg:border-l-[100px] border-l-transparent border-b-[60px] sm:border-b-[80px] lg:border-b-[100px] ${getDiagonalColor(section.color)}`} />
              </div>
            </div>

            {/* Small Article Cards (Right) - Side by side with same height */}
            <div className="w-full lg:w-6/12 flex flex-row gap-4 sm:gap-6">
              {section.articles.slice(1).map((article) => (
                <div key={article.id} className="relative group flex-1">
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-white text-black px-2 py-1 rounded-full text-xs font-medium">
                          {section.title}
                        </span>
                      </div>
                      <h3 className="text-white text-sm sm:text-base font-bold mb-1">
                        {article.title}
                      </h3>
                      <p className="text-white/90 text-xs">
                        {article.author}
                      </p>
                    </div>

                    {/* Diagonal Accent */}
                    <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[30px] sm:border-l-[40px] border-l-transparent border-b-[30px] sm:border-b-[40px] ${getDiagonalColor(section.color)}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
} 