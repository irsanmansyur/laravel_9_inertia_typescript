import { useState, useEffect, Fragment } from 'react';
import { Typography, Button, Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { Link, usePage } from '@inertiajs/inertia-react';
import route from 'ziggy-js';
import { AuthInterface, PropsInertiaInterface } from '@ts/utils/interfaces/inertia.interfaces';
export default function NavbarTop({ setting, auth }: { setting: App.Models.Setting; auth: AuthInterface }) {
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
    <nav className="border-b border-b-primary border-opacity-20 px-2 xl:px-0">
      <div className="flex justify-between max-w-screen-xl w-full mx-auto py-1 items-center ">
        <div className="md:w-1/3"></div>
        <div className="logo md:justify-center flex justify-start w-2/3 md:w-1/3">
          <Link href="/">
            <img className="block max-h-[60px] md:max-h-[70px]" src={setting.options.logo + ''} />
          </Link>
        </div>
        <div className="flex items-center gap-2 md:w-1/3 justify-end">
          <div className="search-button sm:px-3 p-2 bg-primary bg-opacity-10 rounded-full flex items-center ">
            <BsSearch className="cursor-pointer text-primary" />
            <input className="bg-transparent text-primary focus:outline-none px-3 hidden sm:inline max-w-[200px]" placeholder="search" />
          </div>
          <div className="profile-icon">
            <Fragment>
              <Popover placement="bottom-end">
                <PopoverHandler>
                  <span className="cursor-pointer">
                    <AiOutlineUser className="h-6 w-6 text-primary" />
                  </span>
                </PopoverHandler>
                <PopoverContent className="p-1">
                  <div className="flex flex-col gap-2">
                    {!auth.user ? (
                      <a href={route('login')}>
                        <Button size="sm">Login</Button>
                      </a>
                    ) : (
                      <a href={route('dashboard')}>
                        <Button>Dashboard</Button>
                      </a>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            </Fragment>
          </div>
          <div className="keranjang">
            <SlBasket className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
}
