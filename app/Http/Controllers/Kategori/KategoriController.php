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


    public function list(Request $request)
    {
        $kategories = ProdukKategori::when($request->type == "all", function ($qw) {
            $qw->where(function ($builder) {
                $builder->where("parent_id", null)->orWhere("parent_id", 0);
            })->with(["allChildrens" => function ($q) {
                $q->orWhere("parent_id", "produk_kategoris.id");
            }]);
        })->get();
        return response()->json(["kategories" => $kategories]);
    }
    public function children(ProdukKategori $kategori)
    {
        $kategories = $kategori->getChildTree();
        return response()->json(["data" => $kategories]);
    }
}
