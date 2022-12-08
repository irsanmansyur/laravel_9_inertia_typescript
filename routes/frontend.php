<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\Faq\FaqFrontEndController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Produk\FrontendProdukController;
use App\Http\Controllers\Produk\ProduKController;
use Illuminate\Support\Facades\Route;


Route::get('/', HomeController::class)->name('home');

Route::get('/details/{produk}', [ProduKController::class, "show"])->name('produk.show');
Route::get('/produks', [FrontendProdukController::class, "index"])->name('produk.all');

Route::prefix("faq")->group(function () {
    Route::get('/', [FaqFrontEndController::class, "index"])->name('faq.home');
});
Route::prefix("contact")->group(function () {
    Route::get('/', [ContactController::class, "index"])->name('contact');
    Route::post('/', [ContactController::class, "sendMessage"])->name('contact.sendMessage');
});
