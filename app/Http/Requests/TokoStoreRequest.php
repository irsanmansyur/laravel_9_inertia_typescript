<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TokoStoreRequest extends FormRequest
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
            "name" => "required",
            "link" => "required|url",
            "logo" => ($this->toko ? "nullable" : "required") . "|image|mimes:png,jpg",
            "status" => "nullable"
        ];
    }
    public function validated($key = null, $default = null)
    {
        $data_default =  $this->validator->validated();
        if (data_get($data_default, "logo", true) == null)
            unset($data_default['logo']);
        return $data_default;
    }
}
