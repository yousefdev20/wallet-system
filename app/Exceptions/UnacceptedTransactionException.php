<?php

namespace App\Exceptions;

use Exception;

class UnacceptedTransactionException extends Exception {

    public function render($request) {

        return response()->json(['error' => $this->message ?? ''], $this->code ?? 500);
    }

    public function report() {
        report($this->message);
    }

}
