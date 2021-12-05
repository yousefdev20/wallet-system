<?php

namespace App\Observers;

use App\Models\Transaction;
use Illuminate\Support\Facades\Log;

class TransactionObserver
{
    public function creating($transaction) {

        $transaction->hash = uniqid('trans_');
    }

    /**
     * * Handle the Transaction "updated" event.
     *
     * @return void
     */
    public function updated(Transaction $transaction) {

        if ($transaction->isDirty('status') && $transaction->status === 'approved') {

            $transaction->wallet->balance += $transaction->type === 'withdraw' ?
                ($transaction->amount * -1) :
                    abs($transaction->amount);

            $transaction->wallet->save();
        }
    }
}
