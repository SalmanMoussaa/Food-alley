<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecipeIngredientController;
use App\Http\Controller\OrderItemController;
use App\Http\Controllers\AllergyController;
use App\Http\Controllers\OpenAIController;
use App\Http\Controllers\RecipeController;






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
Route::get('/recipes', 'App\Http\Controllers\RecipeController@index');
Route::get('/recipes/names', 'App\Http\Controllers\RecipeController@getallnames');
Route::post('/recipes', 'App\Http\Controllers\RecipeController@store');
Route::get('/recipes/search', 'App\Http\Controllers\RecipeController@searchByName');
Route::get('/recipes/{id}', 'App\Http\Controllers\RecipeController@show');
Route::put('/recipes/{id}', 'App\Http\Controllers\RecipeController@update');
Route::delete('/recipes/{id}', 'App\Http\Controllers\RecipeController@destroy');



Route::resource('kitchens', 'App\Http\Controllers\KitchenController');

Route::get('/ingredients', [IngredientController::class, 'index']);
Route::post('/ingredients', [IngredientController::class, 'store']);
Route::delete('/ingredients/{id}', [IngredientController::class, 'destroy']);
Route::get('/ingredients/generate-random', [IngredientController::class, 'generateRandomIngredients']);

Route::get('recipe-ingredients/{recipeId}', 'App\Http\Controllers\RecipeIngredientController@getecipengredients');
Route::get('/recipe-ingredients', 'App\Http\Controllers\RecipeIngredientController@index');
Route::post('/recipe-ingredients', 'App\Http\Controllers\RecipeIngredientController@store');
Route::put('/recipe-ingredients/{id}', 'App\Http\Controllers\RecipeIngredientController@update');
Route::delete('/recipe-ingredients/{id}', 'App\Http\Controllers\RecipeIngredientController@destroy');

Route::get('orders', [OrderController::class, 'index']);
Route::post('orders', [OrderController::class, 'store']);
Route::get('orders/{order}', [OrderController::class, 'show']);
Route::delete('orders/{order}', [OrderController::class, 'destroy']);

Route::get('order_items', [ App\Http\Controllers\OrderItemController::class, 'index']);
Route::post('order_items', [ App\Http\Controllers\OrderItemController::class, 'store']);
Route::get('order_items/{id}', [ App\Http\Controllers\OrderItemController::class, 'show']);
Route::delete('order_items/{id}', [ App\Http\Controllers\OrderItemController::class, 'destroy']);
Route::get('order_items/get/{recipeId}', [ App\Http\Controllers\OrderItemController::class, 'getRecipe']);



Route::get('/allergies', [AllergyController::class, 'index']);
Route::post('/allergies', [AllergyController::class, 'store']);
Route::get('/allergies/{allergy}', [AllergyController::class, 'show']);
Route::put('/allergies/{allergy}', [AllergyController::class, 'update']);
Route::delete('/allergies/{allergy}', [AllergyController::class,'destroy']);

Route::get('/user_allergies', 'UserAllergyController@index');
Route::post('/user_allergies', 'UserAllergyController@store');
Route::get('/user_allergies/{id}', 'UserAllergyController@show');
Route::delete('/user_allergies/{id}', 'UserAllergyController@destroy');

Route::get('/restricted-food', 'RestrictedFoodController@index');
Route::get('/restricted-food/{id}', 'RestrictedFoodController@show');
Route::post('/restricted-food', 'RestrictedFoodController@store');
Route::put('/restricted-food/{id}', 'RestrictedFoodController@update');
Route::delete('/restricted-food/{id}', 'RestrictedFoodController@destroy');

Route::post('/generate-text-completion', [OpenAIController::class, 'generateTextCompletion'])->name('generate-text-completion');

