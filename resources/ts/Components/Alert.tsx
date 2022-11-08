import { useState, Fragment, useEffect } from "react";
import { Alert } from "@material-tailwind/react";

type Props = {
  message?: string;
  show: boolean;
  color: string;
};
export default function AlertCustom({ message, show: s, ...props }: Props) {
  const [show, setShow] = useState(s);
  useEffect(() => {
    setShow(s);
    return () => {};
  }, [s]);
  return (
    <Fragment>
      <Alert
        {...props}
        show={show}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {message}
      </Alert>
    </Fragment>
  );
}
