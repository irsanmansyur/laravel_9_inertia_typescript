import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { getListKategori } from '../data';

export default function SelectKategori() {
  const [options, setOptions] = useState<any[]>([]);
  const [kategories, setKategories] = useState<App.Models.ProdukKategori[]>([]);
  useEffect(() => {
    getListKategori().then((res) => {
      setKategories(res.kategories);
      setOptions(res.options);
    });
    return () => {};
  }, []);
  return <Select onChange={(e) => console.log(e)} options={options} />;
}
