import React, { useState, Fragment, useEffect } from "react";
import { Alert } from "@material-tailwind/react";
import { colorsType } from "@ts/utils";

export default function FlashMessage({ show: s, flash }: any) {
  const [show, setShow] = useState(s);
  const [data, setData] = useState<{ type: colorsType; message: string }>({
    type: "blue",
    message: "",
  });
  useEffect(() => {
    if (Object.keys(flash).length < 1) return;
    setShow(true);
    for (const f in flash) {
      const message = flash[f];
      if (f == "message") {
        setData({ type: "blue", message: message });
        break;
      }
      if (f == "danger") {
        setData({ type: "red", message: message });
        break;
      }
      if (f == "success") {
        setData({ type: "light-blue", message: message });
        break;
      }
    }
  }, [flash]);

  return (
    <Fragment>
      <Alert
        className="mt-4"
        show={show === true}
        color={data?.type}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {data?.message}
      </Alert>
    </Fragment>
  );
}
