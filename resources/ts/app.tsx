import './bootstrap';
import '@ts/css/styel.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from '@material-tailwind/react';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Tantangin';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      <ThemeProvider>
        <App {...props} />
      </ThemeProvider>,
    );
  },
});

InertiaProgress.init({ color: '#4B5563', showSpinner: true });
