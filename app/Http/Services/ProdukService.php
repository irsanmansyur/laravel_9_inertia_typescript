<?php

namespace App\Http\Services;

use App\Models\Produk;
use App\Models\ProdukImage;
use App\Models\ProdukLink;
use App\Models\ProdukVariant;
use App\Models\Toko;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class ProdukService
{
    static function save(array $data)
    {
        DB::beginTransaction();
        try {
            $produk = Produk::create(Arr::only($data, ['name', "alias", "name_description", "details", "how_to_apply", "ingredients", "faq", "kategori_id"]));

            $dataImages = [];
            foreach ($data['images'] as $key => $value) {
                $dataImages[] = [
                    "produk_id" => $produk->id,
                    "name" => $value['name'],
                    "color" => $value['color'],
                    "image" => FileService::uploadFile($value['image'], "PRD", "upload/produk")
                ];
            }
            $produk->images()->insert($dataImages);

            $dataLinks = [];
            foreach ($data['links'] as $key => $value) {
                $dataLinks[] = [
                    "produk_id" => $produk->id,
                    "toko_id" => $value['toko_id'],
                    "link" => $value['link'],
                ];
            }
            $produk->links()->insert($dataLinks);

            $dataVariants = [];
            foreach ($data['variants'] as $key => $value) {
                $dataVariants[] = [
                    "produk_id" => $produk->id,
                    "name_variant" => $value['name_variant'],
                    "price" => $value['price'],
                    "price_after_diskon" => $value['price_after_diskon'],
                    "qty" => $value['qty'],
                ];
            }
            $produk->variants()->insert($dataVariants);

            DB::commit();

            return $produk;
            // all good
        } catch (\Exception $e) {
            DB::rollback();
            dd($e);
        }
    }
    static function update(array $data, Toko $toko)
    {
        if (data_get($data, "logo")) {
            $data['logo'] = FileService::uploadFile($data['logo'], "TK", "upload/toko");
            FileService::deleteFile($toko->logo, "upload/toko");
        }
        return $toko->update($data);
    }
    static function delete(Toko $toko): bool
    {
        if (!$toko->delete()) return false;
        FileService::deleteFile($toko->logo, "upload/toko");
        return true;
    }
}
