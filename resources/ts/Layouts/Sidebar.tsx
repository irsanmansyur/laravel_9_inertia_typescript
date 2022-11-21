import { Link, usePage } from "@inertiajs/inertia-react";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaProductHunt, FaStoreAlt } from "react-icons/fa";
import route from "ziggy-js";

export default function Sidebar({ openSideBar, setOpenSideBar }: any) {
  return (
    <aside className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 ${openSideBar ? "translate-x-0" : "-translate-x-80"}`}>
      <div className="relative border-b border-white/20">
        <a className="flex items-center gap-4 py-6 px-8" href="#/">
          <img src={"/images/vincidy.png"} className="inline-block relative object-cover object-center rounded-md" />
          {/* <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">Material Tailwind React</h6> */}
        </a>
        <button
          onClick={(e) => setOpenSideBar(!openSideBar)}
          className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          type="button"
        >
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <LiSideBar page="Toko/" url={route("toko.master")} text="Toko" icon={<FaStoreAlt className="w-5 h-5 text-inherit" />} />
          <LiSideBar page="Produk/" url={route("produk.master")} text="Produks" icon={<FaProductHunt className="w-5 h-5 text-inherit" />} />
          <LiSideBar url={route("toko.master")} text="Toko" icon={<FaStoreAlt className="w-5 h-5 text-inherit" />} />
        </ul>
        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">auth pages</p>
          </li>
          <li>
            <a href="#/auth/sign-in">
              <button
                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign in</p>
              </button>
            </a>
          </li>
          <li>
            <a href="#/auth/sign-up">
              <button
                className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                  <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">sign up</p>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

const LiSideBar = ({ url = "#", text, icon, page }: any) => {
  const { component } = usePage();
  return (
    <li>
      <Link
        href={url}
        className={
          (component.includes(page) ? "bg-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30" : "hover:bg-white/10 active:bg-white/30") +
          `middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white  w-full flex items-center gap-4 px-4 capitalize active`
        }
      >
        {icon}
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{text}</p>
      </Link>
    </li>
  );
};
