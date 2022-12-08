<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Faq\FaqMasterController;
use App\Http\Controllers\Kategori\KategoriController;
use App\Http\Controllers\Produk\ProduKController;
use App\Http\Controllers\Produk\ProdukImageController;
use App\Http\Controllers\Produk\ProdukKategoryController;
use App\Http\Controllers\Produk\ProdukLinkController;
use App\Http\Controllers\Produk\ProdukVariantController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\Toko\TokoController;
use Illuminate\Support\Facades\Route;


Route::get('/dashboard', [DashboardController::class, "index"])->middleware(['auth', 'verified'])->name('dashboard');


Route::prefix("admin/master-kategori")->middleware("auth")->group(function () {
    Route::get('/', [KategoriController::class, "index"])->name('kategori.master');
    Route::get('/add', [KategoriController::class, "create"])->name('kategori.master.add');
    Route::post('/add', [KategoriController::class, "store"]);
    Route::get('/edit/{kategori}', [KategoriController::class, "edit"])->name('kategori.master.edit');
    Route::post('/edit/{kategori}', [KategoriController::class, "update"]);
    Route::delete('/delete/{kategori}', [KategoriController::class, "destroy"])->name('kategori.master.delete');
});

Route::prefix("admin/master-toko")->middleware("auth")->group(function () {
    Route::get('/', [TokoController::class, "index"])->name('toko.master');
    Route::get('/add', [TokoController::class, "create"])->name('toko.master.add');
    Route::post('/add', [TokoController::class, "store"]);
    Route::get('/edit/{toko}', [TokoController::class, "edit"])->name('toko.master.edit');
    Route::post('/edit/{toko}', [TokoController::class, "update"]);
    Route::delete('/delete/{toko}', [TokoController::class, "destroy"])->name('toko.master.delete');
});
Route::prefix("admin/master-product")->middleware("auth")->group(function () {
    Route::get('/', [ProduKController::class, "index"])->name('produk.master');
    Route::get('/add', [ProduKController::class, "create"])->name('produk.master.add');
    Route::post('/add', [ProduKController::class, "store"]);
    Route::get('/edit/{produk}', [ProduKController::class, "edit"])->name('produk.master.edit');
    Route::post('/edit/{produk}', [ProduKController::class, "update"]);
    Route::delete('/delete/{produk}', [ProduKController::class, "destroy"])->name('produk.master.delete');
});

Route::prefix("admin/master-product-image")->middleware("auth")->group(function () {
    Route::get('/add', [ProdukImageController::class, "create"])->name('produk_image.add');
    Route::post('/add', [ProdukImageController::class, "store"]);
    Route::get('/edit/{produkImage}', [ProdukImageController::class, "edit"])->name('produk_image.edit');
    Route::post('/edit/{produkImage}', [ProdukImageController::class, "update"]);
    Route::delete('/delete/{produkImage}', [ProdukImageController::class, "destroy"])->name('produk_image.delete');
});


Route::prefix("admin/master-product-variant")->middleware("auth")->group(function () {
    Route::post('/edit/{produk}', [ProdukVariantController::class, "updateMany"])->name("produk_variant.update-many");
});

Route::prefix("admin/master-product-link")->middleware("auth")->group(function () {
    Route::post('/edit/{produk}', [ProdukLinkController::class, "updateMany"])->name("produk_link.update-many");
});

Route::prefix("admin/master-product-kategori")->middleware("auth")->group(function () {
    Route::get('/', [ProdukKategoryController::class, "index"])->name("produk_kategori.master");
    Route::get('/add', [ProdukKategoryController::class, "add"])->name("produk_kategori.add");
    Route::post('/add', [ProdukKategoryController::class, "store"]);
    Route::get('/edit/{produkKategori}', [ProdukKategoryController::class, "edit"])->name("produk_kategori.edit");
    Route::post('/edit/{produkKategori}', [ProdukKategoryController::class, "update"]);
    Route::delete('/edit/{produkKategori}', [ProdukKategoryController::class, "destroy"])->name("produk_kategori.delete");
});


Route::prefix("admin/setting")->middleware("auth", "role:super admin")->group(function () {
    Route::get('', [SettingController::class, "index"])->name("settings");
    Route::post('/add', [SettingController::class, "store"])->name("settings.add");
    Route::post('/edit/{setting}', [SettingController::class, "update"])->name("settings.edit");
});

Route::prefix("admin/faq")->middleware("auth", "role:super admin")->group(function () {
    Route::get('', [FaqMasterController::class, "index"])->name("faq.master");
    Route::get('create', [FaqMasterController::class, "create"])->name("faq.master.create");
    Route::post('create', [FaqMasterController::class, "store"]);
    Route::get('edit/{faq}', [FaqMasterController::class, "edit"])->name("faq.master.edit");
    Route::post('edit/{faq}', [FaqMasterController::class, "update"]);
    Route::delete('delete/{faq}', [FaqMasterController::class, "destroy"])->name("faq.master.delete");
});
Route::get('test', function () {
    dd(getSettingApp());
});

require __DIR__ . '/auth.php';
require __DIR__ . '/frontend.php';
