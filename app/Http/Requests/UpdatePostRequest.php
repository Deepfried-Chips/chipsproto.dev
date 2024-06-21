<?php

namespace App\Http\Requests;

use App\Models\Posts;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class UpdatePostRequest extends FormRequest
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
            'id' => 'required|integer',
            'body' => 'required|string',
        ];
    }

    public function editPost()
    {
        $post = Posts::find($this->id);

        $parsedObject = YamlFrontMatter::parse($this->body);

        $post->title = $parsedObject->matter('title', $post->title);

        Storage::put('chipsproto/' . $post->getRawOriginal('document') . '/document.md', $this->body);

        $post->save();
    }
}
