import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Avatar, Button, IconButton } from "@material-tailwind/react";
import DashboardLayout from "@ts/Layouts/DashboardLayout";
import { PaginateLaravelInterface } from "@ts/utils/interfaces/PaginateLaravelInterface";
import React from "react";
import { GrAdd } from "react-icons/gr";
import route from "ziggy-js";
import Swal from "sweetalert2";

export default function Toko({ tokos }: { tokos: PaginateLaravelInterface<App.Models.Toko> }) {
  return (
    <DashboardLayout>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-16">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6 flex justify-between items-center">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Daftar TOKO</h6>
          <Link href={route("toko.master.add")}>
            <IconButton variant="outlined" color="white">
              <GrAdd />
            </IconButton>
          </Link>
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
                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tokos.data.map((toko) => (
                <TrTable toko={toko} key={toko.id} />
              ))}
              {tokos.data.length < 1 && (
                <tr>
                  <td colSpan={999} className="text-center p-4 rounded text-red-500">
                    Maaf data kosong
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

const TrTable = ({ toko }: { toko: App.Models.Toko }) => {
  const deleteToko = (e: React.MouseEvent) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(route("toko.master.delete", toko.id));
      }
    });
  };
  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">{toko.name}</td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <Avatar src={toko.logo} alt="avatar" className="border" />
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        {toko.status == "active" ? (
          <div className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-green-600 to-green-400 text-white py-0.5 px-2 text-[11px] font-medium" style={{ opacity: 1 }}>
            <div className=" mt-px">ACTIVE</div>
          </div>
        ) : (
          <div className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-yellow-600 to-yellow-400 text-white py-0.5 px-2 text-[11px] font-medium" style={{ opacity: 1 }}>
            <div className=" mt-px">NOT ACTIVE</div>
          </div>
        )}
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div className="flex justify-center items-center gap-1">
          <Link href={route("toko.master.edit", toko.id)}>
            <Button size="sm">Edit</Button>
          </Link>
          <Button size="sm" onClick={deleteToko} variant="outlined" color="red">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};
