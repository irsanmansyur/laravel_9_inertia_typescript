<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

class ProdukImage extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['image_link'];

    protected function imageLink(): Attribute
    {
        $linkImage = asset("upload/produk/not-found.png");
        if ($this->image && File::exists(public_path('upload/produk/' . $this->image))) $linkImage = asset("upload/produk/" . $this->image);
        return Attribute::make(
            get: fn ($value) => $linkImage,
        );
    }
}
