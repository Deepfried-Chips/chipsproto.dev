<?php

use App\Http\Controllers\BlogController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('projects');

Route::get('/blog/', [BlogController::class, 'show'])->name('blog');

Route::get('/blog/{blogid}', [BlogController::class, 'view'])->name('blog.show');
