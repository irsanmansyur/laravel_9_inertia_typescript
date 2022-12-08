import { setDataByKeyValuePair, setDataByMethod, setDataByObject } from '@inertiajs/inertia-react';
import { CardBody } from '@material-tailwind/react';
import { Produk } from '@ts/utils/fetch-data/produk-data';
import React, { useEffect, useState } from 'react';
import InputError from '../InputError';
import EditorContainerTiny from './editor-container.tiny';

type Props = {
  errors: Record<keyof App.Models.Produk, string>;
  data: App.Models.Produk;
  setData: setDataByObject<App.Models.Produk> & setDataByMethod<App.Models.Produk> & setDataByKeyValuePair<App.Models.Produk>;
};
export default function InputProdukDetails({ errors, data, setData }: Props) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    Produk.data.getDataImagesEditor().then((resp) => {
      setImages(resp.data.data);
    });
    return () => {};
  }, []);

  return (
    <CardBody>
      <div className="produk-details-input">
        <div className="">
          <label>Details</label>
          <EditorContainerTiny images={images} textHtml={data.details} onChange={(htmlText) => setData('details', htmlText)} />
          <InputError message={errors.details} />
        </div>
        <div className="">
          <label>How To Apply</label>
          <EditorContainerTiny images={images} textHtml={data.how_to_apply} onChange={(htmlText) => setData('how_to_apply', htmlText)} />
          <InputError message={errors.how_to_apply} />
        </div>
        <div className="">
          <label>Inggredients</label>
          <EditorContainerTiny images={images} textHtml={data.ingredients} onChange={(htmlText) => setData('ingredients', htmlText)} />
          <InputError message={errors.ingredients} />
        </div>
        <div className="">
          <label>Faq</label>
          <EditorContainerTiny images={images} textHtml={data.faq} onChange={(htmlText) => setData('faq', htmlText)} />
          <InputError message={errors.faq} />
        </div>
      </div>
    </CardBody>
  );
}
