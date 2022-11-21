import { CardBody, IconButton, Input } from "@material-tailwind/react";
import { setDataInterface } from "@ts/utils/interfaces/inertia.interfaces";
import React, { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { NumberFormatValues, NumericFormat } from "react-number-format";
import InputError from "../InputError";

type Props = {
  errors: any;
  data: App.Models.Produk;
  setData: setDataInterface<App.Models.Produk>;
};

export default function InputProdukVariants({ errors, data, setData }: Props) {
  if (!data.variants) return <></>;
  const onNumberChange = (index: number, values: NumberFormatValues, name: App.Models.variantType) => {
    if (!data.variants) return;
    let newVariants = [...data.variants];
    let variant = newVariants[index];
    variant[name] = values.floatValue;
    setData("variants", newVariants);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, name: App.Models.variantType) => {
    if (!data.variants) return;
    let newVariants = [...data.variants];
    let variant = newVariants[index];
    variant[name] = e.target.value;
    setData("variants", newVariants);
  };
  const tambahVariants = () => {
    if (!data.variants) return;
    setData("variants", [...data.variants, { name_variant: "", price: 0, price_after_diskon: 0, qty: 0 }]);
  };

  return (
    <CardBody>
      {data.variants.map((variant, i) => {
        return (
          <div key={i} className="w-full flex gap-2 border-b pb-3 mb-3 last:border-b-0">
            <div className="w-2/6">
              <Input error={errors[`variants.${i}.name_variant`] ? true : false} label="Nama Variant" value={variant.name_variant} onChange={(e) => handleInputChange(e, i, "name_variant")} />
              <InputError message={errors[`variants.${i}.name_variant`]} className="mt-1" />
            </div>
            <div className="w-1/6">
              <NumericFormat value={variant.price} label="Harga" customInput={Input} thousandSeparator="," className="text-right" prefix="Rp." onValueChange={(values, source) => onNumberChange(i, values, "price")} error={errors[`variants.${i}.price`] ? true : false} />
              <InputError message={errors[`variants.${i}.price`]} className="mt-1" />
            </div>
            <div className="w-1/6">
              <NumericFormat
                value={variant.price_after_diskon}
                label="Harga Setelah Diskon"
                customInput={Input}
                thousandSeparator=","
                className="text-right"
                prefix="Rp."
                onValueChange={(values, _) => onNumberChange(i, values, "price_after_diskon")}
                error={errors[`variants.${i}.price_after_diskon`] ? true : false}
              />
              <InputError message={errors[`variants.${i}.price_after_diskon`]} className="mt-1" />
            </div>
            <div className="w-1/6">
              <NumericFormat value={variant.qty} label="Jumlah" customInput={Input} thousandSeparator="," className="text-right" onValueChange={(values, _) => onNumberChange(i, values, "qty")} error={errors[`variants.${i}.qty`] ? true : false} />
              <InputError message={errors[`variants.${i}.qty`]} className="mt-1" />
            </div>
          </div>
        );
      })}
      <IconButton onClick={(e) => tambahVariants()}>
        <FaPlus />
      </IconButton>
    </CardBody>
  );
}
