<?php

namespace App\Observers;

use App\Jobs\FreshBalanceJob;
use App\Models\Wallet;
use MannikJ\Laravel\Wallet\Jobs\RecalculateWalletBalance;

class WalletObserver
{
    /**
     * Handle the Wallet "created" event.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function created(Wallet $wallet) {
        if ($wallet->isDirty('balance')) {
            FreshBalanceJob::dispatch($wallet);
        }
    }

    /**
     * Handle the Wallet "updated" event.
     *
     * @param  \App\Models\Wallet  $wallet
     * @return void
     */
    public function saved(Wallet $wallet) {

        if ($wallet->isDirty('balance')) {
//            FreshBalanceJob::dispatch($wallet);
        }
    }
}
