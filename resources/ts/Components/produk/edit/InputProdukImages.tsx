import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { Button, CardBody, CardFooter, IconButton, Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import route from 'ziggy-js';
import ProdukImage from '../ProdukImage';
import CardProdukImage from './CardProdukImage';

type Props = {
  images?: App.Models.ProdukImage[];
};
export default function InputProdukImages({ images: img = [] }: Props) {
  const { errors } = usePage().props;
  const [images, setImages] = useState(img);
  const tambahImages = () => {
    setImages([...images, { name: '', color: '', image: '', produk_id: img[0].produk_id }]);
  };

  const onDelete = (image: App.Models.ProdukImage, i: number) => {
    if (!image.id) return setImages(images.filter((im, index) => index != i));

    Swal.fire({
      title: 'Apakah anda yakin?',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true,
    }).then((res) => {
      if (res.isConfirmed) Inertia.delete(route('produk_image.delete', image.id));
    });
  };
  useEffect(() => {
    if (Object.keys(errors).length < 1) setImages(img);
    return () => {};
  }, [img]);

  return (
    <CardBody>
      <div className="flex gap-4 flex-wrap">
        {images.map((image, i) => {
          return (
            <div key={i} className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.33%-32px)]">
              <CardProdukImage onDelete={() => onDelete(image, i)} image={image} />
            </div>
          );
        })}
      </div>
      <div className="my-4">
        <IconButton onClick={(e) => tambahImages()}>
          <FaPlus />
        </IconButton>
      </div>
    </CardBody>
  );
}
