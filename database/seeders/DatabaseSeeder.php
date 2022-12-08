<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $roleAdmin = Role::create(['name' => "admin"]);
        $roleSuperAdmin = Role::create(['name' => "super admin"]);

        $user =    \App\Models\User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@app.com',
            'password' => Hash::make("app")
        ]);
        $user->assignRole($roleAdmin);
        \App\Models\User::factory(10)->create();

        Setting::create([
            "user_id" => 1,
            "status" => 1,
            "options" => json_encode([
                "name" => "Vincidy",
                "alamat" => "jln. 9",
                "logo" => "STG_20221124_182711_dg9.png",
                "email" => "admin@app.com"
            ])
        ]);
    }
}
