import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import route from 'ziggy-js';

export default function ItemProduk({ produk }: { produk: App.Models.Produk }) {
  return (
    <div className="products-item ">
      <div className="img text-center">
        <Link href={route('produk.show', produk.id)}>
          <LazyLoadImage src={produk.images[0].image_link} alt="OMBRELLA Lip Totem Tint NEW SHADES" title="OMBRELLA Lip Totem Tint NEW SHADES" className="products-item-img w-full h-[120px] md:h-[200px]" effect="opacity" placeholderSrc="https://via.placeholder.com/150/0000FF/808080?Text=Digital.com" />
        </Link>
      </div>
      <Link href="#">
        <div className="w-full text-center pb-3 px-3">
          <div className="title text-xs md:text-base font-bold ">{produk.variants[0].name_variant} </div>
          <div className="price text-gray-800 text-xs md:text-base font-sans">
            <NumericFormat value={produk.variants[0].price_after_diskon} allowLeadingZeros thousandSeparator="," displayType="text" prefix="Rp. " />
          </div>
        </div>
      </Link>
    </div>
  );
}
