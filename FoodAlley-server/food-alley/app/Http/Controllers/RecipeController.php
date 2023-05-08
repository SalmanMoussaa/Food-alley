<?php

namespace App\Http\Controllers;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes, 200);
    }

    public function searchByName(Request $request)
    {
        try {
            $name = $request->input('name');
            
            // Find the recipe by name
            $recipe = Recipe::where('name', 'LIKE', '%' . $name . '%')->first();
    
            if ($recipe) {
                // Recipe found
                return response()->json($recipe);
            } else {
                // Recipe not found
                return response()->json(['message' => 'Recipe not found'], 404);
            }
        } catch (\Exception $e) {
            // Error occurred
            return response()->json(['message' => 'Error retrieving recipe', 'error' => $e->getMessage()], 500);
        }
    }
    


    public function store(Request $request)
    {
        $recipe = new Recipe;
        $recipe->name = $request->name;
        $recipe->description = $request->description;
        $recipe->preparation_time = $request->preparation_time;
        $recipe->price = $request->price;
        $recipe->kitchen_id = $request->kitchen_id;
        $recipe->save();
        return response()->json($recipe, 201);
    }
    public function show($id)
    {
        $recipe = Recipe::findOrFail($id);
        return response()->json($recipe, 200);
    }
    public function getRecipeByName(Request $request, $name)
    {
        try {
            // Find the recipe by name
            $recipes = Recipe::where('name', $name)->get();

            if ($recipe) {
                // Recipe found
                return response()->json($recipe);
            } else {
                // Recipe not found
                return response()->json(['message' => 'Recipe not found'], 404);
            }
        } catch (\Exception $e) {
            // Error occurred
            return response()->json(['message' => 'Error retrieving recipe', 'error' => $e->getMessage()], 500);
        }
    }


    public function update(Request $request, $id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->name = $request->name;
        $recipe->description = $request->description;
        $recipe->preparation_time = $request->preparation_time;
        $recipe->price = $request->price;
        $recipe->kitchen_id = $request->kitchen_id;
        $recipe->save();
        return response()->json($recipe, 200);
    }


    public function destroy($id)
    {
        $recipe = Recipe::findOrFail($id);
        $recipe->delete();
        return response()->json(null, 204);
    }
    public function edit(Request $request, $id)
{
    $recipe = Recipe::find($id);

    if(!$recipe) {
        return response()->json([
            'message' => 'Recipe not found'
        ], 404);
    }

    $recipe->name = $request->input('name');
    $recipe->description = $request->input('description');
    $recipe->preparation_time = $request->input('preparation_time');
    $recipe->price = $request->input('price');
    $recipe->kitchen_id = $request->input('kitchen_id');
    $recipe->save();

    return response()->json([
        'message' => 'Recipe updated successfully',
        'recipe' => $recipe
    ], 200);
}
public function getallnames()
{
    $recipes = Recipe::all(); // Retrieve all recipes from the database

    $names = $recipes->pluck('name'); // Extract the 'name' column values into an array
    $ss="salman";

    return response()->json($names, 200);
}

}



