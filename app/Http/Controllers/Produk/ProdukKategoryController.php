<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdukKategoriRequest;
use App\Models\ProdukKategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProdukKategoryController extends Controller
{
    public function index()
    {
        $produk_kategoris = ProdukKategori::withCount("produks")->paginate(20);
        return Inertia::render("kategori/master/List", compact("produk_kategoris"));
    }
    public function add()
    {
        return Inertia::render("kategori/master/Add");
    }
    public function store(ProdukKategoriRequest $produkKategoriRequest)
    {
        $produkKategori = ProdukKategori::create($produkKategoriRequest->validated());
        return to_route("produk_kategori.master")->with(["produkKategori" => $produkKategori, "success" => "Kategori Produk berhasil di tambahkan"]);
    }
    public function edit(ProdukKategori $produkKategori)
    {
        return Inertia::render("kategori/master/Edit", compact("produkKategori"));
    }
    public function update(ProdukKategori $produkKategori, ProdukKategoriRequest $produkKategoriRequest)
    {
        $produkKategori->update($produkKategoriRequest->validated());
        return to_route("produk_kategori.master")->with(["produkKategori" => $produkKategori, "success" => "Kategori Produk berhasil di Di Update"]);
    }
    public function destroy(ProdukKategori $produkKategori)
    {
        $produkKategori->delete();
        return to_route("produk_kategori.master")->with(["produkKategori" => $produkKategori, "danger" => "Kategori Produk berhasil di hapus"]);
    }
}
