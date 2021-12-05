<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\User\RegistrationUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller {

    protected function register(RegistrationUserRequest $request) {

        return $this->response(['data' => 'success', 'user' => User::create($request->validated())]);
    }
}
