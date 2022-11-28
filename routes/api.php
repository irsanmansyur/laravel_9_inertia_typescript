<?php

use App\Http\Controllers\Kategori\KategoriController;
use App\Http\Controllers\Produk\FrontendProdukController;
use App\Http\Controllers\Produk\ProduKController;
use App\Models\ProdukKategori;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/produks', [FrontendProdukController::class, "list"])->name('produk.list');



Route::get('/kategori', [KategoriController::class, "list"])->name('kategori.list');
Route::get('/kategori-children/{kategori}', [KategoriController::class, "children"])->name('kategori.children');
