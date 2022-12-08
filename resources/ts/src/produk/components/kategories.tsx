import React, { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { getKategoriAll } from '../data/produks-data';

export default function KategoriesList({ kategori, setKategori }: { kategori: App.Models.ProdukKategori | undefined; setKategori: any }) {
  const [widtWindow, setWidtWindow] = useState<number>(window.innerWidth);

  const [kategories, setKategories] = useState<App.Models.ProdukKategori[]>([]);
  useEffect(() => {
    const windowResize = () => {
      setWidtWindow(window.innerWidth);
    };
    window.addEventListener('resize', windowResize);
    if (widtWindow > 400) {
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
    <div id="kategori">
      <div className="kategori-header">
        <h2 className="uppercase border-b font-bold py-3">Category</h2>
      </div>
      <div className="kategori-body">
        <ul className="w-full py-3 text-[14px] font-robotoMono">
          <li onClick={(e) => setKategori(null)} className={`cursor-pointer py-1 flex items-center ${!kategori ? 'text-primary' : ''}`}>
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
                }}
              >
                {ktgr.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
