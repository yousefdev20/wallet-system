<?php

namespace App\Http\Controllers\Gateways;

use App\Http\Controllers\Controller;
use App\Http\Requests\Gateways\PaymentGatewayRequest;
use App\Models\Gateways\PaymentGateway;
use Illuminate\Http\Request;

class paymentGatewayController extends Controller {

    public function index() {

        return $this->response(['data' => PaymentGateway::all()]);
    }
    public function create(PaymentGatewayRequest $request) {

        $payment = PaymentGateway::create($request->validated());
        return $this->response(['data' => $payment]);
    }
}
