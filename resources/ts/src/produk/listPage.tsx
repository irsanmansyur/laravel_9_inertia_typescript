import { Option, Select } from '@material-tailwind/react';
import BreadcrumbsFrontend from '@ts/Layouts/frontend/breadcrumb';
import React, { useState } from 'react';
import CategoriListPopup from './components/categori-list-popup';
import KategoriesList from './components/kategories';
import ListProduk from './components/list-produk';

export default function ListPage({ produks, kategori: ktg }: { produks: Laravel.Interface.Pagination<App.Models.Produk>; kategori?: App.Models.ProdukKategori }) {
  const [kategori, setKategori] = useState<App.Models.ProdukKategori | undefined>(ktg);
  const breadcrumb = [{ text: !kategori ? 'Product All' : 'Product > ' + kategori.name, active: true, link: '#' }];
  return (
    <div className="p-3 max-w-screen-xl w-full mx-auto">
      <BreadcrumbsFrontend breadcrumb={breadcrumb} />
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-1/6 mt-2 hidden sm:flex">
          <KategoriesList kategori={kategori} setKategori={setKategori} />
        </div>
        <div className="w-full md:w-5/6">
          <ListProduk setKategori={setKategori} produks={produks} kategori={kategori} />
        </div>
      </div>
    </div>
  );
}
