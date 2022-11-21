import { setDataByKeyValuePair, setDataByMethod, setDataByObject } from "@inertiajs/inertia-react";
import { CardBody, Textarea } from "@material-tailwind/react";
import React from "react";
import EditorContainer from "../form/EditorCustom";
import InputGroup from "../form/InputGroup";

type Props = {
  errors: Record<keyof App.Models.Produk, string>;
  data: App.Models.Produk;
  setData: setDataByObject<App.Models.Produk> & setDataByMethod<App.Models.Produk> & setDataByKeyValuePair<App.Models.Produk>;
};
export default function InputProdukDetails({ errors, data, setData }: Props) {
  return (
    <CardBody>
      <div className="produk-details-input">
        <EditorContainer error={errors.details} htmlText={data.details || ""} onChange={(htmlText: any) => setData("details", htmlText)} label="Details" className={"border"} />
        <EditorContainer error={errors.how_to_apply} htmlText={data.how_to_apply} onChange={(htmlText: any) => setData("how_to_apply", htmlText)} label="How to apply" className={"border"} />
        <EditorContainer error={errors.ingredients} htmlText={data.ingredients} onChange={(htmlText: any) => setData("ingredients", htmlText)} label="Ingredients" className={"border"} />
        <EditorContainer error={errors.faq} htmlText={data.faq} onChange={(htmlText: any) => setData("faq", htmlText)} label="Faq" className={"border"} />
      </div>
    </CardBody>
  );
}
