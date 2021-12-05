<?php

namespace App\Http\Controllers\Admin\Accounts;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class accountController extends Controller {

    public function index() {

        return $this->response(['data' => User::withTrashed()->simplePaginate(5)]);
    }

    public function delete(User $user) {

        $this->response(['data' => $user->delete()]);
    }
}
