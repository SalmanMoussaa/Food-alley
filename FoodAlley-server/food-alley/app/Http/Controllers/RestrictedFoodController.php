<?php

namespace App\Http\Controllers;
use App\Model\restrictedFood;

use Illuminate\Http\Request;

class RestrictedFoodController extends Controller
{
    public function index()
    {
        $restrictedFoods = RestrictedFood::all();
    
        return response()->json($restrictedFoods);
    }
    
    public function show($id)
    {
        $restrictedFood = RestrictedFood::findOrFail($id);
    
        return response()->json($restrictedFood);
    }
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'allergie_id' => 'required|exists:allergies,id',
            'ingredient_id' => 'required|exists:ingredients,id'
        ]);
    
        $restrictedFood = RestrictedFood::create($validatedData);
    
        return response()->json($restrictedFood, 201);
    }
    
    public function update(Request $request, $id)
    {
        $restrictedFood = RestrictedFood::findOrFail($id);
    
        $validatedData = $request->validate([
            'allergie_id' => 'required|exists:allergies,id',
            'ingredient_id' => 'required|exists:ingredients,id'
        ]);
    
        $restrictedFood->update($validatedData);
    
        return response()->json($restrictedFood, 200);
    }
    
    public function destroy($id)
    {
        $restrictedFood = RestrictedFood::findOrFail($id);
    
        $restrictedFood->delete();
    
        return response()->json(null, 204);
    }
}
?>