import { discordSectionData } from "@/lib/data";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const DiscordLinks = () => {
  return (
    <div className="w-full max-w-4xl p-6 flex bg-salmon-1 rounded-md mb-8">
      <ul className="w-full flex flex-row items-center justify-between">
        {discordSectionData.map((item) => (
          <li className="" key={item.name}>
            <Card className="h-[16rem] bg-bgMain-1">
              <CardHeader>
                <CardTitle className="flex flex-row items-center justify-between gap-4">
                  <span className="text-indigo-400">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscordLinks;
