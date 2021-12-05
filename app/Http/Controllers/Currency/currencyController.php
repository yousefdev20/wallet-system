<?php

namespace App\Http\Controllers\Currency;

use App\Http\Controllers\Controller;
use App\Models\Gateways\Currency;
use Illuminate\Http\Request;

class currencyController extends Controller {

    public function index() {

        return $this->response(['data' => Currency::all()]);
    }
}
