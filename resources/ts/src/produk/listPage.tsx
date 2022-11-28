import { Option, Select } from '@material-tailwind/react';
import BreadcrumbsFrontend from '@ts/Layouts/frontend/breadcrumb';
import React, { useState } from 'react';
import KategoriesList from './components/kategories';
import ListProduk from './components/list-produk';

export default function ListPage({ produks, kategori: ktg }: { produks: Laravel.Interface.Pagination<App.Models.Produk>; kategori?: App.Models.ProdukKategori }) {
  const [kategori, setKategori] = useState<App.Models.ProdukKategori | undefined>(ktg);
  const breadcrumb = [{ text: !kategori ? 'Product All' : 'Product > ' + kategori.name, active: true, link: '#' }];
  return (
    <div className="py-3 max-w-screen-xl w-full mx-auto">
      <BreadcrumbsFrontend breadcrumb={breadcrumb} />
      <div className="flex w-full flex-wrap">
        <div className="w-full md:w-1/6">
          <KategoriesList kategori={kategori} setKategori={setKategori} />
        </div>
        <div className="w-full md:w-5/6 px-3">
          <ListProduk produks={produks} kategori={kategori} />
        </div>
      </div>
    </div>
  );
}
