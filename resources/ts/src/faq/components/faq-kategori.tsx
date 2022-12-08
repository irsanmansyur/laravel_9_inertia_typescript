import { Link } from '@inertiajs/inertia-react';
import { Faq as FaqEnum } from '@ts/utils/enums/faq.enum';
import { Faq } from '@ts/utils/fetch-data/faq-data';
import React, { useEffect, useState } from 'react';
import { BsAsterisk, BsCartFill, BsFillChatLeftDotsFill } from 'react-icons/bs';
import route from 'ziggy-js';

export default function FaqKategori({ status = 0 }: { status?: FaqEnum.Enum.Status }) {
  const [faqKategori, setFaqKategori] = useState([]);
  useEffect(() => {
    Faq.data.Kategori().then((resp) => {
      setFaqKategori(resp.data.data);
    });
    return () => {};
  }, []);

  return (
    <div className="flex sm:flex-col gap-4 justify-center border-b sm:border-b-0">
      {faqKategori.map((faq, i) => {
        if (faq.status == status)
          return (
            <div key={i} className={`flex flex-col sm:flex-row items-center gap-2 mb-3 text-primary `}>
              <FaqKategoriCard status={faq.status} />
            </div>
          );
        return (
          <Link key={i} href={route('faq.home') + `?status=${faq.status}`} className={`flex flex-col sm:flex-row items-center gap-2 mb-3`}>
            <FaqKategoriCard status={faq.status} />
          </Link>
        );
      })}
    </div>
  );
}

const FaqKategoriCard = ({ status }: { status: FaqEnum.Enum.Status }) => {
  switch (status) {
    case FaqEnum.Enum.Status.General:
      return (
        <>
          <BsFillChatLeftDotsFill className="w-4 h-4 sm:w-6 sm:h-6" />
          <div className="text-xl font-bold">General</div>
        </>
      );
    case FaqEnum.Enum.Status.Order:
      return (
        <>
          <div className="icon">
            <BsCartFill className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="text-xl font-bold">Order</div>
        </>
      );
    default:
      return (
        <>
          <div className="icon">
            <BsAsterisk className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <div className="text-xl font-bold">Footer</div>
        </>
      );
  }
};
