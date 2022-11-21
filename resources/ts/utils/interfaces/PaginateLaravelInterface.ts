export interface PaginateLaravelInterface<T> {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page_url: string;
  last_page_url: string;
  next_page_url: string;
  prev_page_url: null | string;
  path: string;
  from: number;
  to: number;
  data: T[];
}

export namespace Laravel.Interface {
  export interface Model<T> {
    data: T;
  }
}
export interface resourceLaraveInterface<T> {
  data: T;
}
