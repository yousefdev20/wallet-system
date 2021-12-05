<?php

namespace App\Observers;

use App\Models\Gateways\PaymentGateway;
use Illuminate\Support\Facades\Cache;

class PaymentGatewayObserver
{
    protected function refresh() {

        Cache::forget('paymentGateway');

        Cache::rememberForever('paymentGateway', function (){
            return \App\Models\Gateways\PaymentGateway::all();
        });
    }
    /**
     * Handle the PaymentGateway "created" event.
     *
     * @param  \App\Models\PaymentGateway  $paymentGateway
     * @return void
     */
    public function created(PaymentGateway $paymentGateway) {

        $this->refresh();
    }

    /**
     * Handle the PaymentGateway "updated" event.
     *
     * @param  \App\Models\PaymentGateway  $paymentGateway
     * @return void
     */
    public function updated(PaymentGateway $paymentGateway) {

        $this->refresh();
    }

    /**
     * Handle the PaymentGateway "deleted" event.
     *
     * @param  \App\Models\PaymentGateway  $paymentGateway
     * @return void
     */
    public function deleted(PaymentGateway $paymentGateway) {

        $this->refresh();
    }

}
