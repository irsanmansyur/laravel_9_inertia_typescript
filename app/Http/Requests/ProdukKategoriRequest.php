<?php

namespace App\Http\Requests;

use App\Models\ProdukKategori;
use Illuminate\Foundation\Http\FormRequest;

class ProdukKategoriRequest extends FormRequest
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
            "name" => "string|required",
            "parent_id" => "nullable|numeric|exists:produk_kategoris,id",
            "description" => "string|required",
            "show_home" => "nullable|boolean"
        ];
    }
    public function validated($key = null, $default = null)
    {
        $data_default =  $this->validator->validated();
        if (data_get($data_default, "parent_id")) {
            $produkKategori = ProdukKategori::whereId(data_get($data_default, "parent_id"))->first();
            $data_default['root_parent'] = $produkKategori->root_parent ?  $produkKategori->root_parent : $produkKategori->id;
        }
        return $data_default;
    }
}
