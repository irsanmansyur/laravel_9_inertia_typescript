import { CardBody, IconButton, Input } from '@material-tailwind/react';
import { getTokoAll } from '@ts/utils/fetch-data/TokoFetch';
import { setDataInterface } from '@ts/utils/interfaces/inertia.interfaces';
import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import InputError from '../InputError';
import SelectToko from './SelectToko';

type Props = {
  errors: any;
  data: App.Models.Produk;
  setData: setDataInterface<App.Models.Produk>;
};

export default function InputProdukLinks({ errors, data, setData }: Props) {
  if (!data.links) return <></>;

  const [tokos, setTokos] = useState<App.Models.Toko[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, name: App.Models.produkLinkType) => {
    if (!data.links) return;
    let newLinks = [...data.links];
    let link = newLinks[index];
    link[name] = e.target.value;
    setData('links', newLinks);
  };
  const tambahLinks = () => {
    if (!data.links) return;
    setData('links', [...data.links, { toko_id: 0, link: '' }]);
  };

  useEffect(() => {
    getTokoAll()
      .then((res) => {
        setTokos(res.data?.data || []);
      })
      .catch();
    return () => {};
  }, []);

  return (
    <CardBody>
      {data.links.map((link, i) => {
        return (
          <div key={i} className="w-full flex gap-2 border-b pb-3 mb-3 last:border-b-0">
            <div className="min-w-[200px]">
              <SelectToko
                error={errors[`links.${i}.toko_id`]}
                value={link.toko_id}
                onChange={(selected: any) => {
                  if (!data.links) return;
                  let newLinks = [...data.links];
                  let link = newLinks[i];
                  link.toko_id = selected.value;
                  setData('links', newLinks);
                }}
                tokos={tokos}
              />
            </div>
            <div className="w-full min-w-[100px]">
              <div>Link Produk</div>
              <Input error={errors[`links.${i}.link`] ? true : false} label="Link" value={link.link} onChange={(e) => handleInputChange(e, i, 'link')} />
              <InputError message={errors[`links.${i}.link`]} className="mt-1" />
            </div>
          </div>
        );
      })}
      <IconButton onClick={(e) => tambahLinks()}>
        <FaPlus />
      </IconButton>
    </CardBody>
  );
}
