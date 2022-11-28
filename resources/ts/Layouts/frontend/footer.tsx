import React from 'react';

export default function Footer({ setting }: { setting: App.Models.Setting }) {
  return (
    <footer className="p-4 bg-primary bg-opacity-80 md:flex md:items-center md:justify-between md:p-6 text-white ">
      <span className="text-sm  sm:text-center font-bold">
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
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
