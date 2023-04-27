<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAllergy extends Model
{
    protected $table = 'user_has_allergies';

    protected $fillable = ['user_id', 'allergy_id'];
}
