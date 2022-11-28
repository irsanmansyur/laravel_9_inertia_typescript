<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TokoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);
        return array_merge($data, [
            "logo" => asset("upload/toko") . "/" . $this->logo,
            "logo_url" => asset("upload/toko") . "/" . $this->logo,
        ]);
    }
}
