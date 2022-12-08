<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProdukResource;
use App\Models\Produk;
use App\Models\ProdukKategori;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendProdukController extends Controller
{
    public function index(Request $request)
    {
        Inertia::setRootView("public");
        $kategori = null;
        if ($request->kategori_id)
            $kategori = ProdukKategori::whereId($request->kategori_id)->first();

        $produks = Produk::when($kategori, function (Builder $builder) use ($kategori) {
            $builder->whereKategoriId($kategori->id);
        })
            ->when($request->sort, function (Builder $builder) {
                if (request()->sort == "newest")
                    $builder->orderBy("produks.created_at", "DESC");
                else if (request()->sort == "lowest_price")
                    $builder->orderBy("produk_variants.price", "DESC");
                else if (request()->sort == "highest_price")
                    $builder->orderBy("produk_variants.price");
            })
            ->with(["kategori:id,name", "variants", "images"])
            ->join("produk_variants", "produk_variants.produk_id", "=", "produks.id")
            ->groupBy("produks.id")->select("produks.id")->paginate(20);
        return Inertia::render("produk/list", [
            "produks" =>  ProdukResource::collection($produks)->response()->getData(),
            "kategori" => $kategori
        ]);
    }
    public function list(Request $request)
    {
        $produks = Produk::when($request->kategori_id, function (Builder $builder) use ($request) {
            $builder->whereKategoriId($request->kategori_id);
        })->with(["kategori:id,name", "variants", "images"])
            ->join("produk_variants", "produk_variants.produk_id", "=", "produks.id")
            ->groupBy("produks.id")
            ->when($request->sort, function (Builder $builder) {
                if (request()->sort == "newest")
                    $builder->orderBy("produks.created_at", "DESC");
                else if (request()->sort == "lowest_price")
                    $builder->orderBy("produk_variants.price");
                else if (request()->sort == "highest_price")
                    $builder->orderBy("produk_variants.price", "DESC");
            })
            ->select("produks.*")
            ->paginate(20);
        return response()->json([
            "produks" =>  ProdukResource::collection($produks)->response()->getData()
        ]);
    }
}
