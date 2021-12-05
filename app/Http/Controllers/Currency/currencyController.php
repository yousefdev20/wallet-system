<?php

namespace App\Http\Controllers\Currency;

use App\Http\Controllers\Controller;
use App\Models\Gateways\Currency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class currencyController extends Controller {

    public function index() {

        $currency = Cache::rememberForever('currency', function (){
           return  Currency::all();
        });
        return $this->response(['data' => $currency]);
    }
}
