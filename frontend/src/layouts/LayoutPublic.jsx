import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

const LayoutPublic = () => {
  return (
    <main className="w-screen h-screen overflow-hidden bg-slate-900 text-slate-100 relative">
      <Navbar />
      <Outlet />
      <Toaster />
    </main>
  );
};

export default LayoutPublic;
