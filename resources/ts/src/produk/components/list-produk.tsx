import { Inertia } from '@inertiajs/inertia';
import { Alert, Option, Select } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';
import route from 'ziggy-js';
import { getDataProduks } from '../data/produks-data';
import CardRelatedProduk from './card-related.produk';

export default function ListProduk({ kategori, produks: prdks }: { kategori?: App.Models.ProdukKategori; produks: Laravel.Interface.Pagination<App.Models.Produk> }) {
  const [sort, setSort] = useState<string>('newest');
  const [produks, setProduks] = useState(prdks);

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const params: any[] = [{ key: 'sort', value: sort }];
    if (kategori?.id) params.push({ key: 'kategori_id', value: kategori.id });
    getDataProduks(params).then((resp) => {
      setProduks(resp.data.produks);
    });
  }, [kategori, sort]);

  return (
    <div id="produk-list">
      <div className="produk-list-header flex justify-between items-center py-3">
        <div className="title text-xl font-bold font-robotoMono">{!kategori ? 'All' : kategori.name}</div>
        <div className="">
          <Select label="Sort by" value="newest" onChange={(value) => setSort(value + '')} className="text-[12px] w-[130px]  px-1 md:w-[200px] py-1">
            <Option value="newest">Newest</Option>
            <Option value="lowest_price">Lowest Price</Option>
            <Option value="highest_price">Highest Price</Option>
          </Select>
        </div>
      </div>
      <div className="produk-list-header">
        {!produks || produks.data.length < 1 ? (
          <Alert className="w-full text-center" variant="gradient">
            empty product
          </Alert>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {produks.data.map((produk, i) => (
              <CardRelatedProduk key={i} produk={produk} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
