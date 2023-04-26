<?php

namespace App\Http\Controllers;

use App\Models\Orderitems;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function index()
    {
        $orderItems = OrderItem::all();
        return response()->json($orderItems);
    }

    public function store(Request $request)
    {
        $request->validate([
            'recipe_id' => 'required|exists:recipes,id',
        ]);

        $orderItem = OrderItem::create([
            'recipe_id' => $request->recipe_id,
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