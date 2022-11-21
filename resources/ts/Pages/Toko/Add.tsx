import { Link, useForm } from "@inertiajs/inertia-react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, IconButton, Input } from "@material-tailwind/react";
import InputGroup from "@ts/Components/form/InputGroup";
import InputError from "@ts/Components/InputError";
import DashboardLayout from "@ts/Layouts/DashboardLayout";
import { backOnClick } from "@ts/utils/helpers";
import React, { useEffect, useRef } from "react";
import { GrAdd } from "react-icons/gr";
import route from "ziggy-js";

export default function Add() {
  const refPreview = useRef<HTMLImageElement>(null);
  const { data, setData, errors, post, processing } = useForm<App.Models.Toko>();
  const onHandleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.type === "checkbox") setData("status", event.currentTarget.checked ? "active" : "not active");
    // @ts-expect-error
    else setData(event.currentTarget.name, event.currentTarget.value);
  };
  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (!e.currentTarget.files || !refPreview.current) return;

    var src = URL.createObjectURL(e.currentTarget.files[0]);

    refPreview.current.src = src;
    refPreview.current.style.display = "block";
    setData("logo", e.currentTarget.files[0]);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route("toko.master.add"));
  };
  useEffect(() => {
    setData("status", "active");
  }, []);
  return (
    <DashboardLayout>
      <Card className="mt-20">
        <CardHeader variant="gradient" color="blue-gray" className="px-4 mr-auto h-10 place-items-center flex w-auto ">
          Tambah Toko
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <div className="flex flex-col md:flex-row md:gap-2 mb-3">
              <div className="w-full md:w-1/2 mb-4">
                <InputGroup error={errors.name} value={data.name} label="Nama toko" onChange={onHandleChange} name={"name"} />
              </div>
              <div className="w-full md:w-1/2 ">
                <InputGroup error={errors.link} value={data.link} label="Link Utama Toko" onChange={onHandleChange} name={"link"} />
              </div>
            </div>
            <div className="mt-4    ">
              <label className="inline-block mb-2 text-gray-500">Upload Image(jpg,png)</label>
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
              <InputError message={errors.logo} className="mt-2" />
            </div>
            <div className="-ml-2 mt-2">
              <Checkbox name={"status"} label="Active ? " onChange={onHandleChange} value={"active"} checked={data.status == "active" ? true : false} />
              <InputError message={errors.status} className="mt-2" />
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
