<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validatedData = $request->validated();

        $credentials = [
            'email' => $validatedData['email'],
            'password' => $valiodatedData['password']
        ];

        try {
            if(!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'error' => 'invalid_credentials'
                ], Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException) {
            return response()->json();
        }

        return response()->json([
            'token' => $token
        ]);
    }
}
