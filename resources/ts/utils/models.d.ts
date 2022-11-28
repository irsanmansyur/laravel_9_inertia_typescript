/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

// import { EditorState } from "draft-js";
// const b = { ...EditorState };
declare namespace App.Models {
  export type produkLinkType = 'id' | 'toko_id' | 'link';
  export interface ProdukLink {
    id?: number;
    produk_id?: number;
    toko_id?: number;
    toko: Toko;
    link: string;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface Produk {
    id?: number;
    kategori: ProdukKategori;
    kategori_id?: number;
    name: string;
    alias: string;
    name_description?: string;
    details?: string | object = '';
    how_to_apply?: string | object = '';
    ingredients?: string | object = '';
    faq?: string | object = '';
    created_at?: string | null;
    updated_at?: string | null;
    images: ProdukImage[] = [];
    variants: ProdukVariant[] = [];
    links: ProdukLink[] = [];
  }

  export interface Toko {
    id?: number;
    name: string;
    logo: string | null;
    logo_url: string = '';
    link: string;
    status: string;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string;
    remember_token: string | null;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface ProdukImage {
    id?: number;
    produk_id?: number;
    name: string;
    image: string | File;
    image_link: string = '';
    color: string;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export type variantType = 'name_variant' | 'price' | 'price_after_diskon' | 'qty';
  export interface ProdukVariant {
    id?: number;
    produk_id?: number;
    name_variant: string;
    price: number;
    price_after_diskon: number;
    qty: number;
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface ProdukKategori {
    id: number;
    level: number = 0;
    name: string;
    root_parent: number = 0;
    description: string;
    produks_count?: number;
    childrens: ProdukKategori[] = [];
    created_at?: string | null;
    updated_at?: string | null;
  }

  export interface Setting {
    id?: number;
    user_id: number;
    user: User;
    options: SettingOption;
    'options.logo'?: string;
    'options.name'?: string;
    'options.alamat'?: string;
  }
  export interface SettingOption {
    logo?: string | File;
    name: string;
    alamat: string;
  }
}
