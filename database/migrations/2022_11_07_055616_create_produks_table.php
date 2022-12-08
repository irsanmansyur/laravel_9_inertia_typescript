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
        Schema::create('produks', function (Blueprint $table) {
            $table->id();
            $table->foreignId("kategori_id")->constrained("produk_kategoris")->restrictOnDelete();
            $table->char("name");
            $table->char("alias");
            $table->string("name_description");
            $table->text("details");
            $table->text("how_to_apply");
            $table->text("ingredients");
            $table->text("faq");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produks');
    }
};
