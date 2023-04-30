<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

use GuzzleHttp\Client;

$client = new Client([
    'base_uri' => 'https://api.openai.com/v1/',
    'headers' => [
        'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
        'Content-Type' => 'application/json',
    ],
]);

class OpenAIController extends Controller
{

    public function generateTextCompletion(Request $request)
{
    $client = new \GuzzleHttp\Client([
        'base_uri' => 'https://api.openai.com/v1/',
        'headers' => [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
        ],
    ]);

    $response = $client->post('completions', [
        'json' => [
            'prompt' => $request->input('prompt'),
            'temperature' => $request->input('temperature'),
            'max_tokens' => $request->input('max_tokens'),
            'model' => 'gpt-3.5-turbo',
        ],
    ]);

    return $response->getBody();
}




}
?>