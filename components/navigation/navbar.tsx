"use client";
import { navbarLinks } from "@/lib/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../ui/theme-toggle";
import SearchDialog from "./search-dialog";
import TopicsDropdown from "./topics-dropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 h-16 w-full border-b shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <a href="/" className="text-xl font-bold">
          CS 210
        </a>
        {/* Full Navbar for larger screens */}
        <div className="hidden sm:flex items-center space-x-4">
          {navbarLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-medium text-primary/70 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <TopicsDropdown />
          <SearchDialog />
          <div>
            <ModeToggle />
          </div>
        </div>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 right-0 z-10 w-48 bg-white shadow-lg p-4 sm:hidden">
            {navbarLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block text-primary/70 hover:text-primary mb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* Additional mobile menu items here */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
