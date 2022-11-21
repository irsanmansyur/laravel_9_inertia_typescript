<?php

namespace App\Http\Controllers\Kategori;

use App\Http\Controllers\Controller;
use App\Models\ProdukKategori;
use Illuminate\Http\Request;

class KategoriController extends Controller
{
    public function index()
    {
        return ProdukKategori::get();
    }
}
