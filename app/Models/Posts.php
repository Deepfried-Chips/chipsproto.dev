<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Storage;

class Posts extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'document',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    protected function document(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => Storage::get('chipsproto/' . $value . '/document.md'),
        );
    }
}
