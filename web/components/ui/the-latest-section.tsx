'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons';
import { latestArticles } from '../../data/latest-articles';

export function TheLatestSection() {
  return (
    <section className="max-w-[1024px] mx-auto py-12 px-4 font-inter">
      {/* Title and Underline */}
      <div className="mb-8 flex items-center">
        <h2 className="text-3xl text-gray-900">
          The<span className="font-bold">Latest</span>
        </h2>
        <div className="flex-1 border-b-2 border-black ml-2 mt-4"></div>
      </div>

      {/* Social Media Icons - moved to extreme right */}
      <div className="flex justify-end gap-4 mb-8 -mt-6">
        <Link href="#" className="text-sport-blue hover:text-sport-orange transition-colors">
          <FacebookIcon className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-sport-blue hover:text-sport-orange transition-colors">
          <TwitterIcon className="w-6 h-6" />
        </Link>
        <Link href="#" className="text-sport-blue hover:text-sport-orange transition-colors">
          <InstagramIcon className="w-6 h-6" />
        </Link>
      </div>

      {/* Image Grid */}
      <div className="space-y-6">
        {/* First Row - Large image on left, small on right */}
        <div className="flex gap-6">
          <div className="w-3/4 relative group">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src={latestArticles[0]?.image || ''}
                alt={latestArticles[0]?.title || 'facebook icon'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Color pattern indicator - diagonal slash */}
              <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] ${
                latestArticles[0]?.colorPattern === 'brown' ? 'border-b-sport-brown' :
                latestArticles[0]?.colorPattern === 'green' ? 'border-b-sport-green' :
                latestArticles[0]?.colorPattern === 'blue' ? 'border-b-sport-blue' :
                'border-b-sport-purple'
              }`} />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{latestArticles[0]?.title}</h3>
                <p className="text-white/90 text-sm mb-2">{latestArticles[0]?.description}</p>
                <p className="text-white/70 text-xs">By: {latestArticles[0]?.author}</p>
              </div>
            </div>
          </div>

          <div className="w-1/4 relative group">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src={latestArticles[1]?.image || ''}
                alt={latestArticles[1]?.title || ''}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Color pattern indicator - diagonal slash */}
              <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] ${
                latestArticles[1]?.colorPattern === 'brown' ? 'border-b-sport-brown' :
                latestArticles[1]?.colorPattern === 'green' ? 'border-b-sport-green' :
                latestArticles[1]?.colorPattern === 'blue' ? 'border-b-sport-blue' :
                'border-b-sport-purple'
              }`} />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white text-lg font-bold mb-1">{latestArticles[1]?.title}</h3>
                <p className="text-white/90 text-xs mb-1">{latestArticles[1]?.description}</p>
                <p className="text-white/70 text-xs">By: {latestArticles[1]?.author}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Small image on left, large on right */}
        <div className="flex gap-6">
          <div className="w-2/5 relative group">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src={latestArticles[2]?.image || ''}
                alt={latestArticles[2]?.title || ''}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Color pattern indicator - diagonal slash */}
              <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] ${
                latestArticles[2]?.colorPattern === 'brown' ? 'border-b-sport-brown' :
                latestArticles[2]?.colorPattern === 'green' ? 'border-b-sport-green' :
                latestArticles[2]?.colorPattern === 'blue' ? 'border-b-sport-blue' :
                'border-b-sport-purple'
              }`} />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white text-lg font-bold mb-1">{latestArticles[2]?.title}</h3>
                <p className="text-white/90 text-xs mb-1">{latestArticles[2]?.description}</p>
                <p className="text-white/70 text-xs">By: {latestArticles[2]?.author}</p>
              </div>
            </div>
          </div>

          <div className="w-3/4 relative group">
            <div className="relative h-[300px] overflow-hidden rounded-lg">
              <Image
                src={latestArticles[3]?.image || ''}
                alt={latestArticles[3]?.title || ''}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Color pattern indicator - diagonal slash */}
              <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-b-[60px] ${
                latestArticles[3]?.colorPattern === 'brown' ? 'border-b-sport-brown' :
                latestArticles[3]?.colorPattern === 'green' ? 'border-b-sport-green' :
                latestArticles[3]?.colorPattern === 'blue' ? 'border-b-sport-blue' :
                'border-b-sport-purple'
              }`} />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{latestArticles[3]?.title}</h3>
                <p className="text-white/90 text-sm mb-2">{latestArticles[3]?.description}</p>
                <p className="text-white/70 text-xs">By: {latestArticles[3]?.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 