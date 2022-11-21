<?php

namespace App\Http\Services;

use App\Models\Toko;

class TokoService
{
    static function save(array $data)
    {
        $logo = FileService::uploadFile($data['logo'], "TK", "upload/toko");
        $data["logo"] = $logo;
        return Toko::create($data);
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
