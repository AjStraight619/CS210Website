"use client";
import { useFilteredData } from "@/hooks/useFilteredData";
import { searchData } from "@/lib/data";
import { ExternalLink, Search } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import SearchBar from "./search";

const SearchDialog = () => {
  const { filteredData } = useFilteredData({ data: searchData });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative inline-flex items-center">
          <button className="w-10 h-10 p-2 border rounded-md text-primary/70 hover:text-primary z-[999] sm:hidden">
            <Search className="m-auto" />
          </button>
          <button className="hidden sm:flex w-full p-2 border rounded-md text-primary/70 hover:text-primary items-center justify-center">
            <Search className="mr-2" />
            <span>Search...</span>
          </button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="pt-4">
          <SearchBar />
        </DialogHeader>
        {!filteredData.length ? (
          <div className="text-center text-primary">Start typing to search</div>
        ) : (
          <ul className="flex flex-col">
            {filteredData.map((item) => (
              <li
                className="flex flex-row items-center justify-between"
                key={item.id}
              >
                <span>{item.name}</span>
                {item.href && (
                  <Link
                    className="inline-flex gap-2 text-primary/70 hover:text-primary"
                    href={item.href}
                  >
                    <span className="text-sm">Go to</span>
                    <ExternalLink size={15} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
