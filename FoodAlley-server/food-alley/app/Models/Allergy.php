<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Allergy extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    // Define relationships
     public function users()
     {
         return $this->belongsToMany(User::class);
     }
}
