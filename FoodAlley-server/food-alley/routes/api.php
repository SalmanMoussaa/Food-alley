<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeIngredientController;
use App\Http\Controller\orderitemsController;
use App\Http\Controllers\AllergyController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
Route::controller(RecipeController::class)->group(function (){
Route::get('/recipes',  'index');
Route::post('/recipes',  'store');
Route::get('/recipes/{id}',  'show');
Route::put('/recipes/{id}',  'update');
Route::delete('/recipes/{id}',  'destroy');
});
Route::resource('kitchens', 'App\Http\Controllers\KitchenController')->middleware('auth:api');

Route::get('/ingredients', [IngredientController::class, 'index']);
Route::post('/ingredients', [IngredientController::class, 'store']);
Route::delete('/ingredients/{id}', [IngredientController::class, 'destroy']);

Route::get('/recipe-ingredients', 'RecipeIngredientController@index');
Route::post('/recipe-ingredients', 'RecipeIngredientController@store');
Route::get('/recipe-ingredients/{id}', 'RecipeIngredientController@show');
Route::put('/recipe-ingredients/{id}', 'RecipeIngredientController@update');
Route::delete('/recipe-ingredients/{id}', 'RecipeIngredientController@destroy');

Route::get('orders', [OrderController::class, 'index']);
Route::post('orders', [OrderController::class, 'store']);
Route::get('orders/{order}', [OrderController::class, 'show']);
Route::delete('orders/{order}', [OrderController::class, 'destroy']);

Route::get('order_items', [OrderItemController::class, 'index']);
Route::post('order_items', [OrderItemController::class, 'store']);
Route::get('order_items/{id}', [OrderItemController::class, 'show']);
Route::delete('order_items/{id}', [OrderItemController::class, 'destroy']);



Route::get('/allergies', [AllergyController::class, 'index']);
Route::post('/allergies', [AllergyController::class, 'store']);
Route::get('/allergies/{allergy}', [AllergyController::class, 'show']);
Route::put('/allergies/{allergy}', [AllergyController::class, 'update']);
Route::delete('/allergies/{allergy}', [AllergyController::class,'destroy']);
