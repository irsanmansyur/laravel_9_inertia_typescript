import { CardBody, Option, Select } from "@material-tailwind/react";
import { setDataInterface } from "@ts/utils/interfaces/inertia.interfaces";
import React, { useEffect } from "react";
import InputError from "../InputError";

type Props = {
  index: number;
  color: string;
  error: string;
  data: App.Models.Produk;
  setData: setDataInterface<App.Models.Produk>;
};

export default function SelectColor({ error, index, color, data, setData }: Props) {
  const handleChangeColor = (value: any) => {
    if (!data.images) return;
    value as string;
    const images = [...data.images];
    images[index].color = value;
    setData({ ...data, images });
  };
  return (
    <>
      <Select error={error ? true : false} label="Pilih Warna" value={color} defaultChecked onChange={handleChangeColor}>
        <Option value="default" className="text-primary">
          Umum
        </Option>
        <Option value="red" className="hover:text-red-500">
          Red
        </Option>
        <Option value="blue" className="hover:bg-blue-500">
          Blue
        </Option>
        <Option value="black" className="hover:bg-black">
          Hitam
        </Option>
      </Select>
      <InputError message={error} className="mt-1" />
    </>
  );
}
