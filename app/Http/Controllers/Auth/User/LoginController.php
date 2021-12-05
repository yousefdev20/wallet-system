<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\User\AuthenticationUserRequest;
use App\Http\Requests\Auth\User\RegistrationUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller {

    public function login(AuthenticationUserRequest $request) {

        if (Auth::attempt($request->validated())) {
            $user = auth()->user();
            $user['token'] = Auth::user()->createToken('client')->plainTextToken;
            return $this->response(['data' => $user]);
        }

        return $this->response([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
}
