import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ItemProduk() {
  return (
    <div className="products-item ">
      <div className="img text-center">
        <a href="https://somethinc.com/en/product/detail/ombrella-lip-totem-tint-2">
          <LazyLoadImage src="https://images.somethinc.com/uploads/products/thumbs/500x500/SliderHSH-Inggris-01.jpg" alt="OMBRELLA Lip Totem Tint NEW SHADES" title="OMBRELLA Lip Totem Tint NEW SHADES" className="products-item-img w-full max-h-[300px]" effect="opacity" placeholderSrc="https://via.placeholder.com/150/0000FF/808080?Text=Digital.com" />
        </a>
      </div>
      <Link href="#">
        <div className="w-full text-center pb-3 px-3">
          <div className="title text-xs md:text-base font-bold ">OMBRELLA Lip Totem Tint NEW SHADES </div>
          <div className="price text-gray-800 text-xs md:text-base font-sans">Rp 59.000 </div>
        </div>
      </Link>
    </div>
  );
}
