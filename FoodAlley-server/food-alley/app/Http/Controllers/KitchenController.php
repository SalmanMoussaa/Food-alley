<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kitchen;

class KitchenController extends Controller
{
    public function index()
    {
        $kitchens = Kitchen::all();
        return response()->json($kitchens);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255|unique:kitchens',
        ]);

        $kitchen = Kitchen::create($validatedData);
        return response()->json($kitchen);
    }

    
}