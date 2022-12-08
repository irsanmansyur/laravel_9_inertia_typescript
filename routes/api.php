<?php

use App\Http\Controllers\Faq\FaqApiController;
use App\Http\Controllers\Kategori\KategoriController;
use App\Http\Controllers\Produk\FrontendProdukController;
use App\Http\Controllers\UploadImageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::prefix("file")->group(function () {
    Route::get('/list-faq-image', [UploadImageController::class, "listFaqImage"])->name('file.faq_image');
    Route::get('/list-image-editor', [UploadImageController::class, "listImageEditor"])->name('file.image_editor');
    Route::post('/upload-img', [UploadImageController::class, "editorImage"])->name('upload.editor');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/produks', [FrontendProdukController::class, "list"])->name('produk.list');



Route::get('/kategori', [KategoriController::class, "list"])->name('kategori.list');
Route::get('/kategori-children/{kategori}', [KategoriController::class, "children"])->name('kategori.children');


// FAQ
Route::prefix("faq")->group(function () {
    Route::get('/', [FaqApiController::class, "index"])->name('faq.api.list');
    Route::get('/footer', [FaqApiController::class, "footer"])->name('faq.api.footer');
    Route::get('/kategori', [FaqApiController::class, "kategori"])->name('faq.api.kategori');
});
