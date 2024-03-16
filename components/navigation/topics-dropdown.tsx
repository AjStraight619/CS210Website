"use client";

import { topics } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import DropdownButton from "../ui/dropdown-button";

const TopicsDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOpenChange = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger asChild>
        <div>
          <DropdownButton isDropdownOpen={isDropdownOpen} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4 p-1">
        <ul className="flex flex-col justify-center divide-y ">
          {topics.map((topic, index) => (
            <li
              className="flex flex-row items-center justify-between truncate"
              key={topic.name}
            >
              {topic.href && (
                <Link
                  className="inline-flex gap-2 text-primary/70 hover:text-primary font-medium"
                  href={topic.href}
                >
                  {topic.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TopicsDropdown;
