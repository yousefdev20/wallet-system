<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\Admin\LoginController;
use App\Http\Controllers\Gateways\paymentGatewayController;
use App\Http\Controllers\Transaction\transactionController;
use App\Http\Controllers\Admin\Accounts\accountController;

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application (admin prefix).
| These routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your admin API!
|
*/

Route::post('/login', [LoginController::class, 'login']);

Route::group(['middleware' => ['auth:admin']], function (){

    Route::get('/payment/gateways', [paymentGatewayController::class, 'index']);
    Route::post('/gateway/create', [paymentGatewayController::class, 'create']);

    Route::get('/transactions', [transactionController::class, 'index']);
    Route::put('/transaction/accept/{transaction}', [transactionController::class, 'approve']);
    Route::put('/transaction/reject/{transaction}', [transactionController::class, 'reject']);
    Route::get('/transaction/chart', [transactionController::class, 'chart']);

    Route::get('/accounts', [accountController::class, 'index']);
    Route::delete('/account/delete/{user}', [accountController::class, 'delete']);
});
