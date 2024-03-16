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

type SearchDialogProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchDialog = ({ setIsMenuOpen }: SearchDialogProps) => {
  const { filteredData } = useFilteredData({ data: searchData });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className=" mt-8 sm:mt-0 sm:w-10 p-2 relative inline-flex items-center border rounded-md text-primary/70 hover:text-primary z-[999] bg-stone-200"
          style={{ minWidth: "200px" }}
        >
          <Search className="absolute left-3 " />
          <span className="ml-8 ">Search...</span>
        </button>
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
