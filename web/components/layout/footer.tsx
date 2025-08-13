import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-footer-bg py-6 mt-auto border-t border-gray-700">
      <div className="container mx-auto px-4">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col space-y-4 md:hidden">
          {/* Brand Name - Centered on mobile */}
          <div className="text-white text-center">
            <span className="text-sm">Sport</span>
            <span className="text-sm font-bold">Scribe</span>
          </div>
          
          {/* Navigation Links - Centered and stacked */}
          <div className="flex flex-col items-center space-y-3">
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
    </footer>
  );
}
