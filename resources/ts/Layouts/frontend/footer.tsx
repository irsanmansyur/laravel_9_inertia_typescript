import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { BsFillGeoAltFill, BsFillMegaphoneFill } from 'react-icons/bs';
import { FaQuestionCircle } from 'react-icons/fa';
import route from 'ziggy-js';
import FooterFaq from './footer-faq';

export default function Footer({ setting }: { setting: App.Models.Setting }) {
  return (
    <footer className=" bg-primary bg-opacity-80   text-white border-t-4 border-amber-900 ">
      <div className="grid grid-cols-3 max-w-screen-xl mx-auto pb-5 border-b border-ambyar-100 pt-5 px-3">
        <div className="flex justify-center items-center gap-2 text-sm sm:text-lg font-extrabold font-robotoMono antialiased tracking-tighter border-r last:border-r-0 flex-col sm:flex-row">
          <BsFillGeoAltFill className="w-[36px] h-[36px] " />
          Find Store
        </div>
        <div className="flex justify-center items-center gap-2 text-sm sm:text-lg font-extrabold font-robotoMono antialiased tracking-tighter border-r last:border-r-0 flex-col sm:flex-row">
          <BsFillMegaphoneFill className="w-[36px] h-[36px] " />
          Reseller
        </div>
        <Link href={route('faq.home')} className="flex justify-center items-center gap-2 text-sm sm:text-lg font-extrabold font-robotoMono antialiased tracking-tighter border-r last:border-r-0 flex-col sm:flex-row">
          <FaQuestionCircle className="w-[36px] h-[36px] " />
          <span>FAQ</span>
        </Link>
      </div>
      <div id="faq-footer" className="max-w-screen-xl mx-auto px-3">
        <FooterFaq />
      </div>
      <div className=" p-4   md:p-6 md:flex md:items-center md:justify-between border-t mt-8 pt-2 border-amber-100">
        <span className="text-sm sm:text-center font-bold">
          © {new Date().getFullYear()}
          <a href="#" className="hover:underline mx-2">
            {setting.options.name}™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm  sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <Link href={route('contact')} className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
