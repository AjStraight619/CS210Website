"use client";
import { navbarLinks } from "@/lib/data";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { ModeToggle } from "../ui/theme-toggle";
import SearchDialog from "./search-dialog";
import TopicsAccordionMobile from "./topics-accordion-mobile";
import TopicsDropdown from "./topics-dropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 z-50 h-16 w-full border-b shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold">
          CS 210
        </Link>
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
          <div className="">
            <ModeToggle />
          </div>
        </div>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>

        <Dialog
          open={isMenuOpen}
          onOpenChange={() => setIsMenuOpen((prev) => !prev)}
        >
          <DialogContent className="space-y-2">
            <SearchDialog />
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
            <TopicsAccordionMobile />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
