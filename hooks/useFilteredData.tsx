// Assuming useFilteredData is in a file like hooks/useFilteredData.ts
import { SearchItem } from "@/lib/types"; // Adjust the import path as necessary
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type FilteredDataProps = {
  data: SearchItem[];
};

export const useFilteredData = ({ data }: FilteredDataProps) => {
  const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState<SearchItem[]>([]);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [searchParams, data]);

  return {
    filteredData,
  };
};
