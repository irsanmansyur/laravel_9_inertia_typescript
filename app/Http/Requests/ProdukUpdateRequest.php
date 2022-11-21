<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProdukUpdateRequest extends FormRequest
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
            "kategori_id" => "required|exists:produk_kategoris,id",
            "name" => "required",
            "alias" => "string|nullable",
            "name_description" => "string|required",
            "details" => "required",
            "how_to_apply" => "required",
            "ingredients" => "required",
            "faq" => "required"
        ];
    }
}
