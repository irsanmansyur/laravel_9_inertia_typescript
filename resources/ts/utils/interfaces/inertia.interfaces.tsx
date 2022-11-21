import { PageProps } from "@inertiajs/inertia";
import { setDataByKeyValuePair, setDataByMethod, setDataByObject } from "@inertiajs/inertia-react";

interface AuthInterface {
  user: App.Models.User | null;
}
export interface InertiaBaseInterface extends PageProps {
  auth: AuthInterface;
}
export type setDataInterface<T> = setDataByObject<T> & setDataByMethod<T> & setDataByKeyValuePair<T>;
