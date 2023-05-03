<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class LoadRecipes extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'recipes:load';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
    $json = file_get_contents(storage_path('app/recipes.json'));
    $data = json_decode($json, true);

    foreach ($data as $recipe) {
        DB::table('recipes')->insert([
            'name' => $recipe['name'],
            'description' => $recipe['description'],
            'preparation_time' => $recipe['preparation_time'],
            'price' => $recipe['price'],
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    $this->info('Recipes loaded successfully!');
}

    }

