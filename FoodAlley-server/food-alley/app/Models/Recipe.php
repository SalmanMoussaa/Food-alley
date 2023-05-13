<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    protected $table = 'recipes';
    protected $fillable = ['name', 'descreption', 'preparation_time', 'price', 'kitchen_id, imguri '];
    public function kitchen()
    {
        return $this->belongsTo(Kitchen::class);
    }
}
