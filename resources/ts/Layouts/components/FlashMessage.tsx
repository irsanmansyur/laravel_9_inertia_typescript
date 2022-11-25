import React, { useEffect } from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function FlashMessage({ flash, second = 5 }: any) {
  useEffect(() => {
    if (Object.keys(flash).length < 1) return;

    let toastOptions: ToastOptions = { position: 'top-right', autoClose: second * 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: 'colored' };
    for (const f in flash) {
      const message = flash[f];
      if (f == 'message') toast.info(message, toastOptions);
      if (f == 'danger') toast.error(message, toastOptions);
      if (f == 'success') toast.success(message, toastOptions);
    }
  }, [flash]);

  return <ToastContainer position="top-right" autoClose={second * 1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />;
}
