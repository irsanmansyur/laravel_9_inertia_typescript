<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProdukImageStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "produk_id" => "required|exists:produks,id",
            'color' => "required|string",
            "image" => ($this->produkImage ? "nullable" : "required") . "|image|mimes:png,jpg",
            "name" => "required|string"
        ];
    }
}
