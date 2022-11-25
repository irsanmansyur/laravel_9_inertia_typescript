import { useForm } from '@inertiajs/inertia-react';
import { Button, IconButton, Input } from '@material-tailwind/react';
import InputError from '@ts/Components/InputError';
import React, { useEffect, useRef } from 'react';
import { FaPlus } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import Swal from 'sweetalert2';
import route from 'ziggy-js';

type Props = {
  variants: App.Models.ProdukVariant[];
};

export default function InputProdukVariantsEdit({ variants }: Props) {
  if (!variants) return <></>;

  const { data, setData, post, errors } = useForm({ variants });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, name: App.Models.variantType) => {
    let newVariants = [...data.variants];
    let variant = newVariants[index];
    // @ts-ignore
    variant[name] = e.target.value;
    setData({ variants: newVariants });
  };
  const onNumberChange = (index: number, values: NumberFormatValues, name: App.Models.variantType) => {
    let newVariants = [...data.variants];
    let variant = newVariants[index];
    // @ts-ignore
    variant[name] = values.floatValue;
    setData({ variants: newVariants });
  };
  const tambahVariants = () => {
    setData({ variants: [...data.variants, { name_variant: '', price: 0, price_after_diskon: 0, qty: 0 }] });
  };
  const deleteThis = async (e: React.MouseEvent<HTMLButtonElement>, i: number) => {
    if (data.variants.length === 1) return Swal.fire({ text: 'Maaf harus ada satu varian', icon: 'error' });
    setData({ variants: data.variants.filter((dt, index) => index !== i) });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('produk_variant.update-many', variants[0].produk_id));
  };
  return (
    <form onSubmit={submit}>
      <ul>
        {data.variants.map((variant, i) => {
          return (
            <li key={i} className="flex items-start gap-2 border-b  pb-3 mb-3 last:border-b-0">
              <button type="button" onClick={(e) => deleteThis(e, i)}>
                <TiDeleteOutline className="h-6 w-6 text-red-300 hover:text-red-500   transform transition-all ease-in-out duration-500" />
              </button>
              <div className="w-full flex flex-col sm:flex-row gap-2">
                <div className="sm:w-2/6">
                  <div className="flex items-start gap-2">
                    <div className="w-full">
                      <Input error={errors[`variants.${i}.name_variant`] ? true : false} label="Nama Variant" value={variant.name_variant} onChange={(e) => handleInputChange(e, i, 'name_variant')} />
                      <InputError message={errors[`variants.${i}.name_variant`]} className="mt-1" />
                    </div>
                  </div>
                </div>
                <div className="md:w-1/6">
                  <NumericFormat value={variant.price} label="Harga" customInput={Input} thousandSeparator="," className="text-right" prefix="Rp." onValueChange={(values, source) => onNumberChange(i, values, 'price')} error={errors[`variants.${i}.price`] ? true : false} />
                  <InputError message={errors[`variants.${i}.price`]} className="mt-1" />
                </div>
                <div className="md:w-1/6">
                  <NumericFormat value={variant.price_after_diskon} label="Harga Setelah Diskon" customInput={Input} thousandSeparator="," className="text-right" prefix="Rp." onValueChange={(values, _) => onNumberChange(i, values, 'price_after_diskon')} error={errors[`variants.${i}.price_after_diskon`] ? true : false} />
                  <InputError message={errors[`variants.${i}.price_after_diskon`]} className="mt-1" />
                </div>
                <div className="md:w-1/6">
                  <NumericFormat value={variant.qty} label="Jumlah" customInput={Input} thousandSeparator="," className="text-right" onValueChange={(values, _) => onNumberChange(i, values, 'qty')} error={errors[`variants.${i}.qty`] ? true : false} />
                  <InputError message={errors[`variants.${i}.qty`]} className="mt-1" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex w-full justify-end">
        <IconButton onClick={(e) => tambahVariants()}>
          <FaPlus />
        </IconButton>
      </div>
      <div className="my-2 pt-2 border-t flex w-full gap-3">
        <Button onClick={(e) => setData({ variants: variants })} size="sm" variant="outlined" color="yellow" type="reset">
          Reset
        </Button>
        <Button type="submit" size="sm">
          Save
        </Button>
      </div>
    </form>
  );
}
