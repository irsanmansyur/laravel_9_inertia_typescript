import { setDataByKeyValuePair, setDataByMethod, setDataByObject, useForm } from "@inertiajs/inertia-react";
import { CardBody, Option, Select, Textarea } from "@material-tailwind/react";
import { Kategori } from "@ts/utils/fetch-data/KategoriFetch";
import React, { useEffect, useState } from "react";
import InputGroup from "../form/InputGroup";
import InputError from "../InputError";

type Props = {
  data: App.Models.Produk;
  errors: Record<keyof App.Models.Produk, string>;
  setData: setDataByObject<App.Models.Produk> & setDataByMethod<App.Models.Produk> & setDataByKeyValuePair<App.Models.Produk>;
};
export default function InputProdukInfo({ data, errors, setData }: Props) {
  const [kategories, setKategories] = useState<App.Models.ProdukKategori[]>([]);
  useEffect(() => {
    Kategori.Fetch.kategoriAll().then((respon) => {
      setKategories(respon.data);
    });
    return () => {};
  }, []);
  return (
    <>
      <CardBody>
        {kategories.length > 0 && (
          <div className="mb-3">
            <Select error={errors.kategori_id ? true : false} inputMode="text" label="Pilih kategori" value={data.kategori_id + ""} defaultChecked onChange={(e) => setData("kategori_id", parseInt(e + ""))}>
              {kategories.map((kategori, i) => (
                <Option key={kategori.id} value={kategori.id + ""} className="hover:bg-black">
                  {kategori.name}
                </Option>
              ))}
            </Select>
            <InputError message={errors.kategori_id} className="mt-1" />
          </div>
        )}
        <div className="flex gap-1">
          <div className="w-1/2">
            <InputGroup label="Nama Produk" error={errors.name} value={data.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData("name", e.target.value)} name="name" />
          </div>
          <div className="w-1/2">
            <InputGroup label="Nama Alias" error={errors.alias} name="alias" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData("alias", e.target.value)} value={data.alias} />
          </div>
        </div>
        <div className="mt-4">
          <Textarea name="name_description" value={data.name_description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData("name_description", e.target.value)} id={"name_description"} error={errors.name_description ? true : false} label="Deskripsi Produk" />
          <InputError message={errors?.name_description} className="-mt-1" />
        </div>
      </CardBody>
    </>
  );
}
