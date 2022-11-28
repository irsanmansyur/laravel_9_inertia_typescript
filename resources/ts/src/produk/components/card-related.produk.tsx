import { Link } from '@inertiajs/inertia-react';
import { Chip } from '@material-tailwind/react';
import { placeholderProdukLazyLoad } from '@ts/Components/produk';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NumericFormat } from 'react-number-format';
import styled from 'styled-components';
import route from 'ziggy-js';

export default function CardRelatedProduk({ produk }: { produk: App.Models.Produk }) {
  return (
    <Link href={route('produk.show', produk.id)} className="card-related-produk">
      <ImageStyle className="image flex justify-center">
        <LazyLoadImage src={produk.images[0].image_link} alt={produk.images[0].name} title={produk.images[0].name} className="w-full h-[100px] md:h-[200px]" effect="opacity" placeholderSrc={placeholderProdukLazyLoad} />
      </ImageStyle>
      <div className="produk-info font-bold text-[12px] text-center mt-1">
        <div>{produk.name}</div>
        <div className="text-gray-800">{produk.alias}</div>
      </div>
      <PriceProduct variant={produk.variants[0]} />
    </Link>
  );
}

const PriceProduct = ({ variant }: { variant: App.Models.ProdukVariant }) => {
  if (variant.price > variant.price_after_diskon)
    return (
      <div className="produk-harga text-center text-gray-800 text-xs md:text-base font-sans">
        <div className="flex justify-center items-center gap-1 flex-col md:flex-row">
          <Chip value={'-' + (((variant.price - variant.price_after_diskon) / variant.price) * 100).toFixed(0) + '%'} color="red" className="p-1" />
          <span className="text-red-500 line-through">
            <NumericFormat value={variant.price} allowLeadingZeros thousandSeparator="," displayType="text" prefix="Rp. " />
          </span>
        </div>
        <NumericFormat value={variant.price_after_diskon} allowLeadingZeros thousandSeparator="," displayType="text" prefix="Rp. " />
      </div>
    );
  return (
    <div className="produk-harga text-center text-gray-800 text-xs md:text-base font-sans">
      <NumericFormat value={variant.price_after_diskon} allowLeadingZeros thousandSeparator="," displayType="text" prefix="Rp. " />
    </div>
  );
};

const ImageStyle = styled.div`
  .lazy-load-image-loaded {
    width: 100%;
  }
`;
