import React from "react";
import InputError from "@/Components/InputError";
import { Input } from "@material-tailwind/react";

export default function InputGroup({ label, error, ...props }) {
  return (
    <>
      <div className="relative w-full min-w-[200px] h-11">
        <Input error={error} {...props} label={label} />
      </div>
      <InputError message={error} className="-mt-3" />
    </>
  );
}
