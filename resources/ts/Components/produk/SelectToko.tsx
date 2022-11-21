// import { Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import InputError from "../InputError";

type Props = {
  error?: string;
  value: number | undefined;
  tokos: App.Models.Toko[];
  onChange: any;
};
interface Option {
  label: string;
  value?: string;
}
export default function SelectToko({ error, value, tokos, onChange }: Props) {
  const [options, setOptions] = useState<Option[]>([]);
  const [selected, setSelected] = useState({ value: "", label: "Pilih Toko" });
  useEffect(() => {
    const tks = tokos.map((tk) => {
      let value: string = "" + tk.id || "";
      return { value, label: tk.name };
    });
    setOptions(tks);

    const tk = tokos.find((tk) => tk.id == value);
    if (tk) setSelected({ value: tk.id + "", label: tk.name });
    return () => {};
  }, [tokos]);
  useEffect(() => {
    const tk = options.find((tk) => tk.value == value);
    if (tk) setSelected({ value: tk.value + "", label: tk.label });
    return () => {};
  }, [value]);

  return (
    <>
      <label>
        <div>Pilih Toko</div>
        <Select placeholder="Pilih Toko" value={selected} error={error ? true : false} options={options} onChange={onChange} />
        <InputError message={error} className="mt-1" />
      </label>
    </>
    // <Select value="piojkhj" label="Pilih Toko" onChange={onChange}>
    //   {tokos.map((toko) => (
    //     <Option key={toko.id} value={toko.id + ""} className="text-primary">
    //       {toko.name}
    //     </Option>
    //   ))}
    // </Select>
  );
}
