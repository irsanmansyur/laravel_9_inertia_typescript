<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProdukResource extends JsonResource
{

    public function toArray($request)
    {
        return array_merge(parent::toArray($request), [
            "images" => ProdukImageResource::collection($this->images)
        ]);
    }
}
