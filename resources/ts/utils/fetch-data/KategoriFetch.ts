import axios from "axios";
import route from "ziggy-js";

export namespace Kategori.Fetch {
  export const kategoriAll = () => axios.get(route("kategori.master") + "?type=all");
}
