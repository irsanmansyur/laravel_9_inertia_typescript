import { useState, useEffect } from 'react';
import { Navbar, MobileNav, Typography, Button, IconButton } from '@material-tailwind/react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Link } from '@inertiajs/inertia-react';
import { InertiaBaseInterface } from '@ts/utils/interfaces/inertia.interfaces';
export default function NavbarTop({ setting }: { setting: App.Models.Setting }) {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <nav className="border-b px-2 xl:px-0">
      <div className="flex justify-between max-w-screen-xl w-full mx-auto py-1 items-center ">
        <div className="md:w-1/3">dfdf</div>
        <div className="logo md:justify-center flex justify-start md:w-1/3">
          <Link href="/">
            <img className="block max-h-[70px]" src={setting.options.logo + ''} />
          </Link>
        </div>
        <div className="flex items-center gap-2 md:w-1/3 justify-end">
          <div className="search-button sm:px-3 p-2 bg-gray-200 rounded-full flex items-center ">
            <BsSearch className="cursor-pointer" />
            <input className="bg-transparent focus:outline-none px-3 hidden sm:inline max-w-[200px]" placeholder="search" />
          </div>
          <div className="profile-icon">
            <AiOutlineUser className="h-6 w-6" />
          </div>
          <div className="keranjang">
            <SlBasket className="h-6 w-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}
