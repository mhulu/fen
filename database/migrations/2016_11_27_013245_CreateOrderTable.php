<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('users', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('password', 70);
        //     $table->string('wx_id');
        //     $table->string('mobile', 12);
        //     $table->string('device');
        //     $table->timestamps();
        // });
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('mobile', 11)->unique();
            $table->string('detail', 70);
            $table->string('address', 70);
            $table->text('device');
            $table->timestamps();
        });
        // Schema::create('products', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('name', 20);
        //     $table->text('description');
        //     $table->string('image');
        //     $table->tinyInteger('price');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
