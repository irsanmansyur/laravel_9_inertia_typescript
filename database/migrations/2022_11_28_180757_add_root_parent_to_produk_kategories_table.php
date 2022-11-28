<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('produk_kategoris', function (Blueprint $table) {
            $table->integer("root_parent")->nullable();
            $table->integer("parent_id")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('produk_kategoris', function (Blueprint $table) {
            $table->dropColumn("root_parent");
            $table->dropColumn("parent_id");
        });
    }
};
