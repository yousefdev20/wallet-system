<?php

namespace App\Http\Controllers\Gateways;

use App\Http\Controllers\Controller;
use App\Http\Requests\Gateways\PaymentGatewayRequest;
use App\Models\Gateways\PaymentGateway;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class paymentGatewayController extends Controller {

    public function index() {

        $paymentGateways = Cache::rememberForever('paymentGateway', function (){
            return PaymentGateway::all();
        });

        return $this->response(['data' => $paymentGateways]);
    }

    public function create(PaymentGatewayRequest $request) {

        $payment = PaymentGateway::create($request->validated());
        return $this->response(['data' => $payment]);
    }
}
