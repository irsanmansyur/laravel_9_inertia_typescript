import { ErrorBag, Errors, Page, PageProps } from '@inertiajs/inertia';
import { setDataByKeyValuePair, setDataByMethod, setDataByObject } from '@inertiajs/inertia-react';

export interface AuthInterface {
  user: App.Models.User | null;
}
export interface InertiaBaseInterface extends PageProps {
  auth: AuthInterface;
}
export type setDataInterface<T> = setDataByObject<T> & setDataByMethod<T> & setDataByKeyValuePair<T>;
export interface PropsInertiaBaseInterface {
  auth: AuthInterface;
  settings_app: App.Models.Setting;
  canLogin: boolean;
  flash: Function;
  time_render: number;
  laravelVersion: String;
  phpVersion: String;
  errors: Errors & ErrorBag;
  children?: React.ReactNode;
}

export interface PropsInertiaInterface extends Page<PageProps> {
  props: PageProps & PropsInertiaBaseInterface;
}
