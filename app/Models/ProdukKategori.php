<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ProdukKategori extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function produks()
    {
        return $this->hasMany(Produk::class, "kategori_id");
    }

    public function childrens()
    {
        return $this->hasMany(ProdukKategori::class, "parent_id");
    }
    public function allChildrens()
    {
        return $this->hasMany(ProdukKategori::class, "root_parent");
    }


    public function getChildTree()
    {
        $idParentRoot = $this->id;
        $query = "WITH RECURSIVE tree_view AS ( SELECT id,parent_id,name,description,0 AS level,CAST(id AS varchar(50)) AS order_sequence FROM produk_kategoris WHERE id=$idParentRoot UNION ALL SELECT parent.id,parent.parent_id,parent.name,parent.description,level + 1 AS level, CAST(order_sequence || '_' || CAST(parent.id AS VARCHAR (50)) AS VARCHAR(50)) AS order_sequence FROM produk_kategoris parent JOIN tree_view tv ON parent.parent_id = tv.id ) SELECT * FROM tree_view GROUP BY parent_id ORDER BY level; ";
        return DB::select(DB::raw($query));
    }
}
