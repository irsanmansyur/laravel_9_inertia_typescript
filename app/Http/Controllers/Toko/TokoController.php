<?php

namespace App\Http\Controllers\Toko;

use App\Http\Controllers\Controller;
use App\Http\Requests\TokoStoreRequest;
use App\Http\Resources\TokoResource;
use App\Http\Services\TokoService;
use App\Models\Toko;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TokoController extends Controller
{
    public function index(Request $request)
    {
        $tokos = Toko::latest()->paginate(20);
        if ($request->ajax() && $request->wantsJson()) return $tokos;
        return Inertia::render("Toko/Master", [
            "tokos" => TokoResource::collection($tokos)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render("Toko/Add");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(TokoStoreRequest $tokoStoreRequest)
    {
        $toko = TokoService::save($tokoStoreRequest->validated());
        return to_route("toko.master")->with("success", "Toko berhasil di tambahkan");
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
    public function edit(Toko $toko)
    {
        return Inertia::render("Toko/Edit", [
            'toko' => new TokoResource($toko)
        ]);
    }

    public function update(TokoStoreRequest $tokoStoreRequest, Toko $toko)
    {
        TokoService::update($tokoStoreRequest->validated(), $toko);
        return to_route("toko.master")->with("success", "Toko berhasil di update");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Toko $toko)
    {
        $statusSuccess = TokoService::delete($toko);
        if ($statusSuccess) session()->flash("success", "Toko berhasil dihapus");
        else session()->flash("success", "Toko berhasil dihapus");
        return to_route("toko.master");
    }
}
