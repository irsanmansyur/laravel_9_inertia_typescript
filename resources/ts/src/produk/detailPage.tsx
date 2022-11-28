import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react';
import BreadcrumbsFrontend from '@ts/Layouts/frontend/breadcrumb';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import route from 'ziggy-js';
import SliderRelatedRroduk from './components/slider-related-produk';
import { getKategoriChildrent } from './data/produks-data';
import ImageSlide from './details/imageSlide';
import LinkBelanja from './details/linkBelanja';
import VariantProduk from './details/variantProduk';

export default function detailPage({ produk }: { produk: Laravel.Interface.Resource<App.Models.Produk> }) {
  const [kategories, setKategories] = useState<App.Models.ProdukKategori[]>([]);
  useEffect(() => {
    if (produk.data.kategori.root_parent == null || produk.data.kategori.root_parent == 0) setKategories([produk.data.kategori]);
    else
      getKategoriChildrent(produk.data.kategori.root_parent).then((res) => {
        setKategories(res.data.data);
      });

    return () => {};
  }, []);

  const breadcrumb = kategories.map((ktg) => {
    if (ktg.id == produk.data.kategori_id) return { text: ktg.name, active: true, link: route('produk.all') + `?kategori_id=${ktg.id}` };
    return { text: ktg.name, active: false, link: route('produk.all') + `?kategori_id=${produk.data.kategori_id}` };
  });
  return (
    <div className="py-3">
      <div className="max-w-screen-xl w-full mx-auto ">
        <BreadcrumbsFrontend breadcrumb={breadcrumb} />
        <div className="flex w-full sm:flex-row  flex-col">
          <div className="md:w-2/5">
            <ImageSlide images={produk.data.images} />
          </div>
          <div className="md:w-3/5 pt-10 ">
            <div className="products-detail-desc md:ml-10 pr-2">
              <h1 className="title text-xl font-bold font-sweetly_scentedregular tracking-widest">{produk.data.name}</h1>
              <div className="text-lg mb-2 product-desc text-gray-800">{produk.data.alias}</div>
              <VariantProduk variants={produk.data.variants} />
              <LinkBelanja links={produk.data.links} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 p-4 bg-gradient-to-b to-amber-50 from-blue-gray-50 ">
        <StyleTabs className="max-w-screen-xl w-full mx-auto">
          <Tabs id="custom-animation" value="details">
            <TabsHeader className="flex w-fit mx-auto justify-center gap-2 bg-transparent border-b border-b-primary !rounded">
              <Tab value={'details'} className="flex w-auto items-center justify-center px-2">
                Details
              </Tab>
              <Tab value={'how_to_apply'} className="flex w-auto items-center justify-center px-2">
                How to apply
              </Tab>
              <Tab value={'faq'} className="flex w-auto items-center justify-center px-2">
                faq
              </Tab>
            </TabsHeader>
            <TabsBody
              animate={{
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
              className="py-3 min-h-[250px]"
            >
              <TabPanel value={'details'}>
                <div dangerouslySetInnerHTML={{ __html: produk.data.details + '' }} />
              </TabPanel>
              <TabPanel value={'how_to_apply'}>
                <div dangerouslySetInnerHTML={{ __html: produk.data.how_to_apply + '' }} />
              </TabPanel>
              <TabPanel value={'faq'}>
                <div dangerouslySetInnerHTML={{ __html: produk.data.faq + '' }} />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </StyleTabs>
      </div>
      <div className="max-w-screen-xl w-full mx-auto py-4">
        <SliderRelatedRroduk />
      </div>
    </div>
  );
}

const StyleTabs = styled.div`
  li div.absolute {
  }
`;

const data = [
  {
    label: 'HTML',
    value: 'html',
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: 'React',
    value: 'react',
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: 'Vue',
    value: 'vue',
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },

  {
    label: 'Angular',
    value: 'angular',
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },

  {
    label: 'Svelte',
    value: 'svelte',
    desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
  },
];
