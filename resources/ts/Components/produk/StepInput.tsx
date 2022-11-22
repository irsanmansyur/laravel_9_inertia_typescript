import { Button, CardFooter } from '@material-tailwind/react';
import { setDataInterface } from '@ts/utils/interfaces/inertia.interfaces';
import React, { useState } from 'react';
import InputProdukDetails from './InputProdukDetails';
import InputProdukImages from './InputProdukImages';
import InputProdukInfo from './InputProdukInfo';
import InputProdukLinks from './InputProdukLinks';
import InputProdukVariants from './InputProdukVariants';

type Props = {
  data: App.Models.Produk;
  errors: Record<keyof App.Models.Produk, string>;
  setData: setDataInterface<App.Models.Produk>;
};
export default function StepInput({ errors, data, setData }: Props) {
  const [step, setStep] = useState<number>(1);
  switch (step) {
    case 1:
      return (
        <>
          <InputProdukInfo errors={errors} data={data} setData={setData} />
          <CardFooter className="flex   justify-end pt-2">
            <Button type="button" onClick={() => setStep(2)}>
              Next
            </Button>
          </CardFooter>
        </>
      );
    case 2:
      return (
        <>
          <InputProdukDetails errors={errors} data={data} setData={setData} />
          <CardFooter className="flex   justify-between pt-2">
            <Button variant="outlined" color="red" type="button" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button type="button" onClick={() => setStep(3)}>
              Next
            </Button>
          </CardFooter>
        </>
      );
    case 3:
      return (
        <>
          <InputProdukImages errors={errors} data={data} setData={setData} />
          <CardFooter className="flex justify-between pt-2">
            <Button variant="outlined" color="red" type="button" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button type="button" onClick={() => setStep(4)}>
              Next
            </Button>
          </CardFooter>
        </>
      );
    case 4:
      return (
        <>
          <InputProdukVariants errors={errors} data={data} setData={setData} />
          <CardFooter className="flex  justify-between pt-2">
            <Button variant="outlined" color="red" type="button" onClick={() => setStep(3)}>
              Back
            </Button>
            <Button typeof="string" type="button" onClick={() => setStep(5)}>
              Next
            </Button>
          </CardFooter>
        </>
      );
    case 5:
      return (
        <>
          <InputProdukLinks errors={errors} data={data} setData={setData} />
          <CardFooter className="flex  gap-7 pt-2">
            <Button variant="outlined" color="red" type="button" onClick={() => setStep(4)}>
              Back
            </Button>
            <Button type="submit" color="light-blue">
              Save
            </Button>
          </CardFooter>
        </>
      );
    default:
      return <></>;
  }
}
