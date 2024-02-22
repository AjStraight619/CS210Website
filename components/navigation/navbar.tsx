import { navbarLinks } from "@/lib/data";
import Link from "next/link";
import { ModeToggle } from "../ui/theme-toggle";
import SearchDialog from "./search-dialog";
import TopicsDropdown from "./topics-dropdown";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 h-16 w-full border-b shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <a href="/" className="text-xl font-bold">
          CS 210
        </a>
        <div className="flex items-center space-x-4">
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
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
