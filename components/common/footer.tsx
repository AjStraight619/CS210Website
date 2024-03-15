"use client";

import Link from "next/link";
import React, { Suspense, useState } from "react";
import SearchBar from "../navigation/search";
import SearchDialog from "../navigation/search-dialog";

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full md:max-w-4xl mx-auto p-2 bg-mustard-1 fixed bottom-2 left-0 right-0 rounded-md mt-6">
      <footer className="flex flex-row items-center justify-between px-4">
        <Link href="">Current Resources</Link>
        <SearchDialog setIsMenuOpen={setIsMenuOpen} />
      </footer>
    </div>
  );
};

export default Footer;
