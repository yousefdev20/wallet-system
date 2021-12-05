<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
//            $table->unsignedInteger('wallet_id');
            $table->foreignId('wallet_id')->references('id')->on('wallets')->onDelete('cascade');
            $table->decimal('amount', 12, 4);
            $table->string('hash');
            $table->enum('type', ['deposit', 'withdraw'])->index();
            $table->enum('status', ['pending', 'approved', 'rejected'])->index()->default('pending');
            $table->json('meta')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transactions');
    }
}
