<?php

namespace App\Http\Controllers\Transaction;

use App\Facades\WalletFacade;
use App\Http\Controllers\Controller;
use App\Http\Requests\Transaction\DepositRequest;
use App\Http\Requests\Transaction\WithdrawRequest;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;

class transactionController extends Controller {

    public function index(Request $request) {

        $transaction = Transaction::query();

        (($request->from_date === null) ?? true) ?:
            $transaction->whereBetween('created_at',
                [
                    $request->from_date, $request->to_date
                ]);

        return $this->response(['data' => $transaction->get()]);
    }

    public function deposit(DepositRequest $request) {

        return $this->response([
            WalletFacade::deposit($request->amount, $request->validated())
        ]);
    }

    public function withdrawal(WithdrawRequest $request) {

        return $this->response([
            WalletFacade::withdraw($request->amount, $request->validated())
        ]);
    }

    public function approve(Transaction $transaction) {

        return $this->response(['data' => $transaction->acceptTransaction()]);
    }

    public function reject(Transaction $transaction) {

        return $this->response(['data' => $transaction->rejectedTransaction()]);
    }

    public function show() {

        $transactions = auth()->user()->transactions()->simplePaginate(5);

        return $this->response(['data' => compact('transactions')]);
    }
}
