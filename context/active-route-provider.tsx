"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

type ActiveRouterContextProps = {
  activeRoute: string;
  setActiveRoute: (route: string) => void;
};

export const ActiveRouterContext = createContext<ActiveRouterContextProps>({
  activeRoute: "",
  setActiveRoute: () => {},
});

const ActiveRouterProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [activeRoute, setActiveRoute] = useState<string>(pathname);

  useEffect(() => {
    if (pathname !== "java" && pathname !== "c-plus-plus") setActiveRoute("");
    setActiveRoute(pathname);
  }, [pathname]);
  return (
    <ActiveRouterContext.Provider value={{ activeRoute, setActiveRoute }}>
      {children}
    </ActiveRouterContext.Provider>
  );
};

export default ActiveRouterProvider;

export const useActiveRouteContext = () => {
  const context = React.useContext(ActiveRouterContext);
  if (!context) {
    throw new Error(
      "useActiveRouteContext must be used within an ActiveRouterProvider"
    );
  }
  return context;
};
