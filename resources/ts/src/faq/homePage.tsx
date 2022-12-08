import { Faq } from '@ts/utils/enums/faq.enum';
import { FaqHelper } from '@ts/utils/helpers';
import React from 'react';
import FaqKategori from './components/faq-kategori';

export default function homePage({ faqs, status }: { status: Faq.Enum.Status; faqs: App.Models.Faq[] }) {
  return (
    <div className="py-5 max-w-screen-xl w-full mx-auto">
      <div className="header py-6 mb-3">
        <h1 className="title text-center text-3xl">Frequently Asked Questions</h1>
      </div>
      <div className="body flex mt-4 flex-col sm:flex-row gap-4">
        <div className="sm:w-1/5">
          <FaqKategori status={status} />
        </div>
        <div className="sm:w-4/5">
          <div className="sm:ml-4 sm:border-l">
            <h2 className="px-4 mb-4">
              <span className="font-bold font-sweetly_scentedregular tracking-[1em] text-lg border-b pb-2">{FaqHelper.getNameStatus(status)}</span>
            </h2>
            <div className="font-inconsolata tracking-tighter font-light">
              {faqs.map((faq, i) => {
                return (
                  <div className="relative overflow-hidden" key={i}>
                    <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer" />
                    <div className="h-12 w-full pl-5 flex items-center pr-10">
                      <h1 className="flex justify-between w-full">{faq.title}</h1>
                    </div>
                    <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:-rotate-90">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                    <div className="overflow-hidden bg-white transition-all duration-500 h-0 peer-checked:h-auto">
                      <div className="p-5 border-t" dangerouslySetInnerHTML={{ __html: faq.description }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
