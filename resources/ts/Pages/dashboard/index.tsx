import { Breadcrumbs, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { ChartProduk } from '@ts/Components/produk/chart-produk';
import BreadcrumbsHome from '@ts/Layouts/components/breadcrumbs-home';
import DashboardLayout from '@ts/Layouts/DashboardLayout';
import { kFormatter } from '@ts/utils/formatters/number-formatter';
import React from 'react';
import { FaProductHunt, FaStoreAlt } from 'react-icons/fa';
import { NumericFormat } from 'react-number-format';

interface PropsDashboard {
  produk_count: number;
  toko_count: number;
  produkCountMonthBefore: number;
  produkCountMonth: number;
}
export default function Dashboard({ produk_count, toko_count, produkCountMonth, produkCountMonthBefore }: PropsDashboard) {
  let percentProdukBulanLalu = (100 * produkCountMonth) / (produkCountMonthBefore == 0 ? 1 : produkCountMonthBefore);
  return (
    <DashboardLayout breadcrumbs={<Bread />}>
      <div className="my-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader color="blue" className="relative h-20 w-20 flex justify-center items-center">
            <FaProductHunt className="w-8 h-8 text-inherit" />
          </CardHeader>
          <CardBody className="text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Produk</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{kFormatter(produk_count)}</h4>
          </CardBody>
          <CardFooter className="border-t">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">
                {percentProdukBulanLalu < 1 ? `-` : '+'}
                {percentProdukBulanLalu}%
              </strong>
              &nbsp;than last Month
            </p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader color="green" className="relative h-20 w-20 flex justify-center items-center">
            <FaStoreAlt className="w-8 h-8 text-inherit" />
          </CardHeader>
          <CardBody className="text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Toko</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{kFormatter(toko_count)}</h4>
          </CardBody>
          <CardFooter className="border-t">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="">
        <ChartProduk />
      </div>
    </DashboardLayout>
  );
}

const Bread = () => {
  return (
    <Breadcrumbs>
      <BreadcrumbsHome />
      <span className="opacity-60">
        <span>Dashboard</span>
      </span>
    </Breadcrumbs>
  );
};
