<?php

namespace App\Http\Controllers;

use App\Models\Produk;
use App\Models\Toko;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $dateNow = Carbon::now();
        $dateMontBefore =   Carbon::now()->subMonth();
        $produkCountMonth = Produk::whereMonth("created_at", $dateNow->format("m"))->whereYear("created_at", $dateNow->format("Y"))->count();
        $produkCountMonthBefore = Produk::whereMonth("created_at", $dateMontBefore->format("m"))->whereYear("created_at", $dateMontBefore->format("Y"))->count();
        return Inertia::render(
            'dashboard/index',
            array_merge(
                [
                    "produk_count" => Produk::count(),
                    "toko_count" => Toko::count(),
                ],
                compact("produkCountMonthBefore", "produkCountMonth")
            )
        );
    }
}
