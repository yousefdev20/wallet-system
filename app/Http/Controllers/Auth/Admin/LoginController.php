<?php

namespace App\Http\Controllers\Auth\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\Admin\AuthenticationAdminRequest;
use App\Models\Admin;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller {

    public function login(AuthenticationAdminRequest $request) {

        $admin = Admin::where('email', $request->email)->first();

        if (! $admin || ! Hash::check($request->password, $admin->password)) {
            return $this->response([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $admin['token'] = $admin->createToken('admin')->plainTextToken;

        return $this->response(['data' => $admin]);
    }
}
