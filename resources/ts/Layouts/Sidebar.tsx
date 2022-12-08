import { Link, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import { FaProductHunt, FaQuoteLeft, FaStoreAlt } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';
import route from 'ziggy-js';
import { AiFillDashboard } from 'react-icons/ai';

export default function Sidebar({ setting_app, openSideBar, setOpenSideBar }: { setting_app: App.Models.Setting; openSideBar: any; setOpenSideBar: any }) {
  return (
    <aside className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 ${openSideBar ? 'translate-x-0' : '-translate-x-80'}`}>
      <div className="relative border-b border-white/20">
        <a className="flex items-center gap-4 py-6 px-8" href="#/">
          <img src={typeof setting_app.options.logo == 'string' ? setting_app.options.logo : ''} className="inline-block relative object-cover object-center rounded-md" />
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
          <LiSideBar page="dashboard/" url={route('dashboard')} text="Dashboard" icon={<AiFillDashboard className="w-5 h-5 text-inherit" />} />
        </ul>
        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
            <p className="block antialiased font-sans text-sm leading-normal text-white font-black uppercase opacity-75">Master</p>
          </li>
          <LiSideBar page="Toko/" url={route('toko.master')} text="Toko" icon={<FaStoreAlt className="w-5 h-5 text-inherit" />} />
          <LiSideBar page="Produk/" url={route('produk.master')} text="Produks" icon={<FaProductHunt className="w-5 h-5 text-inherit" />} />
          <LiSideBar page="kategori/master" url={route('produk_kategori.master')} text="Kategori" icon={<BiCategoryAlt className="w-5 h-5 text-inherit" />} />
          <li className="border-b mx-4 border-b-blue-gray-800"></li>
          <LiSideBar page="faq" url={route('faq.master')} text="FAQ" icon={<FaQuoteLeft className="w-5 h-5 text-inherit" />} />
        </ul>
      </div>
    </aside>
  );
}

const LiSideBar = ({ url = '#', text, icon, page }: any) => {
  const { component } = usePage();
  return (
    <li>
      <Link href={url} className={(component.includes(page) ? 'bg-blue-500 hover:bg-blue-500/10 active:bg-blue-500/30' : 'hover:bg-white/10 active:bg-white/30') + `middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white  w-full flex items-center gap-4 px-4 capitalize active`}>
        {icon}
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">{text}</p>
      </Link>
    </li>
  );
};
