import React, { useState } from 'react';
import EditorContainer from '@ts/Components/form/EditorCustom';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import { Button, Card, CardBody, CardFooter, CardHeader, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Textarea } from '@material-tailwind/react';
import InputGroup from '@ts/Components/form/InputGroup';
import { useForm } from '@inertiajs/inertia-react';
import { backOnClick } from '@ts/utils/helpers';
import StepInput from '@ts/Components/produk/StepInput';
import route from 'ziggy-js';
export default function Add() {
  const [step, setStep] = useState<number>(1);
  const { data, setData, post, processing, errors } = useForm<App.Models.Produk>({
    name: '',
    alias: '',
    images: [{ name: '', color: '', image: '' }],
    variants: [{ name_variant: '', price: 0, price_after_diskon: 0, qty: 0 }],
    links: [{ toko_id: 0, link: '' }],
  });

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    // @ts-expect-error
    setData(name, value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (processing) return;
    post(route('produk.master.add'));
  };
  return (
    <DashboardLayout title="Tambah produk">
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Tambah Product
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <StepInput errors={errors} data={data} setData={setData} />
        </form>
      </Card>
    </DashboardLayout>
  );
}
