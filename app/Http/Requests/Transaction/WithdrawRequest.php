<?php

namespace App\Http\Requests\Transaction;

use App\Models\Gateways\PaymentGateway;
use Illuminate\Foundation\Http\FormRequest;

class WithdrawRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {

        $max = config('constants.DEFAULT_MAX_WITHDRAW', 1000000);
        $min = config('constants.DEFAULT_MIN_WITHDRAW', 0);

        if (request()->has('is_multi_currency')) {

            $payment_gateway = PaymentGateway::find(request('payment_gateway_id') ?? 0);
            $max = $payment_gateway->max_deposit ?? $max;
            $min = $payment_gateway->min_deposit ?? $min;
        }

        return [
            "payment_gateway_id" => 'required|integer',
            "card_number" => 'required',
            "card_expire_year" => 'required|date',
            "security_code" => 'required',
            "amount" => "numeric|max:".$max."|min:".$min,
        ];
    }
}
