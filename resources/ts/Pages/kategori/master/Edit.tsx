import { useForm } from '@inertiajs/inertia-react';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import InputGroup from '@ts/Components/form/InputGroup';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import { backOnClick } from '@ts/utils/helpers';
import React from 'react';
import route from 'ziggy-js';

export default function Edit({ produkKategori }: { produkKategori: App.Models.ProdukKategori }) {
  const { data, setData, errors, post, processing } = useForm<App.Models.ProdukKategori>(produkKategori);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('produk_kategori.edit', produkKategori.id));
  };

  return (
    <DashboardLayout>
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Edit Kategori
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <div className="flex flex-col md:flex-row md:gap-2 mb-3">
              <div className="w-full md:w-1/2 mb-4">
                <InputGroup error={errors.name} value={data.name} label="Nama Kategori" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('name', e.target.value)} />
              </div>
              <div className="w-full md:w-1/2 ">
                <InputGroup error={errors.description} value={data.description} label="Deskripsi Kategori" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('description', e.target.value)} />
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex  gap-7 pt-2">
            <Button disabled={processing} type="submit">
              Update
            </Button>
            <Button color="amber" type="reset" onClick={backOnClick}>
              Back
            </Button>
          </CardFooter>
        </form>
      </Card>
    </DashboardLayout>
  );
}
