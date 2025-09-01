import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-footer-bg rounded-full sm:rounded-full py-4 sm:py-6 px-4 sm:px-6 md:px-8 shadow-lg">
          {/* Mobile Layout - Stacked */}
          <div className="flex flex-col space-y-4 md:hidden">
            {/* Brand Name - Centered on mobile */}
            <div className="text-white text-center">
              <span className="text-xs sm:text-sm">Sport</span>
              <span className="text-xs sm:text-sm font-bold">Scribe</span>
            </div>
            
            {/* Navigation Links - Centered and stacked */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm"
              >
                Contact Us
              </Link>
              <Link 
                href="/sitemap" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm"
              >
                Sitemap
              </Link>
              <Link 
                href="/cookies" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm"
              >
                Cookies Settings
              </Link>
              <Link 
                href="/faq" 
                className="text-white hover:text-gray-300 transition-colors text-xs sm:text-sm"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:flex items-center justify-between">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link 
                href="/contact" 
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link 
                href="/sitemap" 
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Sitemap
              </Link>
              <Link 
                href="/cookies" 
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                Cookies Settings
              </Link>
              <Link 
                href="/faq" 
                className="text-white hover:text-gray-300 transition-colors text-sm"
              >
                FAQ
              </Link>
            </div>

            {/* Brand Name */}
            <div className="text-white">
              <span className="text-sm">Sport</span>
              <span className="text-sm font-bold">Scribe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}