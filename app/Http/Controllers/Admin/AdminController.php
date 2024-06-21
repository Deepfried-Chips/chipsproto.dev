<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Posts;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        if($request->user()->is_admin === false) {
            abort(403);
        }
        return Inertia::render('Admin/Admin', [
            'posts' => Posts::orderBy('created_at', 'DESC')->get(),
        ]);
    }
}
