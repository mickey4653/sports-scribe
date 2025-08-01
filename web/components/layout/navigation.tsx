import Link from "next/link";
import { Button } from "@heroui/react";

export function Navigation() {
  const sports = [
    { name: "Soccer", href: "/sports/soccer" },
    { name: "Basketball", href: "/sports/basketball" },
    { name: "Football", href: "/sports/football" },
    { name: "Baseball", href: "/sports/baseball" },
    { name: "Hockey", href: "/sports/hockey" },
    { name: "Tennis", href: "/sports/tennis" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Sports Scribe
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/articles" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              Articles
            </Link>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors flex items-center space-x-1">
                <span>Sports</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {sports.map((sport) => (
                    <Link
                      key={sport.name}
                      href={sport.href}
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      {sport.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link 
              href="/admin" 
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Open mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              color="primary" 
              variant="solid"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
