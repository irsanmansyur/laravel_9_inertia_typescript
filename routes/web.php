<?php

use App\Http\Controllers\Kategori\KategoriController;
use App\Http\Controllers\Produk\ProduKController;
use App\Http\Controllers\Produk\ProdukImageController;
use App\Http\Controllers\Toko\TokoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

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

require __DIR__ . '/auth.php';
