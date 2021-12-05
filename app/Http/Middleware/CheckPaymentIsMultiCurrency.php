<?php

namespace App\Http\Middleware;

use App\Models\Gateways\Currency;
use Closure;
use Illuminate\Http\Request;

class CheckPaymentIsMultiCurrency
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next) {

        $input = $request->all();

        if ($request->has('is_multi_currency') && ($request->is_multi_currency ?? false) === true) {

            if ($request->currency_id) {
                $currency = Currency::find($request->currency_id);
                $input['amount'] = $request->amount / $currency->exchange ?? 1;
            }
        }

        $request->replace($input);

        return $next($request);
    }
}
