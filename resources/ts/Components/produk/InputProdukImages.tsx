import { CardBody, IconButton, Input } from "@material-tailwind/react";
import { setDataInterface } from "@ts/utils/interfaces/inertia.interfaces";
import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";
import ProdukImage from "./ProdukImage";
import SelectColor from "./SelectColor";
import { FaTrash } from "react-icons/fa";
import InputError from "../InputError";

type Props = {
  errors: any;
  data: App.Models.Produk;
  setData: setDataInterface<App.Models.Produk>;
};
export default function InputProdukImages({ errors, data, setData }: Props) {
  if (!data.images) return <></>;
  const refPreview = useRef<HTMLImageElement>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (!data.images) return;
    let newImages = [...data.images];
    let image = newImages[index];
    image.name = e.target.value;
    setData("images", newImages);
  };

  function handleImageChange(file: File, index: number) {
    if (!data.images) return;

    let newImages = [...data.images];
    let image = newImages[index];
    image.image = file;
    setData("images", newImages);
  }
  const tambahImages = () => {
    if (!data.images) return;
    setData("images", [...data.images, { name: "", color: "", image: "" }]);
  };

  return (
    <CardBody>
      {data.images.map((image, i) => {
        return (
          <div key={i} className="w-full flex gap-2 border-b pb-3 mb-3 last:border-b-0">
            {data.images && data.images.length > 1 && (
              <IconButton
                color="red"
                className="mt-1"
                onClick={(e) =>
                  setData(
                    "images",
                    data.images?.filter((img, ind) => ind !== i)
                  )
                }
              >
                <FaTrash />
              </IconButton>
            )}
            <div className="w-1/3">
              <div className="mt-1">
                <SelectColor error={errors[`images.${i}.color`]} index={i} color={image.color} data={data} setData={setData} />
              </div>
              <div className="mt-5">
                <Input error={errors[`images.${i}.name`] ? true : false} label="Keterangan" value={image.name} onChange={(e) => handleInputChange(e, i)} />
                <InputError message={errors[`images.${i}.name`]} className="mt-1" />
              </div>
            </div>
            <div className="w-1/3">
              <ProdukImage src={image.image_link} onChange={handleImageChange} index={i} />
              <InputError message={errors[`images.${i}.image`]} className="mt-1" />
            </div>
          </div>
        );
      })}
      <IconButton onClick={(e) => tambahImages()}>
        <FaPlus />
      </IconButton>
    </CardBody>
  );
}
