import DashboardLayout from "@/Layouts/DashboardLayout";
import React from "react";

export default function Toko() {
  return (
    <DashboardLayout>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-20">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Authors Table</h6>
        </div>
        <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Nama Toko</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Logo</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">status</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img src="/material-tailwind-dashboard-react/img/team-2.jpeg" alt="John Michael" className="inline-block relative object-cover object-center w-9 h-9 rounded-md" />
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">John Michael</p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">john@creative-tim.com</p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">Manager</p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">Organization</p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-green-600 to-green-400 text-white py-0.5 px-2 text-[11px] font-medium" style={{ opacity: 1 }}>
                    <div className="  mt-px">online</div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <a href="#" className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
