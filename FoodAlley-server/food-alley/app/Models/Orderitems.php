<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItems extends Model
{
    use HasFactory;

    protected $table = 'order_items';

     protected $fillable = [
        'recepie_id',
    ];

    public function recipe()
    {
        return $this->belongsTo(Recipe::class);
    }
}
