import React from 'react';
import { Faq } from './enums/faq.enum';

export const backOnClick = (e: React.MouseEvent) => {
  e.preventDefault();
  history.back();
};

export namespace FaqHelper {
  export const getNameStatus = (status: Faq.Enum.Status) => {
    console.log(status);

    switch (status) {
      case Faq.Enum.Status.Footer:
        return 'Footer';
      case Faq.Enum.Status.General:
        return 'General';
      case Faq.Enum.Status.Order:
        return 'Order';
      default:
        'All';
    }
  };
}
