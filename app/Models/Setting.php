<?php

namespace App\Models;

use App\Casts\JsonCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;
    protected $casts = [
        "options" => JsonCast::class,
    ];
    protected $guarded = [];
}
