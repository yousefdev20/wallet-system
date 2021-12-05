<?php

namespace App\Services\Wallet;

use App\Exceptions\UnacceptedTransactionException;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

class Wallet implements WalletInterface
{

    public function deposit($amount, $meta = [], $type = 'deposit', $forceFail = false) {

        return auth()->user()->wallet->deposit($amount, $meta, $type, $forceFail);
    }

    public function withdraw($amount, $meta = [], $type = 'withdraw', $shouldAccept = true) {
        return auth()->user()->wallet->withdraw($amount, $meta, $type, $shouldAccept);
    }
}
