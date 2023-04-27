<?php

namespace App\Http\Controllers;

use App\Models\UserAllergy;
use Illuminate\Http\Request;

class UserAllergyController extends Controller
{
    public function index()
    {
        $userAllergies = UserAllergy::all();

        return response()->json($userAllergies);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'allergy_id' => 'required|integer',
        ]);

        $userAllergy = UserAllergy::create($validatedData);

        return response()->json($userAllergy, 201);
    }

    public function show($id)
    {
        $userAllergy = UserAllergy::find($id);

        if (!$userAllergy) {
            return response()->json(['message' => 'User allergy not found'], 404);
        }

        return response()->json($userAllergy);
    }

    public function destroy($id)
    {
        $userAllergy = UserAllergy::find($id);

        if (!$userAllergy) {
            return response()->json(['message' => 'User allergy not found'], 404);
        }

        $userAllergy->delete();

        return response()->json(['message' => 'User allergy deleted'], 204);
    }
}
