import React from 'react';
import InputError from '@ts/Components/InputError';
import { Input } from '@material-tailwind/react';

export default function InputGroup({ label, value = '', error, ...props }: any) {
  return (
    <>
      <div className="relative w-full h-11 input-custom">
        <Input value={value} error={error?.length > 0 ? true : false} {...props} label={label} />
      </div>
      <InputError message={error} className="-mt-1" />
    </>
  );
}
