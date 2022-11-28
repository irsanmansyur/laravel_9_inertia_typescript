import axios from 'axios';
import route from 'ziggy-js';

export const getListKategori = async () => {
  const {
    data: { kategories },
  } = await axios.get<{ kategories: App.Models.ProdukKategori[] }>(route('kategori.list'));
  return { kategories, options: loopKategoriesChildren(kategories) };
};

const loopKategoriesChildren = (kategories: App.Models.ProdukKategori[]) => {
  return kategories.map((kategori) => {
    const opt: Record<string, any> = { label: kategori.name };
    if (kategori?.childrens && kategori.childrens.length > 0) opt.options = loopKategoriesChildren(kategori.childrens);
    else opt.value = kategori.id;
    return opt;
  });
};
