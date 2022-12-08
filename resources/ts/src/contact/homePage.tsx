import { useForm, usePage } from '@inertiajs/inertia-react';
import { Alert, Button, Input, Textarea } from '@material-tailwind/react';
import InputError from '@ts/Components/InputError';
import { Faq } from '@ts/utils/enums/faq.enum';
import { FaqHelper } from '@ts/utils/helpers';
import { PropsInertiaInterface } from '@ts/utils/interfaces/inertia.interfaces';
import React, { Fragment, useEffect, useState } from 'react';
import route from 'ziggy-js';

export default function homePage({ faqs, status }: { status: Faq.Enum.Status; faqs: App.Models.Faq[] }) {
  const { settings_app } = usePage<PropsInertiaInterface>().props;
  const [showMessage, setShowMessage] = useState(false);
  const { data, errors, processing, wasSuccessful, setData, post } = useForm();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('contact.sendMessage'));
  };
  useEffect(() => {
    setShowMessage(wasSuccessful);
    return () => {};
  }, [wasSuccessful]);

  return (
    <div className="py-5 max-w-screen-xl w-full mx-auto px-3">
      <div className="header py-6 mb-3">
        <div className="title text-center text-3xl">
          Do you have any questions? Contact us <br />
          <small className="text-primary font-bold">{settings_app.options.email}</small>
          <div className="italic text-lg underline mt-6">or leave us a message</div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="body my-4 sm:my-10">
        <div className="flex gap-2 sm:flex-row flex-col">
          <div className="w-full sm:w-1/2">
            <Input variant="outlined" value={data?.name ?? ''} onChange={(e) => setData('name', e.target.value)} label="Yout name" />
            <InputError message={errors.name} />
          </div>
          <div className="w-full sm:w-1/2">
            <Input variant="outlined" value={data?.email ?? ''} onChange={(e) => setData('email', e.target.value)} label="Email" />
            <InputError message={errors.email} />
          </div>
        </div>
        <div className="flex gap-2 sm:flex-row flex-col mt-5">
          <div className="w-full sm:w-1/2">
            <Input variant="outlined" value={data?.telp ?? ''} onChange={(e) => setData('telp', e.target.value)} label="Phone Number" />
            <InputError message={errors.telp} />
          </div>
          <div className="w-full sm:w-1/2">
            <Input variant="outlined" value={data?.subject ?? ''} onChange={(e) => setData('subject', e.target.value)} label="Subject" />
            <InputError message={errors.subject} />
          </div>
        </div>
        <div className="w-full mt-5">
          <Textarea value={data.message ?? ''} onChange={(e) => setData('message', e.target.value)} label="Message" />
          <InputError message={errors.message} />
        </div>
        <div className="my-8">
          <Fragment>
            <Alert
              show={showMessage}
              dismissible={{
                onClose: () => {
                  setShowMessage(false);
                },
              }}
              className="my-3"
            >
              Your message has been receive
            </Alert>
          </Fragment>
          <Button variant="filled" type="submit" disabled={processing} className="w-full bg-primary flex justify-center hover:shadow-primary shadow-primary">
            {processing ? (
              <div className="flex gap-2 items-center mx-auto">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Processing..</span>
              </div>
            ) : (
              'Submit'
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
