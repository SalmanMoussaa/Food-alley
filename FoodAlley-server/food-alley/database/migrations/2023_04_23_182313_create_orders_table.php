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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
           // $table->foreignId('users_id')->constrained('users')->onDelete('cascade');
            //$table->foreignId('order_items_id')->constrained('order_items')->onDelete('cascade');
            $table->string("order_time");
            $table->string("status");
            $table->string("totale_price");


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
        Schema::dropIfExists('orders');
    }
};
