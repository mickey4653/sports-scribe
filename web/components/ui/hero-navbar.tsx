"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@heroui/react";
import NextLink from "next/link";

import { LogoWithShapes } from "./logo-with-shapes";
import { SearchIcon } from "./search-icon";
import { useState, useEffect } from "react";

export function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Articles", href: "/articles" },
    { name: "Categories", href: "/categories" },
    { name: "Highlights", href: "/highlights" },
  ];

  const desktopMenuItems = [
    { name: "NBA", href: "/sports/nba" },
    { name: "NFL", href: "/sports/nfl" },
    { name: "MLB", href: "/sports/mlb" },
    { name: "NHL", href: "/sports/nhl" },
    { name: "Soccer", href: "/sports/soccer" },
    { name: "Tennis", href: "/sports/tennis" },
    { name: "Golf", href: "/sports/golf" },
  ];

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <Navbar 
        className="bg-sport-blue shadow-sm py-2 sm:py-4 relative z-50" 
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        maxWidth="full"
      >
        <div className="w-full flex items-center justify-between px-4">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link as={NextLink} href="/" className="text-inherit">
              <LogoWithShapes />
            </Link>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 flex justify-center max-w-md mx-8">
            <Input
              placeholder="Search..."
              startContent={<SearchIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
              className="w-full"
              size="sm"
              classNames={{
                input: "bg-white text-xs sm:text-sm",
                inputWrapper: "bg-white opacity-90 hover:opacity-100 transition-opacity rounded-full",
              }}
            />
          </div>

          {/* Right side - Hamburger Menu */}
          <div className="flex-shrink-0">
            <Button
              isIconOnly
              variant="light"
              className="text-white hover:text-gray-200 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span 
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                  }`}
                />
              </div>
            </Button>
          </div>
        </div>
      </Navbar>

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Side Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-sport-blue shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white border-opacity-20">
          <h2 className="text-white text-lg sm:text-xl font-semibold">Menu</h2>
          <Button
            isIconOnly
            variant="light"
            className="text-white hover:text-gray-200"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 sm:p-6">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                <Link
                  as={NextLink}
                  href={item.href}
                  className="w-full text-white hover:text-gray-200 transition-colors py-3 sm:py-4 px-4 block font-medium text-base sm:text-lg rounded-lg hover:bg-white hover:bg-opacity-10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
          <div className="text-white text-opacity-70 text-xs sm:text-sm">
            <p>© 2024 Sports Scribe</p>
          </div>
        </div>
      </div>
    </>
  );
}
