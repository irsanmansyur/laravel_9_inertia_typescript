/**
 * This file is auto generated using 'php artisan typescript:generate'
 *
 * Changes to this file will be lost when the command is run again
 */

declare namespace App.Models {
  export interface ProdukLink {
    id: number;
    toko_id: number;
    link: string;
    created_at: string | null;
    updated_at: string | null;
  }

  export interface Produk {
    id: number;
    kategori_id: number;
    name: string;
    alias: string;
    name_description: string;
    details: string;
    how_to_apply: string;
    ingredients: string;
    faq: string;
    created_at: string | null;
    updated_at: string | null;
  }

  export interface Toko {
    id: number;
    name: string;
    logo: string;
    link: string;
    created_at: string | null;
    updated_at: string | null;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    password: string;
    remember_token: string | null;
    created_at: string | null;
    updated_at: string | null;
  }

  export interface ProdukImage {
    id: number;
    produk_id: number;
    name: string;
    image: string;
    color: string;
    created_at: string | null;
    updated_at: string | null;
  }

  export interface ProdukVariant {
    id: number;
    name_variant: string;
    price: number;
    price_after_diskon: number;
    qty: number;
    created_at: string | null;
    updated_at: string | null;
  }

  export interface ProdukKategori {
    id: number;
    name: string;
    description: string;
    created_at: string | null;
    updated_at: string | null;
  }
}
