<?php

namespace App\Http\Controllers;
use App\Models\OrderItems;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

class OrderItemController extends Controller
{
    public function index()
    {
        $orderItems = OrderItems::all();
        return response()->json($orderItems);
    }

    public function store(Request $request)
    {
        $request->validate([
            'recepie_id' => 'required|exists:recipes,id',
        ]);

        $orderItem = OrderItems::create([
            'recepie_id' => $request->recepie_id,
        ]); 

        return response()->json([
            'message' => 'Order item created successfully',
            'data' => $orderItem,
        ], 201);
    }

    public function show($id)
    {
        $orderItem = OrderItem::find($id);

        if (!$orderItem) {
            return response()->json(['message' => 'Order item not found'], 404);
        }

        return response()->json($orderItem);
    }

    public function destroy($id)
    {
        $orderItem = OrderItem::find($id);

        if (!$orderItem) {
            return response()->json(['message' => 'Order item not found'], 404);
        }

        $orderItem->delete();

        return response()->json(['message' => 'Order item deleted successfully']);
    }
    
}