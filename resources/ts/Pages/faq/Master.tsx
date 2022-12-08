import { Link } from '@inertiajs/inertia-react';
import { Accordion, AccordionBody, AccordionHeader, Button, Chip, IconButton } from '@material-tailwind/react';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import { PaginateLaravelInterface } from '@ts/utils/interfaces/PaginateLaravelInterface';
import React, { Fragment, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import route from 'ziggy-js';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
import { Faq } from '@ts/utils/enums/faq.enum';

export default function Master({ faqs }: { faqs: PaginateLaravelInterface<App.Models.Faq> }) {
  const [faqActive, setFaqActive] = useState<App.Models.Faq>();
  return (
    <DashboardLayout>
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mt-16">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6 mb-8 p-6 flex justify-between items-center">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">List Faq</h6>
          <Link href={route('faq.master.create')}>
            <IconButton variant="outlined" color="white">
              <GrAdd />
            </IconButton>
          </Link>
        </div>
        <div className="mx-3 sm:mx-6 relative">
          <div className="overflow-hidden divide-y border shadow-sm rounded-2xl my-3">
            {faqs.data.map((faq, i) => {
              return <Item key={i} faq={faq} />;
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

const Item = ({ faq }: { faq: App.Models.Faq }) => {
  const deleteFaq = (e: React.MouseEvent) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(route('faq.master.delete', faq.id));
      }
    });
  };
  const Status = ({ status }: { status: Faq.Enum.Status }) => {
    switch (status) {
      case Faq.Enum.Status.General:
        return <Chip color="light-blue" value="General" className="py-1" />;
      case Faq.Enum.Status.Footer:
        return <Chip color="yellow" value="Footer" className="py-1" />;
      case Faq.Enum.Status.Order:
        return <Chip color="light-green" value="Order" className="py-1" />;
      default:
        return <></>;
    }
  };
  return (
    <div className="relative overflow-hidden">
      <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
      <div className="h-12 w-full pl-5 flex items-center pr-10">
        <h1 className="flex justify-between w-full">
          {faq.title}
          <div>
            <Status status={faq.status} />
          </div>
        </h1>
      </div>
      <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
      <div className="overflow-hidden bg-white transition-all duration-500 h-0 peer-checked:h-auto">
        <div className="p-5 border-t" dangerouslySetInnerHTML={{ __html: faq.description }} />
        <div className="p-5 flex gap-3">
          <Link href={route('faq.master.edit', faq.id)}>
            <Button size="sm" variant="outlined" color="light-green" className="flex gap-2 items-center py-1">
              <AiFillEdit className="ml-2 h-5 w-5" />
              Edit
            </Button>
          </Link>
          <Button size="sm" variant="gradient" color="red" className="flex gap-2 items-center py-1" onClick={deleteFaq}>
            <AiFillDelete className="ml-2 h-5 w-5" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
