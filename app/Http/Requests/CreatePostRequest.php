<?php

namespace App\Http\Requests;

use App\Models\Posts;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class CreatePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('create', Posts::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'body' => 'required',
        ];
    }

    public function createPost() {

        $parsedObject = YamlFrontMatter::parse($this->body);

        $title = $parsedObject->title;

        $file = Storage::put($title . '/document.md', $this->body);

        $post = new Posts(
            [
                'title' => $title,
                'document' => $title,
            ]
        );

        $this->user()->posts()->save($post);

    }
}
