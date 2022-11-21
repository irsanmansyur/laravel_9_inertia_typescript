import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Button, IconButton } from "@material-tailwind/react";
import DashboardLayout from "@ts/Layouts/DashboardLayout";
import { PaginateLaravelInterface } from "@ts/utils/interfaces/PaginateLaravelInterface";
import React from "react";
import { GrAdd } from "react-icons/gr";
import route from "ziggy-js";
import Swal from "sweetalert2";

export default function Produk({ produks }: { produks: PaginateLaravelInterface<App.Models.Produk> }) {
  return (
    <DashboardLayout>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-16">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6 flex justify-between items-center">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Daftar Produks</h6>
          <Link href={route("produk.master.add")}>
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
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Nama Produk</p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-center">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">Action</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {produks.data.map((produk) => (
                <TrTable produk={produk} key={produk.id} />
              ))}
              {produks.data.length < 1 && (
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

const TrTable = ({ produk }: { produk: App.Models.Produk }) => {
  const deleteProduk = (e: React.MouseEvent) => {
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
        Inertia.delete(route("produk.master.delete", produk.id));
      }
    });
  };
  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">{produk.name}</td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div className="flex justify-center items-center gap-1">
          <Link href={route("produk.master.edit", produk.id)}>
            <Button size="sm">Edit</Button>
          </Link>
          <Button size="sm" onClick={deleteProduk} variant="outlined" color="red">
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
};
