<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\UpdatePostRequest;
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
    public function index(Request $request, int $postId): Posts
    {

        if ($request->user()->cannot('view', Posts::class)) {
            abort(403);
        }

        return Posts::find($postId);
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
    public function edit(Request $request, int $id): Response
    {
        if ($request->user()->cannot('update', Posts::class)) {
            abort(403);
        }

        return Inertia::render('Admin/Blog/EditorPage', [
            'post' => Posts::find($id),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request)
    {
        if ($request->user()->cannot('update', Posts::class)) {
            abort(403);
        }

        $request->editPost();

        return redirect(route('admin'));
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
