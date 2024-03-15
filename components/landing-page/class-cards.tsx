import { mainRoutes } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";

const ClassCards = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-2 items-center justify-center h-full">
      {mainRoutes.map((route, index) => (
        <Link key={index} href={route.href} className="w-full h-full">
          <Card className="group transition-all duration-150 ease-in-out hover:scale-105 hover:cursor-pointer bg-mustard-1 w-full h-full">
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
        </Link>
      ))}
    </div>
  );
};

export default ClassCards;
