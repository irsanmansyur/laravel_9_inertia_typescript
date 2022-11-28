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
        $kategories = ProdukKategori::when($request->type == "all", function () {
        }, function ($qw) {
            $qw->with(["childrens" => function ($q) {
                $q->with("childrens");
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
