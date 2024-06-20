<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Models\Posts;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, int $postId)
    {

        if ($request->user()->cannot('view', Posts::class)) {
            abort(403);
        }

        $post = Posts::find($postId);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request): Response
    {
        if ($request->user()->cannot('create', Posts::class)) {
            abort(403);
        }

        return Inertia::render('Admin/Blog/PublisherPage');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePostRequest $request): RedirectResponse
    {
        if ($request->user()->cannot('create', Posts::class)) {
            abort(403);
        }

        $request->createPost();

        return redirect(route('admin'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Posts $posts)
    {
        if ($request->user()->cannot('viewAny', Posts::class)) {
            abort(403);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Posts $posts): Response
    {
        if ($request->user()->cannot('update', Posts::class)) {
            abort(403);
        }

        return Inertia::render('Admin/Blog/EditorPage', [
            'post' => $posts
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Posts $posts)
    {
        if ($request->user()->cannot('update', Posts::class)) {
            abort(403);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Posts $posts)
    {
        if ($request->user()->cannot('delete', Posts::class)) {
            abort(403);
        }
    }
}
