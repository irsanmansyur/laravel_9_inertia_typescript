import { Link } from '@inertiajs/inertia-react';
import { Button, Popover, PopoverContent, PopoverHandler } from '@material-tailwind/react';
import { Kategori } from '@ts/data/kategori-data';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { AiFillLeftSquare } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import route from 'ziggy-js';

export default function NavbarKategori({ openNav, setOpenNav }: any) {
  const [kategoriSelected, setKategoriSelected] = useState<App.Models.ProdukKategori>();
  const [kategories, setKategories] = useState<App.Models.ProdukKategori[]>([]);
  const sideBarRef = useRef<HTMLDivElement>();

  useEffect(() => {
    Kategori.data.getKategoriAll().then((resp) => {
      setKategories(resp.data.kategories);
    });
  }, [openNav]);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (openNav && e.target == sideBarRef.current) setOpenNav(false);
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [openNav]);

  return (
    <div>
      <div ref={sideBarRef} className={`absolute left-0 top-0 h-screen w-full bg-primary bg-opacity-20 backdrop-blur-lg pr-10 duration-500 ease-in-out ${!openNav ? '-translate-x-full' : ''}`}>
        <div className="h-full  bg-white opacity-100 overflow-y-auto relative p-5">
          <div>
            <div className="header flex items-center">
              <span className="text-lg font-inconsolata border-b border-primary pb-1">Category</span>
            </div>
            <div className="body font-patrickHand">
              <Fragment>
                {kategories.map((kategori, i) => {
                  return (
                    <div key={i}>
                      <div className="relative overflow-hidden border-b">
                        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                        <div className="h-12 w-full flex items-center pr-10">
                          <h1 className="flex justify-between w-full">{kategori.name}</h1>
                        </div>
                        <div className="absolute top-3 right-0 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </div>
                        <div className="overflow-hidden bg-white transition-all duration-500 h-0 peer-checked:h-auto peer-checked:pb-3">
                          <ul className="flex gap-3 flex-col">
                            {kategori.all_childrens.map((child, i) => {
                              return (
                                <li key={i} className="text-base text-gray-900 hover:text-primary flex gap-1 items-center">
                                  <BsDot />
                                  <Link onSuccess={() => setOpenNav(false)} href={route('produk.all') + `?kategori_id=${child.id}`}>
                                    {child.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            </div>
          </div>
          <div className={`absolute top-0 right-0 cursor-pointer `} onClick={(e) => setOpenNav(false)}>
            <AiFillLeftSquare className="h-6 w-6" />
          </div>
        </div>
      </div>
      <ul className="hidden w-0 sm:w-full sm:flex justify-center max-w-screen-xl  mx-auto py-1 items-center gap-4 overflow-x-auto ">
        {kategories.map((kategori, i) => {
          return (
            <li key={i} onMouseLeave={(e) => setKategoriSelected(undefined)} onMouseEnter={(e) => setKategoriSelected(kategori)} className={`font-bold font-patrickHand tracking-widest hover:border-b-2 border-b hover:border-b-primary hover:text-primary ${kategoriSelected == kategori ? 'border-b-primary text-primary' : ''}`}>
              <Popover placement="bottom" open={kategoriSelected == kategori} handler={(open) => (!open ? setKategoriSelected(undefined) : setKategoriSelected(kategori))}>
                <PopoverHandler>
                  <div className="flex justify-center text-center whitespace-nowrap">{kategori.name}</div>
                </PopoverHandler>
                <PopoverContent className="p-1 z-10">
                  <div className="flex gap-2 max-w-lg flex-wrap">
                    {kategori.all_childrens.length > 0 ? (
                      kategori.all_childrens.map((child, i) => {
                        return (
                          <Link key={i} href={route('produk.all') + `?kategori_id=${child.id}`}>
                            <Button color="amber" className="bg-opacity-50 py-1" size="sm" key={i}>
                              {child.name}
                            </Button>
                          </Link>
                        );
                      })
                    ) : (
                      <Link href={route('produk.all') + `?kategori_id=${kategori.id}`}>
                        <Button color="amber" className="bg-opacity-50 py-1 flex justify-center" size="sm">
                          {kategori.name}
                        </Button>
                      </Link>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
