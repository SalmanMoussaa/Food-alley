<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $orders = Order::all();

        return response()->json([
            'orders' => $orders,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'users_id' => 'required|integer',
            'order_items_id' => 'required|integer',
            'order_time' => 'required|string',
            'status' => 'required|string',
            'totale_price' => 'required|string',
        ]);

        $order = Order::create([
            'users_id' => $request->input('users_id'),
            'order_items_id' => $request->input('order_items_id'),
            'order_time' => $request->input('order_time'),
            'status' => $request->input('status'),
            'totale_price' => $request->input('totale_price'),
        ]);

        return response()->json([
            'order' => $order,
            'message' => 'Order created successfully',
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  Order  $order
     * @return Response
     */
    public function show(Order $order)
    {
        return response()->json([
            'order' => $order,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Order  $order
     * @return Response
     */
    public function destroy(Order $order)
    {
        $order->delete();

        return response()->json([
            'message' => 'Order deleted successfully',
        ]);
    }
}