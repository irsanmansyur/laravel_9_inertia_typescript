import { useForm } from "@inertiajs/inertia-react";
import { Button, IconButton, Input } from "@material-tailwind/react";
import InputError from "@ts/Components/InputError";
import React, { useEffect, useRef } from "react";
import route from "ziggy-js";
import ProdukImage from "../ProdukImage";
import SelectColorImage from "./SelectColorImage";
import { TiDeleteOutline } from "react-icons/ti";
type Props = {
  image: App.Models.ProdukImage;
  onDelete: any;
};
export default function CardProdukImage({ image, onDelete }: Props) {
  const { data, setData, errors, post } = useForm<App.Models.ProdukImage>(image);
  useEffect(() => {
    setData(image);
    return () => {};
  }, [image]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (data.id)
      return post(route("produk_image.edit", data.id), {
        preserveScroll: true,
      });
    return post(route("produk_image.add"), {
      preserveScroll: true,
    });
  };
  let refButton = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if ((data !== image || Object.keys(errors).length > 0) && refButton.current) {
      refButton.current.classList.add("opacity-100", "translate-y-0");
      refButton.current.classList.remove("opacity-0", "-translate-y-full", "hidden");
    } else if (refButton.current) {
      refButton.current.classList.remove("opacity-100", "translate-y-0");
      refButton.current.classList.add("opacity-0", "-translate-y-full", "hidden");
    }
    return () => {};
  }, [data]);

  const deleteThis = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let status = await onDelete();
  };

  return (
    <form className="rounded border shadow p-3 relative group" onSubmit={onSubmit}>
      <button type="button" onClick={deleteThis} className="absolute right-1 top-2 h-6 w-6 overflow-hidden group-hover:z-20">
        <TiDeleteOutline className="h-6 w-6 text-red-300 hover:text-red-500  group-hover:opacity-100  opacity-0 group-hover:translate-y-0 -translate-y-full transform transition-all ease-in-out duration-500" />
      </button>
      <div className="image-src mb-4">
        <ProdukImage onChange={(file: File) => setData("image", file)} src={image.image_link} />
        <InputError message={errors["image"]} className="mt-1" />{" "}
      </div>
      <div className="input-desc">
        <div className="mt-1">
          <SelectColorImage onChange={(value: string) => setData("color", value)} value={data.color} error={errors.color} />
        </div>
        <div className="mt-5">
          <Input error={errors.name ? true : false} label="Keterangan" value={data.name} onChange={(e) => setData("name", e.target.value)} />
          <InputError message={errors["name"]} className="mt-1" />
        </div>
      </div>
      <div className="my-2 pt-2 border-t flex w-full gap-3" ref={refButton}>
        <Button onClick={(e) => setData(image)} size="sm" variant="outlined" color="yellow" type="reset">
          Reset
        </Button>
        <Button type="submit" size="sm">
          Save
        </Button>
      </div>
    </form>
  );
}
