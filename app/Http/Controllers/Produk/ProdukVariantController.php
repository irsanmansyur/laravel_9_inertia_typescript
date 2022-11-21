<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdukVariantUpdateManyRequest;
use App\Models\Produk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProdukVariantController extends Controller
{
    public function updateMany(Produk $produk, ProdukVariantUpdateManyRequest $produkVariantUpdateManyRequest)
    {
        DB::beginTransaction();
        try {
            $produk->variants()->delete();

            $variantsCollection =  collect($produkVariantUpdateManyRequest->variants);
            $produk->variants()->insert(
                $variantsCollection->map(function ($v) use ($produk) {
                    return [
                        "produk_id" => $produk->id,
                        "name_variant" => $v['name_variant'],
                        "price" => $v['price'],
                        "price_after_diskon" => $v['price_after_diskon'],
                        "qty" => $v['qty'],
                    ];
                })->toArray()
            );
            DB::commit();
        } catch (\Throwable $th) {
            dd($th);
        }
        return back()->with("success", "Variant produk telah di update");
    }
}
