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
        Schema::table('recipe_ingridents', function (Blueprint $table) {
            $table->foreignId('recipes_id')->constrained('recipes')->onDelete('cascade');
            $table->foreignId('ingredients_id')->constrained('ingredients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('recipe_ingridents', function (Blueprint $table) {
            //
        });
    }
};
