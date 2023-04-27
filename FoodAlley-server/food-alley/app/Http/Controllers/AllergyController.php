<?php
namespace App\Http\Controllers;

use App\Models\Allergy;
use Illuminate\Http\Request;

class AllergyController extends Controller
{
    public function index()
    {
        // Get all allergies
        $allergies = Allergy::all();

        return response()->json($allergies);
    }

    public function store(Request $request)
    {
        // Validate request data
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:255',
        ]);

        // Create a new allergy instance
        $allergy = Allergy::create($validatedData);

        return response()->json($allergy, 201);
    }

    public function show(Allergy $allergy)
    {
        return response()->json($allergy);
    }

    public function update(Request $request, Allergy $allergy)
    {
        // Validate request data
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'description' => 'required|max:255',
        ]);

        // Update the allergy instance
        $allergy->update($validatedData);

        return response()->json($allergy);
    }

    public function destroy(Allergy $allergy)
    {
        $allergy->delete();

        return response()->json(null, 204);
    }
}
