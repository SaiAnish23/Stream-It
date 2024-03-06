import React from "react";
// import Navbar from "";
import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-white">
      {/* <div>Layout</div> */}
      <Navbar></Navbar>

      <div className="flex h-full pt-20">{children}</div>
    </div>
  );
};

export default BrowseLayout;
