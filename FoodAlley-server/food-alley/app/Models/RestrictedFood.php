<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RestrictedFood extends Model
{
    use HasFactory;

    protected $table = 'restricted_food';

    protected $fillable = [
        'allergie_id',
        'ingredient_id',
    ];

    public function allergie()
    {
        return $this->belongsTo(Allergie::class);
    }

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class);
    }
}
