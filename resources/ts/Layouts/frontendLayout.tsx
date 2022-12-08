import React from 'react';
import Footer from './frontend/footer';
import NavbarTop from '@ts/Layouts/frontend/navbar';
import { PropsInertiaBaseInterface } from '@ts/utils/interfaces/inertia.interfaces';

export default function FrontendLayout({ component, ...props }: any) {
  const { settings_app, auth }: PropsInertiaBaseInterface = props;
  return (
    <div className="relative h-screen overflow-hidden">
      <NavbarTop setting={settings_app} auth={auth} />
      <div className="flex h-full flex-col justify-between overflow-y-auto pt-14 sm:pt-24">
        <main>{component}</main>
        <Footer setting={settings_app} />
      </div>
    </div>
  );
}
