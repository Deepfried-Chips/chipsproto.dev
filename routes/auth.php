<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\OAuthController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('redirect', [OAuthController::class, 'redirect'])
        ->name('github.redirect');

    Route::get('callback', [OAuthController::class, 'callback']);
});

Route::middleware('auth')->group(function () {
    Route::get('logout', [OAuthController::class, 'destroy'])
        ->name('logout');

    Route::prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index'])
            ->name('admin');

        Route::get('edit/{id}', [AdminController::class, 'edit'])
            ->name('admin.edit');
    });
});
