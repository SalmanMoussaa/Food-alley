<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Recipe;
use App\Models\Ingredient;



class RecipeIngredient extends Model
{
    use HasFactory;
    protected $table = 'recipe_ingridents';


    protected $fillable = [
        'recipe_id',
        'ingredients_id',
        'quantity',
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }

    public function ingredient()
    {
        return $this->belongsTo(Ingredient::class);
    }
}
