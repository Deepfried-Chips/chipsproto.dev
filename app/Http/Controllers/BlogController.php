<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{

    public function show(Request $request): Response
    {

        return Inertia::render('Blog/Blog', [
            'posts' => Posts::orderBy('created_at', 'DESC')->get(),
        ]); //as there isn't any actual functionality yet this does not do much
    }

    public function view(Request $request, $blogid): Response
    {
        return Inertia::render('Blog/ViewBlog', ['post' => Posts::find($blogid)]);
    }
}
