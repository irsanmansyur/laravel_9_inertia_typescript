<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdukImageStoreRequest;
use App\Http\Services\FileService;
use App\Models\ProdukImage;
use Illuminate\Http\Request;

class ProdukImageController extends Controller
{
    public function update(ProdukImage $produkImage, ProdukImageStoreRequest $produkImageStoreRequest)
    {
        $data = $produkImageStoreRequest->validated();
        if (data_get($data, "image")) {
            $data['image'] = FileService::uploadFile($produkImageStoreRequest->image, "PRD", "upload/produk");
            FileService::deleteFile($produkImage->image, "upload/produk");
        }
        $produkImage->update($data);
        return back()->with("success", "Informasi gammbar produk berhasil di save");
    }
    public function store(ProdukImageStoreRequest $produkImageStoreRequest)
    {
        $data = $produkImageStoreRequest->validated();
        $data['image'] =  FileService::uploadFile($produkImageStoreRequest->image, "PRD", "upload/produk");
        ProdukImage::create($data);
        return back()->with('success', "Gambar produk di tambahkan  ");
    }
    public function destroy(ProdukImage $produkImage)
    {
        FileService::deleteFile($produkImage->image, "upload/produk");
        $produkImage->delete();
        return back()->with("danger", "Informasi gambar produk telah di hapus");
    }
}
