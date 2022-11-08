import { useState, Fragment, useEffect } from "react";
import { Alert } from "@material-tailwind/react";

export default function AlertCustom({ message, show: s, ...props }) {
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
