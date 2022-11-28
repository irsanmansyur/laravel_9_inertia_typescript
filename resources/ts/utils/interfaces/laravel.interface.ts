declare namespace Laravel.Interface {
  export interface Pagination<T> {
    data: T[];
    meta: Meta;
  }
  export interface Resource<T> {
    data: T;
  }
  interface Meta {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    path: string;
    to: number;
    total: number;
    links: MetaLinks[];
  }
  interface MetaLinks {
    active: boolean;
    label: string;
    url: string | null;
  }
}
