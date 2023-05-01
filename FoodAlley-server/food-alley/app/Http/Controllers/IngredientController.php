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
    
        // Use Spoonacular API to generate a random ingredient name
        $curl = curl_init();
    
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.spoonacular.com/food/ingredients/random?apiKey=230ac152a7f14e4193ac6b436baf010e',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));
    
        $response = curl_exec($curl);
        $err = curl_error($curl);
    
        curl_close($curl);
    
        if ($err) {
            return response()->json(['error' => "cURL Error #:" . $err], 500);
        }
    
        $ingredient = json_decode($response, true);
    
        // Create the new ingredient in the database
        $newIngredient = Ingredient::create([
            'name' => $ingredient['name'],
            'category' => $validated['category'],
            'img_url' => $validated['img_url']
        ]);
    
        return response()->json(['data' => $newIngredient]);
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