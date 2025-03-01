import Navbar from "@/components/navbar";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ecom",
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
