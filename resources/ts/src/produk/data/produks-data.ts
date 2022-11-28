import axios from 'axios';
import route from 'ziggy-js';

export const getDataProduks = async (params: { key: string; value: string }[] = []) => {
  return await axios.get<{ produks: Laravel.Interface.Pagination<App.Models.Produk> }>(route('produk.list') + params.reduce((a, b) => a + `${b.key}=${b.value}&`, '?'));
};
export const getKategoriChildrent = async (id: number) => {
  return await axios.get<{ data: App.Models.ProdukKategori[] }>(route('kategori.children', id));
};
export const getKategoriAll = async () => {
  return await axios.get<{ kategories: App.Models.ProdukKategori[] }>(route('kategori.list') + '?type=all');
};
