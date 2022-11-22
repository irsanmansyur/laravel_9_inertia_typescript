<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdukKategori extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function produks()
    {
        return $this->hasMany(Produk::class, "kategori_id");
    }
}
