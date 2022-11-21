<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produk extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function images()
    {
        return  $this->hasMany(ProdukImage::class, "produk_id");
    }

    public function links()
    {
        return  $this->hasMany(ProdukLink::class, "produk_id");
    }
    public function variants()
    {
        return  $this->hasMany(ProdukVariant::class, "produk_id");
    }
}
