<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Wallet;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;

class Transaction extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['wallet_id', 'amount', 'type', 'meta', 'hash', 'deleted_at', 'status'];

    public function wallet() {

        return $this->belongsTo(Wallet::class, 'wallet_id')->withTrashed();
    }

    public function acceptTransaction() {

        $this->update(['status' => 'approved']);
        Log::error($this);
        return true;
    }

    public function rejectedTransaction() {

        if ($this->status !== 'approved') {
            $this->status = 'rejected';
            $this->save();
        }
        return true;
    }

}
