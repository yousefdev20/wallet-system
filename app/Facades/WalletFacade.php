<?php

namespace App\Facades;

/**
 * @method static array deposit($amount, $meta = [], $type = 'deposit', $forceFail = false)
 * @method static array withdraw($amount, $meta = [], $type = 'withdraw', $shouldAccept = true)
 */
class WalletFacade extends \Illuminate\Support\Facades\Facade {

    /**
     * @return string
     */
    protected static function getFacadeAccessor() {
        return 'wallet';
    }

}
