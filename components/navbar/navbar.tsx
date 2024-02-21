import { navbarLinks } from "@/lib/data";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 h-20 w-full border-b shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <a href="/" className="text-xl font-bold">
          CS 210
        </a>
        <div className="flex items-center space-x-4">
          {navbarLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-lg font-medium text-primary/70 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
