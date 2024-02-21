import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useFilteredData = ({ data }: any) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const query = searchParams.get("search");
  }, [searchParams]);

  return <div>useFilteredData</div>;
};
