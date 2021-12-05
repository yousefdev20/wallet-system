<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class walletController extends Controller {

    public function index() {

        $wallet = auth()->user()->wallet()->first();
        return $this->response(['data' => compact('wallet')]);
    }
}
