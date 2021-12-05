<?php

namespace App\Http\Requests\Gateways;

use Illuminate\Foundation\Http\FormRequest;

class PaymentGatewayRequest extends FormRequest
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
    public function rules()
    {
        return [
            'name' => 'required|string',
            'image' => 'required|mimes:jpg,bmp,png,jpeg,jpg,jpe,svg|size:3000',
            'allow_currency' => 'required|boolean',
            'min_deposit' => 'required|numeric|min:0|max:1000000',
            'max_deposit' => 'required|numeric|min:0|max:1000000',
            'min_withdraw' => 'required|numeric|min:0|max:1000000',
            'max_withdraw' => 'required|numeric|min:0|max:1000000',
        ];
    }
}
