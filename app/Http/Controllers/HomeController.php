<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __construct()
    {
    }
    public function __invoke(Request $request)
    {
        Inertia::setRootView("public");
        return Inertia::render("home/index");
    }
}
