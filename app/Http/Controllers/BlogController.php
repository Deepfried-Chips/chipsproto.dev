<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{

    public function show(Request $request) {
        return Inertia::render('Blog/Blog'); //as there isn't any actual functionality yet this does not do much
    }
}
