import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { Faq } from '@ts/utils/fetch-data/faq-data';
import React, { Fragment, useEffect, useState } from 'react';
import { FaQq } from 'react-icons/fa';

export default function FooterFaq() {
  const [faqsFooter, setFaqsFooter] = useState<App.Models.Faq[]>([]);
  const [open, setOpen] = useState(0);
  useEffect(() => {
    Faq.data.Footer().then((resp) => {
      setFaqsFooter(resp.data);
    });
    return () => {};
  }, []);

  return (
    <Fragment>
      {faqsFooter.length > 0 ? (
        faqsFooter.map((faq, i) => {
          return (
            <Accordion open={open == i} key={i}>
              <AccordionHeader className="text-white hover:text-white border-b-0 font-patrickHand text-xl" onClick={() => setOpen(i != open ? i : -1)}>
                {faq.title}
              </AccordionHeader>
              <AccordionBody className="text-white font-patrickHand ">
                <div dangerouslySetInnerHTML={{ __html: faq.description }} />
              </AccordionBody>
            </Accordion>
          );
        })
      ) : (
        <div className="my-4 border-dotted border-2 p-3 border-red-500 text-center text-red-500"> Haraf isi faq di dashboard</div>
      )}
    </Fragment>
  );
}
