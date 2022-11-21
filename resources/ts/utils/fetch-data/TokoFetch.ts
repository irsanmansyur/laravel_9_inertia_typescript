import axios from "axios";
import route from "ziggy-js";
export const getTokoAll = () => axios.get(route("toko.master") + "?type=all");
