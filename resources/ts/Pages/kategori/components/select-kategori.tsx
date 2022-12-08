import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { getListKategori } from '../data';

export default function SelectKategori({ onChange, value }: { value: number; onChange: (value: number) => void }) {
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    getListKategori().then((res) => {
      setOptions(res.options);
    });
    return () => {};
  }, []);
  return <Select value={options.filter((option) => option.value == value)} onChange={(opt) => onChange(opt.value)} options={options} />;
}
