<?php

namespace Database\Seeders;

use App\Models\ProdukKategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KategoriProdukSeeder extends Seeder
{
    public function run()
    {
        ProdukKategori::insert([
            ["name" => "Skincare", "description" => fake()->paragraph(5), "created_at" => now(), "updated_at" => now()],
            ["name" => "Tools & Merchandise", "description" => fake()->paragraph(5), "created_at" => now(), "updated_at" => now()],
            ["name" => "Collaboration", "description" => fake()->paragraph(5), "created_at" => now(), "updated_at" => now()],
            ["name" => "Makeup", "description" => fake()->paragraph(5), "created_at" => now(), "updated_at" => now()],
        ]);

        $data = [];
        for ($i = 0; $i < 5; $i++) {
            $kategori =  ProdukKategori::inRandomOrder()->where("parent_id", null)->first();
            $data[] = [
                "name" => fake()->jobTitle(), "description" => fake()->paragraph(5),
                "root_parent" => $kategori->id,
                "parent_id" => $kategori->id, "created_at" => now(), "updated_at" => now()
            ];
        }
        ProdukKategori::insert($data);

        $data = [];
        for ($i = 0; $i < 7; $i++) {
            $kategori =  ProdukKategori::inRandomOrder()->where("parent_id", "!=", null)->first();
            $data[] = [
                "name" => fake()->jobTitle(), "description" => fake()->paragraph(5),
                "root_parent" => $kategori->root_parent,
                "parent_id" => $kategori->id, "created_at" => now(), "updated_at" => now()
            ];
        }
        ProdukKategori::insert($data);
    }
}
