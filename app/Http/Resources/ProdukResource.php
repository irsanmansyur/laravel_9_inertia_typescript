<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProdukResource extends JsonResource
{

    public function toArray($request)
    {
        $data = parent::toArray($request);
        if (data_get($data, "links"))
            $data["links"] = ProdukLinkResource::collection($this->links);

        return array_merge($data, [
            "images" => ProdukImageResource::collection($this->images),
        ]);
    }
}
