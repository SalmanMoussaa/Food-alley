<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RecipeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $json = File::get("database/recipes.json");
        $data = json_decode($json);
    
        foreach ($data as $recipe) {
            DB::table('recipes')->insert([
                'name' => $recipe->name,
                'description' => $recipe->description,
                'preparation_time' => $recipe->preparation_time,
                'price' => $recipe->price,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    
}}