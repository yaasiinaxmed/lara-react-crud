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
        $products = [
            [
                'name' => 'MacBook Pro 16"',
                'price' => 2499.99,
                'description' => 'Apple MacBook Pro with M3 Pro chip, 16GB RAM, 512GB SSD',
            ],
            [
                'name' => 'iPhone 15 Pro',
                'price' => 999.99,
                'description' => 'Latest iPhone with titanium design and advanced camera system',
            ],
            [
                'name' => 'Samsung Galaxy S24 Ultra',
                'price' => 1199.99,
                'description' => 'Premium Android smartphone with S Pen and 200MP camera',
            ],
            [
                'name' => 'Dell XPS 13',
                'price' => 1299.99,
                'description' => 'Ultra-thin laptop with 13.4" InfinityEdge display',
            ],
            [
                'name' => 'Sony WH-1000XM5',
                'price' => 399.99,
                'description' => 'Industry-leading noise canceling wireless headphones',
            ],
            [
                'name' => 'iPad Air',
                'price' => 599.99,
                'description' => 'Powerful tablet with M2 chip and Liquid Retina display',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}