<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'users_id',
        'order_items_id',
        'order_time',
        'status',
        'totale_price',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}