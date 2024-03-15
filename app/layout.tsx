import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/common/footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CS 210",
  description: "Data Structures and Algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className="relative bg-bgMain-1 text-darkBlue-1">
          {/* <Suspense>
            <Navbar />
          </Suspense> */}
          {children}
          <Suspense>
            <Footer />
          </Suspense>
        </body>
      </html>
    </>
  );
}
