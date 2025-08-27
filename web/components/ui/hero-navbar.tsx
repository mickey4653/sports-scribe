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
import { ProfileIcon } from "./profile-icon";
import { LogoWithShapes } from "./logo-with-shapes";
import { SearchIcon } from "./search-icon";
import { useState } from "react";

export function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Scores", href: "/scores" },
    { name: "Teams", href: "/teams" },
    { name: "Highlights", href: "/highlights" },
  ];

  return (
    <Navbar 
      className="bg-sport-blue shadow-sm py-2 sm:py-4" 
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link as={NextLink} href="/" className="text-inherit">
            <LogoWithShapes />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4 lg:gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link 
              as={NextLink} 
              href={item.href} 
              color="foreground" 
              className="font-medium text-white hover:text-gray-200 transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side content */}
      <NavbarContent justify="end" className="gap-2 sm:gap-3">
        <NavbarItem className="hidden sm:block">
          <Input
            placeholder="Search..."
            startContent={<SearchIcon className="w-4 h-4" />}
            className="w-[140px] lg:w-[160px] h-[30px]"
            size="sm"
            classNames={{
              input: "bg-white",
              inputWrapper: "bg-white opacity-50",
            }}
          />
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            className="text-white hover:text-gray-200"
            aria-label="Profile"
          >
            <ProfileIcon className="w-5 h-5" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="bg-sport-blue pt-6">
        {/* Mobile Search */}
        <div className="mb-6 px-4">
          <Input
            placeholder="Search..."
            startContent={<SearchIcon className="w-4 h-4" />}
            className="w-full"
            size="sm"
            classNames={{
              input: "bg-white",
              inputWrapper: "bg-white opacity-50",
            }}
          />
        </div>
        
        {/* Mobile Menu Items */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              as={NextLink}
              href={item.href}
              className="w-full text-white hover:text-gray-200 transition-colors py-3 px-4 block font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
