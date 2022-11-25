<?php

namespace App\Http\Controllers\Kategori;

use App\Http\Controllers\Controller;
use App\Models\ProdukKategori;

class KategoriController extends Controller
{
    public function index()
    {
        return ProdukKategori::get();
    }
}
