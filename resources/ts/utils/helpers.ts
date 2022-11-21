import React from "react";

export const backOnClick = (e: React.MouseEvent) => {
  e.preventDefault();
  history.back();
};
