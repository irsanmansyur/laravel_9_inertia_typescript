import React, { useEffect, useRef } from 'react';

export default function ProdukImage({ onChange, src, index }: any) {
  const refPreview = useRef<HTMLImageElement>(null);
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!refPreview.current || !e.target.files) return;
    const src = URL.createObjectURL(e.target.files[0]);
    refPreview.current.src = src;
    refPreview.current.style.display = 'block';
    onChange(e.target.files[0], index);
  }
  useEffect(() => {
    if (!refPreview.current || !src) return;
    if (typeof src == 'string') refPreview.current.src = src;

    return () => {};
  }, []);

  return (
    <label className="flex flex-col w-30 h-28 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
      <div className="relative flex flex-col items-center justify-center pt-7">
        <img ref={refPreview} className="absolute inset-0 w-full h-full" />
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
        <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">Select a photo</p>
      </div>
      <input type="file" onChange={(e) => handleImageChange(e)} className="opacity-0" accept="image/*" />
    </label>
  );
}
