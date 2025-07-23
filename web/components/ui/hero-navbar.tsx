import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Button,
} from "@heroui/react";
import NextLink from "next/link";
import { ProfileIcon } from "./profile-icon";
import { LogoWithShapes } from "./logo-with-shapes";
import { SearchIcon } from "./search-icon";

export function HeroNavbar() {
  return (
    <Navbar className="bg-sport-blue shadow-sm py-4">
      <NavbarBrand>
          <Link as={NextLink} href="/" className="text-inherit left-[40px]">
            <LogoWithShapes />
          </Link>
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="start">
        
        <NavbarItem>
          <Link as={NextLink} href="/" color="foreground" className="font-medium text-white hover:text-gray-200">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/scores" color="foreground" className="font-medium text-white hover:text-gray-200">
            Scores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/teams" color="foreground" className="font-medium text-white hover:text-gray-200">
            Teams
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/highlights" color="foreground" className="font-medium text-white hover:text-gray-200">
            Highlights
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="gap-3">
        <NavbarItem>
          <Input
            placeholder="Search..."
            startContent={<SearchIcon className="w-4 h-4" />}
            className="w-[160px] h-[30px]"
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
    </Navbar>
  );
}
