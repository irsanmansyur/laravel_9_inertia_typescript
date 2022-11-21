import { Link, usePage } from "@inertiajs/inertia-react";
import { Breadcrumbs } from "@material-tailwind/react";
import React from "react";
import route from "ziggy-js";
import NotificationNavbar from "./components/NotificationNavbar";
import ProfileNameButton from "./components/ProfileName";

export default function Navbar({ openSideBar, setOpenSideBar }: any) {
  const {
    // @ts-expect-error
    auth: { user },
  } = usePage().props;
  return (
    <>
      <nav className="block backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 w-full max-w-full px-4 bg-white text-white rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5 border-gray-200">
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
          <Breadcrumbs>
            <Link href={route("dashboard")} className="opacity-60">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Link>
            <a href="#" className="opacity-60">
              <span>Components</span>
            </a>
            <a href="#">Breadcrumbs</a>
          </Breadcrumbs>
          <div className="flex items-center">
            <div className="mr-auto md:mr-4 md:w-56">
              <div className="relative w-full min-w-[200px] h-10">
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                  placeholder=" "
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                  Type here
                </label>
              </div>
            </div>
            <ButtonSidebar setOpenSideBar={setOpenSideBar} />
            <ProfileNameButton user={user} />
            <NotificationNavbar />
          </div>
        </div>
      </nav>
    </>
  );
}

const ButtonSidebar = ({ setOpenSideBar }: any) => {
  return (
    <button
      onClick={(e) => setOpenSideBar((e: boolean) => !e)}
      className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
      type="button"
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" strokeWidth={3} className="h-6 w-6 text-blue-gray-500">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
        </svg>
      </span>
    </button>
  );
};
