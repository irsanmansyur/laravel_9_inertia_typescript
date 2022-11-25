import { Link, useForm } from '@inertiajs/inertia-react';
import { Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import React, { useEffect, useRef } from 'react';
import route from 'ziggy-js';
import BreadcrumbsHome from '@ts/Layouts/components/breadcrumbs-home';
import InputGroup from '@ts/Components/form/InputGroup';
import InputError from '@ts/Components/InputError';
import { backOnClick } from '@ts/utils/helpers';
import { resourceLaraveInterface } from '@ts/utils/interfaces/PaginateLaravelInterface';

export default function AddSettingPage({ setting }: { setting: resourceLaraveInterface<App.Models.Setting | undefined> }) {
  const refPreview = useRef<HTMLImageElement>(null);
  const { post, processing, errors, data, setData } = useForm<App.Models.Setting>(setting.data);
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.currentTarget.files || !refPreview.current) return;

    var src = URL.createObjectURL(e.currentTarget.files[0]);

    refPreview.current.src = src;
    refPreview.current.style.display = 'block';
    setData('options', { ...data.options, logo: e.currentTarget.files[0] });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.id) post(route('settings.add'));

    if (typeof data.options.logo == 'string') delete data.options.logo;
    return post(route('settings.edit', `${data.id}`));
  };

  useEffect(() => {
    if (refPreview.current && typeof data.options?.logo == 'string') refPreview.current.src = data.options.logo;
    return () => {};
  }, [setting]);

  return (
    <DashboardLayout breadcrumbs={<Bread />}>
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Tambah Setting
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <div className="flex flex-col md:flex-row md:gap-2 mb-3">
              <div className="w-full md:w-1/2 mb-4">
                <InputGroup error={errors[`options.name`] ?? ''} value={data.options?.name || ''} label="Name App" onChange={(e: any) => setData('options', { ...data.options, name: e.target.value })} name={'name'} />
              </div>
              <div className="w-full md:w-1/2 ">
                <InputGroup error={errors['options.alamat']} value={data.options?.alamat || ''} label="Alamat" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData('options', { ...data.options, alamat: e.target.value })} name={'alamat'} />
              </div>
            </div>
            <div className="mt-4">
              <label className="inline-block mb-2 text-gray-500">Upload Logo(jpg,png)</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="relative flex flex-col items-center justify-center pt-7">
                    <img ref={refPreview} className="absolute inset-0 w-full h-32" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Select a photo</p>
                  </div>
                  <input type="file" onChange={changeImage} className="opacity-0" accept="image/*" />
                </label>
              </div>
              <InputError message={errors['options.logo']} className="mt-2" />
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
      <Link href={route('settings')}>
        <span>Setting</span>
      </Link>
    </Breadcrumbs>
  );
};
