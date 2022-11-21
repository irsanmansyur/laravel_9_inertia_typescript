import { setDataByKeyValuePair, setDataByMethod, setDataByObject, useForm } from "@inertiajs/inertia-react";
import { Button, CardFooter } from "@material-tailwind/react";
import React, { useState } from "react";
import route from "ziggy-js";
import InputProdukDetails from "./InputProdukDetails";
import InputProdukInfo from "./InputProdukInfo";

type Props = {
  produk: App.Models.Produk;
};

export default function ProdukDetail({ produk }: Props) {
  const { data, setData, post, processing, errors } = useForm<App.Models.Produk>({
    id: produk.id,
    kategori_id: produk.kategori_id,
    name: produk.name,
    alias: produk.alias,
    name_description: produk.name_description,
    details: produk.details,
    how_to_apply: produk.how_to_apply,
    ingredients: produk.ingredients,
    faq: produk.faq,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (processing) return;
    post(route("produk.master.edit", produk.id));
  };
  return (
    <form onSubmit={handleSubmit}>
      <StepInputEdit data={data} setData={setData} errors={errors} />
    </form>
  );
}

type PropsStep = {
  errors: Record<keyof App.Models.Produk, string>;
  data: App.Models.Produk;
  setData: setDataByObject<App.Models.Produk> & setDataByMethod<App.Models.Produk> & setDataByKeyValuePair<App.Models.Produk>;
};
function StepInputEdit({ errors, data, setData }: PropsStep) {
  const [step, setStep] = useState<number>(1);
  switch (step) {
    case 1:
      return (
        <>
          <InputProdukInfo errors={errors} data={data} setData={setData} />
          <CardFooter className="flex  gap-7 pt-2">
            <Button type="button" onClick={() => setStep(2)}>
              Next
            </Button>
          </CardFooter>
        </>
      );
    case 2:
      return (
        <>
          <InputProdukDetails errors={errors} data={data} setData={setData} />
          <CardFooter className="flex  gap-7 pt-2">
            <Button variant="outlined" color="red" type="button" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="submit">Update</Button>
          </CardFooter>
        </>
      );
    default:
      return <></>;
  }
}
