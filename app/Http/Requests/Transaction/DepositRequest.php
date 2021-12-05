<?php

namespace App\Http\Requests\Transaction;

use App\Models\Gateways\Currency;
use App\Models\Gateways\PaymentGateway;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DepositRequest extends FormRequest
{

    public $max, $min;

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

        $this->max = config('constants.DEFAULT_MAX_DEPOSIT', 1000000);
        $this->min = config('constants.DEFAULT_MIN_DEPOSIT', 0);

        if (request()->has('is_multi_currency')) {

            $payment_gateway = PaymentGateway::find(request('payment_gateway_id') ?? 0);
            $this->max = $payment_gateway->max_deposit ?? $this->max;
            $this->min = $payment_gateway->min_deposit ?? $this->min;
        }

        return [
            "payment_gateway_id" => 'required|integer',
            "is_multi_currency" => 'nullable|boolean',
            "currency_id" => 'nullable',
            "card_number" => 'required',
            "card_expire_year" => 'required|date',
            "security_code" => 'required',
            "amount" => "numeric|max:".$this->max."|min:".$this->min,
        ];
    }
    public function messages() {

        return [
                'amount.max' => 'The amount must not be greater than ' . $this->max . ' USD. you are trying to charge ('
                    . $this->amount . ') after converting to USD.',
                'amount.min' => 'The amount must be at least '. $this->min .'. you are trying to charge ('
                    . $this->amount . ') after converting to USD.',
            ] + parent::messages();
    }
}
