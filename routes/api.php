<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Client\walletController;
use App\Http\Controllers\Auth\User\LoginController;
use App\Http\Controllers\Auth\User\RegisterController;
use App\Http\Controllers\Transaction\transactionController;
use App\Http\Controllers\Gateways\paymentGatewayController;
use App\Http\Controllers\Currency\currencyController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);

Route::group(['middleware' => ['auth:client']], function (){

    Route::get('/transactions', [transactionController::class, 'show']);

    Route::get('/wallet', [walletController::class, 'index']);

    Route::get('/payment/gateways', [paymentGatewayController::class, 'index']);
    Route::get('/currencies', [currencyController::class, 'index']);

    Route::post('/deposit', [transactionController::class, 'deposit'])->middleware(['multi_currency']);
    Route::post('/withdraw', [transactionController::class, 'withdrawal']);

});
