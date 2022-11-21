<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProdukVariantUpdateManyRequest extends FormRequest
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
            "variants.*.name_variant" => "required|string",
            "variants.*.price" => "required|numeric",
            "variants.*.price_after_diskon" => "required|numeric",
            "variants.*.qty" => "required|numeric",
        ];
    }
}
