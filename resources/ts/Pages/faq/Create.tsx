import React from 'react';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import EditorContainer from './components/editorContainer';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Radio } from '@material-tailwind/react';
import InputGroup from '@ts/Components/form/InputGroup';
import { useForm } from '@inertiajs/inertia-react';
import { backOnClick } from '@ts/utils/helpers';
import route from 'ziggy-js';
import InputError from '@ts/Components/InputError';
import EditorContainer2 from './components/editorContainerV2';
import { Faq } from '@ts/utils/enums/faq.enum';

export default function Create() {
  const { data, setData, errors, processing, post } = useForm<App.Models.Faq>({
    status: 0,
    title: '',
    description: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('faq.master.create'));
  };
  return (
    <DashboardLayout>
      <Card className="mt-10">
        <CardHeader className="flex w-auto mt-0 rounded-none shadow-none border-b mx-0 p-3 font-bold">Tambah Faq</CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <div className="my-2">
              <InputGroup error={errors.title} value={data.title ?? ''} onChange={(e: any) => setData('title', e.target.value)} label="Title" className="!bg-white" />
            </div>
            <h2 className="py-2">Descriptions</h2>
            <EditorContainer2 textHtml={data.description ?? ''} onChange={(htmlText) => setData('description', htmlText)} />
            <InputError message={errors.description} />
            <div className="mt-4">
              <h3 className="px-2">Kategori</h3>
              <div className="flex gap-10">
                <Radio id="general" name="type" onClick={(e) => setData('status', Faq.Enum.Status.General)} label="General" defaultChecked={data.status == Faq.Enum.Status.General} />
                <Radio id="footer" name="type" onClick={(e) => setData('status', Faq.Enum.Status.Footer)} label="Footer" defaultChecked={data.status == Faq.Enum.Status.Footer} />
                <Radio id="order" onClick={(e) => setData('status', Faq.Enum.Status.Order)} name="type" label="Order" defaultChecked={data.status == Faq.Enum.Status.Order} />
              </div>
            </div>
          </CardBody>
          <CardFooter className="flex justify-end gap-2">
            <Button color="gray" onClick={backOnClick}>
              Back
            </Button>
            <Button disabled={processing} className="bg-primary" type="submit">
              Save
            </Button>
          </CardFooter>
        </form>
      </Card>
    </DashboardLayout>
  );
}
