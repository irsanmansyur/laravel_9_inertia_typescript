import React, { useState } from 'react';
import Navbar from '@ts/Layouts/Navbar';
import Sidebar from './Sidebar';
import ToggleSide from './components/ToggleSide';
import Footer from './components/Footer';
import FlashMessage from './components/FlashMessage';
import { Head, usePage } from '@inertiajs/inertia-react';
import { childrenType } from '@ts/utils/types/ChildrenType';
import { PropsInertiaInterface } from '@ts/utils/interfaces/inertia.interfaces';

type Props = {
  breadcrumbs?: JSX.Element;
  children: childrenType;
  title?: string;
};
export default function DashboardLayout({ children, breadcrumbs, title = 'Welcome' }: Props) {
  const [openSideBar, setOpenSideBar] = useState(null);
  const { flash, time_render } = usePage<PropsInertiaInterface>().props;
  return (
    <>
      <Head title={title} />
      <div className="min-h-screen bg-blue-gray-50/50">
        <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
        <div className="p-4 xl:ml-80">
          <Navbar breadcrumbs={breadcrumbs} openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
          <ToggleSide />
          <main className="mx-auto flex min-h-[calc(100vh-130px)] justify-between flex-col">
            <div className="content">
              <FlashMessage flash={flash} />
              {children}
            </div>
            <Footer time_render={time_render} />
          </main>
        </div>
      </div>
    </>
  );
}
