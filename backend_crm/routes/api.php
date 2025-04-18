<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controller\SignUp\SignUpController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [SignUpController::class, 'store']);
Route::post('/login', [AuthController::class, 'login'])->name("lgin");