<?php

namespace App\Http\Controllers\Faq;

use App\Http\Controllers\Controller;
use App\Http\Requests\FaqRequest;
use App\Models\Faq;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class FaqMasterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render("faq/Master", [
            "faqs" => Faq::latest()->paginate(20)
        ]);
    }
    public function create()
    {
        return Inertia::render("faq/Create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FaqRequest $faqRequest)
    {
        $faq = Faq::create($faqRequest->validated());
        return back()->with(["success" => "Faq inserted", "faq" => $faq]);
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


    public function edit(Faq $faq)
    {
        return Inertia::render("faq/Edit", compact("faq"));
    }

    public function update(FaqRequest $faqRequest, Faq $faq)
    {
        $faq->update($faqRequest->validated());
        return to_route("faq.master")->with("success", "Faq updated!");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Faq $faq)
    {
        $faq->delete();
        return back()->with("danger", "Faq telah di hapus");
    }
}
