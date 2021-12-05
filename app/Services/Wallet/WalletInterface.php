<?php

namespace App\Services\Wallet;

/**
 * wallet interface
 */
interface WalletInterface {

    public function deposit($amount, $meta = [], $type = 'deposit', $forceFail = false);
    public function withdraw($amount, $meta = [], $type = 'withdraw', $shouldAccept = true);
}
