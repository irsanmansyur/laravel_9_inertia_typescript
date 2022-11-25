<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "options.name" => "required|string",
            "options.alamat" => "required|string",
            "options.logo" => "required|image|mimes:png,jpg",
        ];
    }
    public function validated($key = null, $default = null)
    {
        $data_default =  $this->validator->validated();
        $data_default['user_id'] = auth()->id();
        return $data_default;
    }
}
