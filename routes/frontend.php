<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\Produk\FrontendProdukController;
use App\Http\Controllers\Produk\ProduKController;
use Illuminate\Support\Facades\Route;


Route::get('/', HomeController::class)->name('home');

Route::get('/details/{produk}', [ProduKController::class, "show"])->name('produk.show');
Route::get('/produks', [FrontendProdukController::class, "index"])->name('produk.all');
