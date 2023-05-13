<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kitchen extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','slang','imguri'
    ];

    public function recipes()
    {
        return $this->hasMany(Recipe::class);
    }
}