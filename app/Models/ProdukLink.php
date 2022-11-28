<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProdukLink extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function toko()
    {
        return $this->belongsTo(Toko::class, "toko_id")->withDefault();
    }
}
