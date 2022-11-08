import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "@/Layouts/components/Footer";
import ToggleSide from "./components/ToggleSide";

export default function DashboardLayout({ children }) {
  const [openSideBar, setOpenSideBar] = useState(null);
  return (
    <>
      <div className="min-h-screen bg-blue-gray-50/50">
        <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div className="p-4 xl:ml-80">
          <Navbar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
          <ToggleSide />
          <main className="mx-auto flex min-h-[calc(100vh-130px)] justify-between flex-col">
            <div className="content">{children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
