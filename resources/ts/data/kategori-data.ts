import axios from 'axios';
import route from 'ziggy-js';

export namespace Kategori.data {
  export const getKategoriAll = async () => {
    return await axios.get<{ kategories: App.Models.ProdukKategori[] }>(route('kategori.list') + '?type=all');
  };
}
