<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Wallet;
use Illuminate\Support\Facades\Artisan;

class UserObserver
{
    /**
     * Handle the User "created" event.
     *
     * When create new user account the application automatically create wallet.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function created(User $user) {
        Wallet::create(['user_id' => $user->id]);
    }
}
