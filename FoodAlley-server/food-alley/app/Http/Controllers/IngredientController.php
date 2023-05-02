<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

use App\Models\Ingredient;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function index()
    {
        $ingredients = Ingredient::all();
        return response()->json(['data' => $ingredients]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'img_url' => 'required|string|max:255'
        ]);

        $ingredient = Ingredient::create($validated);
        return response()->json(['data' => $ingredient]);
    }
    public function generateRandomIngredients()
{
    $apiKey = env('230ac152a7f14e4193ac6b436baf010e');
    $url = "https://api.spoonacular.com/recipes/random?apiKey=$apiKey&number=10";

    $response = Http::get($url);
    if ($response) {
        $ingredientsData = $response->json()['ingredients'];

        foreach ($ingredientsData as $ingredientData) {
            $ingredient = new Ingredient([
                'name' => $ingredientData['name'],
                'description' => $ingredientData['description'],
                'image_url' => $ingredientData['image']
            ]);
            $ingredient->save();
        }

        $ingredients = Ingredient::all();
        return response()->json(['data' => $ingredients]);
    } else {
        return response()->json(['error' => 'Failed to retrieve ingredients from API.'], 500);
    }
}

    public function destroy($id)
    {
        $ingredient = Ingredient::find($id);
        if (!$ingredient) {
            return response()->json(['error' => 'Ingredient not found.'], 404);
        }
        $ingredient->delete();
        return response()->json(['message' => 'Ingredient deleted successfully.']);
    }
}