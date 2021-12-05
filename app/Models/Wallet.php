<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use App\Exceptions\UnacceptedTransactionException;
use Illuminate\Support\Facades\Log;

class Wallet extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'balance'];

    public function user() {
        return $this->belongsTo(User::class, 'user_id')->withTrashed();
    }
    public function transactions() {
        return $this->hasMany(Transaction::class, 'wallet_id');
    }

    public function deposit($amount, $meta = [], $type = 'deposit', $forceFail = false) {
        $accepted = $amount >= 0 && !$forceFail ? true : false;

        if (!$this->exists) {
            $this->save();
        }

        $transaction = $this->transactions()
            ->create([
                'amount' => abs($amount),
                'type' => $type,
                'meta' => json_encode($meta),
                'deleted_at' => $accepted ? null : Carbon::now(),
            ]);

        if (!$accepted && !$forceFail) {
            throw new UnacceptedTransactionException('Deposit not accepted!', 422);
        }
        $this->refresh();
        return $transaction;
    }

    public function withdraw($amount, $meta = [], $type = 'withdraw', $shouldAccept = true) {
        $accepted = $shouldAccept ? $this->canWithdraw($amount) : true;

        if (!$this->exists) {
            $this->save();
        }

        $transaction = $this->transactions()
            ->create([
                'amount' => $amount,
                'type' => $type,
                'meta' => json_encode($meta),
                'deleted_at' => $accepted ? null : Carbon::now(),
            ]);

        if (!$accepted) {
            throw new UnacceptedTransactionException('Withdrawal not accepted due to insufficient funds!', '422');
        }
        $this->refresh();
        return $transaction;
    }

    public function canWithdraw($amount = null) {

        $credits = $this->transactions()
            ->where('type', 'withdraw')
            ->sum(\DB::raw('abs(amount)'));

        $debits = $this->transactions()
            ->where('type', 'deposit')
            ->sum(\DB::raw('abs(amount)'));

        $balance = $debits - $credits;

        return $amount ? $balance >= abs($amount) : $balance > 0;
    }

    public function refreshBalance() {

        $credits = $this->transactions()
            ->where('type', 'withdraw')
            ->sum(\DB::raw('abs(amount)'));

        $debits = $this->transactions()
            ->where('type', 'deposit')
            ->sum(\DB::raw('abs(amount)'));

        $balance = $debits - $credits;

        $this->balance = $balance;

        $this->save();

        return $balance;
    }

}
