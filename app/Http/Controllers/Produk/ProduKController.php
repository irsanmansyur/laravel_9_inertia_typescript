<?php

namespace App\Http\Controllers\Produk;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProdukStoreRequest;
use App\Http\Requests\ProdukUpdateRequest;
use App\Http\Resources\ProdukResource;
use App\Http\Services\ProdukService;
use App\Models\Produk;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProduKController extends Controller
{

    public function index()
    {
        $produks = Produk::with("kategori:id,name")->paginate(20);
        return Inertia::render("Produk/Master", compact("produks"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Produk/Add");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProdukStoreRequest $produkStoreRequest)
    {
        $produks =  ProdukService::save($produkStoreRequest->validated());
        return to_route("produk.master")->with("success", "Produk telah di insert");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Produk $produk)
    {
        $produk->load("images", "links", "variants");
        return Inertia::render("Produk/Edit", [
            "produk" => new ProdukResource($produk)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProdukUpdateRequest $produkUpdateRequest, Produk $produk)
    {
        $produk->update($produkUpdateRequest->validated());
        return back()->with("success", "Info produk berhasil di update");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
