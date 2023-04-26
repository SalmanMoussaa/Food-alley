<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes, 200);
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



}



