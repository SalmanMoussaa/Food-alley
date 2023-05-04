<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\User;



class AuthController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'first_name' => 'required|string|max:255',
        'Last_name' => 'required|string|max:255',
        'username' => 'required|string|max:255|unique:users',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6|confirmed',
        'adress' => 'required|string|max:255',
        'phone_number' => 'required|string|max:255|unique:users',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    $user = new User([
        'first_name' => $request->first_name,
        'Last_name' => $request->Last_name,
        'username' => $request->username,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'adress' => $request->adress,
        'phone_number' => $request->phone_number,
    ]);

    $user->save();

   
    $token = $user->createToken('auth_token')->plainTextToken;
    return response()->json([
        'status' => 'success',
        'message' => 'User created successfully',
        'user' => $user,
        'authorisation' => [
            'token' => $token,
            'type' => 'bearer',
        ]
    ]);
}
 
public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (!$token = Auth::attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    return response()->json(['success' => true,
    'token' => $token,
    'user' => Auth::user()
]);
}
}
