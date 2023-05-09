<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use App\Models\RecipeIngredient;
use Illuminate\Http\Request;


class RecipeIngredientController extends Controller
{
    public function index()
    {
        $recipeIngredients = RecipeIngredient::all();
        return response()->json($recipeIngredients);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'recipes_id' => 'required|exists:recipes,id',
            'ingredients_id' => 'required|exists:ingredients,id',
            'quantity' => 'required|string|max:255',
        ]);

        $recipeIngredient = RecipeIngredient::create($validatedData);
        return response()->json($recipeIngredient, 201);
    }

    public function show($id)
    {
        $recipeIngredient = RecipeIngredient::findOrFail($id);
        return response()->json($recipeIngredient);
    }

    public function update(Request $request, $id)
    {
        $recipeIngredient = RecipeIngredient::findOrFail($id);

        $validatedData = $request->validate([
            'recipes_id' => 'sometimes|required|exists:recipes,id',
            'ingredients_id' => 'sometimes|required|exists:ingredients,id',
            'quantity' => 'sometimes|required|string|max:255',
        ]);

        $recipeIngredient->update($validatedData);
        return response()->json($recipeIngredient);
    }

    public function destroy($id)
    {
        $recipeIngredient = RecipeIngredient::findOrFail($id);
        $recipeIngredient->delete();
        return response()->json(null, 204);
    }
    function getecipengredients($recipeId)
{
    $recipeIngredients = RecipeIngredient::where('recipes_id', $recipeId)->get();

    $result = [];

    foreach ($recipeIngredients as $recipeIngredient) {
        $ingredient = Ingredient::find($recipeIngredient->ingredients_id);

        if ($ingredient) {
            $result[] = [
                'ingredient_name' => $ingredient->name,
                'quantity' => $recipeIngredient->quantity,
            ];
        }
    }

    return $result;
}
}