import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const LayoutPublic = () => {
  return (
    <main className="w-screen h-screen overflow-hidden bg-slate-900 text-slate-100 relative">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default LayoutPublic;
