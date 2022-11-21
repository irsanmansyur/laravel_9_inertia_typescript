import { CardBody, Option, Select } from "@material-tailwind/react";
import InputError from "@ts/Components/InputError";
import { setDataInterface } from "@ts/utils/interfaces/inertia.interfaces";
import React, { useEffect } from "react";

type Props = {
  value: string;
  error: string;
  onChange?: any;
};

export default function SelectColorImage({ error, value, onChange = (v: string) => v }: Props) {
  return (
    <>
      <Select error={error ? true : false} label="Pilih Warna" value={value} defaultChecked onChange={(v) => onChange(v)}>
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
