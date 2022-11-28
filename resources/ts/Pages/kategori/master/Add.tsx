import { Link, useForm } from '@inertiajs/inertia-react';
import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import InputGroup from '@ts/Components/form/InputGroup';
import BreadcrumbsHome from '@ts/Layouts/components/breadcrumbs-home';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import { backOnClick } from '@ts/utils/helpers';
import React, { CSSProperties } from 'react';
import route from 'ziggy-js';
import SelectKategori from '../components/select-kategori';

export default function Add() {
  const { data, setData, errors, post, processing } = useForm<App.Models.ProdukKategori>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('produk_kategori.add'));
  };
  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };

  const formatGroupLabel = (data: any) => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );

  const options = [
    {
      label: 'Group 1',
      options: [
        { label: 'Group 1, option 1', value: 'value_1' },
        { label: 'Group 1, option 2', value: 'value_2' },
      ],
    },
    { label: 'A root option', value: 'value_3' },
    { label: 'Another root option', value: 'value_4' },
  ];

  return (
    <DashboardLayout breadcrumbs={<Bread />}>
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Tambah Kategori
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <SelectKategori />
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
              Save
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

const Bread = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbsHome />
      <Link href={route('produk_kategori.master')} className="opacity-60">
        <span>Kategori Produk</span>
      </Link>
      <a href="#">
        <span>Tambah</span>
      </a>
    </Breadcrumbs>
  );
};
