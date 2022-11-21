import { useForm } from "@inertiajs/inertia-react";
import { Button, CardBody, IconButton, Input } from "@material-tailwind/react";
import InputError from "@ts/Components/InputError";
import { getTokoAll } from "@ts/utils/fetch-data/TokoFetch";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import route from "ziggy-js";
import SelectToko from "../SelectToko";

type Props = {
  links: App.Models.ProdukLink[];
};

export default function InputProdukLinksEdit({ links }: Props) {
  const [tokos, setTokos] = useState<App.Models.Toko[]>([]);
  const { data, setData, post, errors } = useForm({ links });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, name: App.Models.produkLinkType) => {
    if (!data.links) return;
    let newLinks = [...data.links];
    let link = newLinks[index];
    // @ts-ignore
    link[name] = e.target.value;
    setData("links", newLinks);
  };
  const tambahLinks = () => {
    if (!data.links) return;
    setData("links", [...data.links, { toko_id: 0, link: "" }]);
  };

  useEffect(() => {
    getTokoAll()
      .then((res) => {
        setTokos(res.data?.data || []);
      })
      .catch();
    return () => {};
  }, []);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("produk_link.update-many", links[0].produk_id));
  };
  return (
    <form onSubmit={submit}>
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
                  setData("links", newLinks);
                }}
                tokos={tokos}
              />
            </div>
            <div className="w-full min-w-[100px]">
              <div>Link Produk</div>
              <Input error={errors[`links.${i}.link`] ? true : false} label="Link" value={link.link} onChange={(e) => handleInputChange(e, i, "link")} />
              <InputError message={errors[`links.${i}.link`]} className="mt-1" />
            </div>
          </div>
        );
      })}
      <div className="flex w-full justify-end">
        <IconButton onClick={(e) => tambahLinks()}>
          <FaPlus />
        </IconButton>
      </div>
      <div className="my-2 pt-2 border-t flex w-full gap-3">
        <Button onClick={(e) => setData({ links })} size="sm" variant="outlined" color="yellow" type="reset">
          Reset
        </Button>
        <Button type="submit" size="sm">
          Save
        </Button>
      </div>
    </form>
  );
}
