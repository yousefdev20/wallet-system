<?php

namespace App\Models\Gateways;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentGateway extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'image', 'max_deposit', 'min_deposit', 'max_withdraw', 'max_withdraw', 'min_withdraw', 'allow_currency'];


}
