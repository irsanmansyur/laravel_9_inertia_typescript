import axios from 'axios';
import route from 'ziggy-js';

export const getDataProduks = async () => {
  return await axios.get<{ produks: Laravel.Interface.Pagination<App.Models.Produk> }>(route('produk.list'));
};
