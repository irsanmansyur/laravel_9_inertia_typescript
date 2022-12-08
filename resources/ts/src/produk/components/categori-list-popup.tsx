import { Fragment, useEffect, useState } from 'react';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import { BsCheck } from 'react-icons/bs';
import { getKategoriAll } from '../data/produks-data';
import { BiCategoryAlt } from 'react-icons/bi';

export default function CategoriListPopup({ kategori, setKategori }: { kategori: App.Models.ProdukKategori | undefined; setKategori: any }) {
  const [open, setOpen] = useState(false);
  const [widtWindow, setWidtWindow] = useState<number>(window.innerWidth);
  const handleOpen = () => setOpen(!open);
  const [kategories, setKategories] = useState<App.Models.ProdukKategori[]>([]);
  useEffect(() => {
    const windowResize = () => {
      setWidtWindow(window.innerWidth);
    };
    windowResize();
    window.addEventListener('resize', windowResize);

    if (widtWindow <= 400) {
      getKategoriAll().then((resp) => {
        setKategories(resp.data.kategories);
      });
    }
    if (kategori) setKategori(kategori);
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  return (
    <Fragment>
      {widtWindow <= 400 && <BiCategoryAlt className="w-8 h-8 cursor-pointer" onClick={handleOpen} />}
      <Dialog className="z-50" size="xxl" open={open} handler={handleOpen}>
        <DialogHeader>Kategories</DialogHeader>
        <DialogBody divider className="bg-white z-50">
          <ul className="w-full py-3 text-[14px] font-robotoMono">
            <li
              onClick={(e) => {
                setKategori(null);
                setOpen(false);
              }}
              className={`cursor-pointer py-1 flex items-center ${!kategori ? 'text-primary' : ''}`}
            >
              Semua {!kategori && <BsCheck />}
            </li>
            {kategories.map((ktgr) => {
              if (kategori && kategori.id == ktgr.id)
                return (
                  <li
                    className="cursor-pointer py-1 text-primary flex items-center gap-2"
                    key={ktgr.id}
                    onClick={(e) => {
                      setKategori(ktgr);
                      setOpen(false);
                    }}
                  >
                    {ktgr.name} <BsCheck />
                  </li>
                );
              return (
                <li
                  className="py-1 cursor-pointer hover:text-primary hover:text-opacity-50"
                  key={ktgr.id}
                  onClick={(e) => {
                    setKategori(ktgr);
                    setOpen(false);
                  }}
                >
                  {ktgr.name}
                </li>
              );
            })}
          </ul>
        </DialogBody>
        <DialogFooter>
          <Button variant="text" size="sm" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
