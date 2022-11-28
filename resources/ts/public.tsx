import '@ts/css/public.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from '@material-tailwind/react';
import FrontendLayout from './Layouts/frontendLayout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Tantangin';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./src/${name}Page.tsx`, import.meta.glob('./src/**/*Page.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <ThemeProvider>
        <FrontendLayout {...props.initialPage.props} component={<App {...props} />} />
      </ThemeProvider>,
    );
  },
});

InertiaProgress.init({ color: '#4B5563', showSpinner: true });
