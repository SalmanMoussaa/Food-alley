<?php

namespace App\Http\Controllers;

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