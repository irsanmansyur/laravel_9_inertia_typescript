<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdukLinkUpdateManyRequest;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ProdukLinkController extends Controller
{
    public function updateMany(ProdukLinkUpdateManyRequest $produkLinkUpdateManyRequest, Produk $produk)
    {
        DB::beginTransaction();
        try {
            $produk->links()->delete();
            $linksCollection =  collect($produkLinkUpdateManyRequest->links);
            $produk->links()->insert(
                $linksCollection->map(function ($v) use ($produk) {
                    return [
                        "produk_id" => $produk->id,
                        "toko_id" => $v['toko_id'],
                        "link" => $v['link'],
                    ];
                })->toArray()
            );
            DB::commit();
        } catch (\Throwable $th) {
            Log::alert($th->getCode() . " :: " . $th->getMessage());
            return back()->with("danger", "Link produk gagal di update");
        }
        return back()->with("success", "Link produk telah di update");
    }
}
