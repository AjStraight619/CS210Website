import { mainRoutes } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../ui/card";

const MainRouteLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-2 items-center justify-center">
      {mainRoutes.map((route, index) => (
        <Link key={index} href={route.href}>
          <div className="w-1/2 sm:w-full mx-auto">
            <Card className="group transition-all duration-150 ease-in-out hover:scale-105 hover:cursor-pointer">
              <CardHeader>
                <CardTitle className="inline-flex gap-2 justify-center items-center">
                  <span>{route.icon}</span>
                  <span>{route.name}</span>
                  <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    <ArrowRight />
                  </span>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainRouteLinks;
