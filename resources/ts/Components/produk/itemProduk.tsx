import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import route from 'ziggy-js';
import { placeholderProdukLazyLoad } from '.';

export default function ItemProduk({ produk }: { produk: App.Models.Produk }) {
  return (
    <div className="products-item group">
      <div className="img text-center">
        <Link href={route('produk.show', produk.id)}>
          <LazyLoadImage src={produk.images[0].image_link} alt={produk.images[0].name} title={produk.images[0].name} className="products-item-img w-full h-[120px] md:h-[200px]" effect="opacity" placeholderSrc={placeholderProdukLazyLoad} />
        </Link>
      </div>
      <Link href={route('produk.show', produk.id)}>
        <div className="w-full text-center pb-3 px-3">
          <div className="title text-xs md:text-base font-bold group-hover:text-primary">{produk.name} </div>
          <div className="price text-gray-800 text-xs md:text-base font-sans">
            <NumericFormat value={produk.variants[0].price_after_diskon} allowLeadingZeros thousandSeparator="," displayType="text" prefix="Rp. " />
          </div>
        </div>
      </Link>
    </div>
  );
}
