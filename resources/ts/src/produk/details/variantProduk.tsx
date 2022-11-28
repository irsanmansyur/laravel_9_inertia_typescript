import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';

export default function VariantProduk({ variants }: { variants: App.Models.ProdukVariant[] }) {
  const [variant, setVariant] = useState(variants[0]);
  return (
    <div className="produk-variants">
      <div className="variant-price">
        <NumericFormat className="text-lg" value={variant.price_after_diskon} allowLeadingZeros thousandSeparator="," displayType="text" prefix="Rp. " />
      </div>
      {variants.length > 0 && (
        <div className="vairants-list mt-3">
          <span className="uppercase text-[12px]">Variant</span>
          <div className="flex gap-2 items-center">
            {variants.map((v, i) =>
              variant.id == v.id ? (
                <Button key={i} size="sm" className="bg-primary" onClick={(e) => setVariant(v)}>
                  {v.name_variant}
                </Button>
              ) : (
                <Button key={i} size="sm" color={variant.id == v.id ? 'blue' : 'gray'} onClick={(e) => setVariant(v)}>
                  {v.name_variant}
                </Button>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
