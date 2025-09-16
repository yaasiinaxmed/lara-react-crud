<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get the first user to assign products to
        $user = \App\Models\User::first();
        
        if (!$user) {
            // Create a user if none exists
            $user = \App\Models\User::factory()->create([
                'name' => 'Test User',
                'email' => 'test@example.com',
            ]);
        }

        $products = [
            [
                'name' => 'MacBook Pro 16"',
                'price' => 2499.99,
                'description' => 'Apple MacBook Pro with M3 Pro chip, 16GB RAM, 512GB SSD',
                'stock' => 12,
                'user_id' => $user->id,
            ],
            [
                'name' => 'iPhone 15 Pro',
                'price' => 999.99,
                'description' => 'Latest iPhone with titanium design and advanced camera system',
                'stock' => 45,
                'user_id' => $user->id,
            ],
            [
                'name' => 'Samsung Galaxy S24 Ultra',
                'price' => 1199.99,
                'description' => 'Premium Android smartphone with S Pen and 200MP camera',
                'stock' => 8,
                'user_id' => $user->id,
            ],
            [
                'name' => 'Dell XPS 13',
                'price' => 1299.99,
                'description' => 'Ultra-thin laptop with 13.4" InfinityEdge display',
                'stock' => 20,
                'user_id' => $user->id,
            ],
            [
                'name' => 'Sony WH-1000XM5',
                'price' => 399.99,
                'description' => 'Industry-leading noise canceling wireless headphones',
                'stock' => 0,
                'user_id' => $user->id,
            ],
            [
                'name' => 'iPad Air',
                'price' => 599.99,
                'description' => 'Powerful tablet with M2 chip and Liquid Retina display',
                'stock' => 15,
                'user_id' => $user->id,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}