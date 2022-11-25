<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\File;

class SettingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $options = $this->options;
        $optionsLogo = asset("settings/not-found.png");
        if (isset($options['logo']) &&  File::exists(public_path('settings/' . $options['logo']))) $optionsLogo = asset("settings/" . $options['logo']);
        $options['logo'] = $optionsLogo;

        return array_merge(parent::toArray($request), ["options" => $options]);
    }
}
