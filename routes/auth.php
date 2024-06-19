<?php

use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('redirect', [\App\Http\Controllers\OAuthController::class, 'redirect'])
        ->name('github.redirect');

    Route::get('callback', [\App\Http\Controllers\OAuthController::class, 'callback']);
});
