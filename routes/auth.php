<?php

use App\Http\Controllers\OAuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('redirect', [OAuthController::class, 'redirect'])
        ->name('github.redirect');

    Route::get('callback', [OAuthController::class, 'callback']);
});

Route::middleware('auth')->group(function () {
    Route::post('logout', [OAuthController::class, 'destroy'])
        ->name('logout');
});
