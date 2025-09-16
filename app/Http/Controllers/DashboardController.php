<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Get statistics for the authenticated user
        $totalProducts = Product::where('user_id', auth()->id())->count();
        $totalStock = Product::where('user_id', auth()->id())->sum('stock');
        $lowStockProducts = Product::where('user_id', auth()->id())->where('stock', '<=', 10)->count();
        
        // Get recent products (latest 3) for the authenticated user
        $recentProducts = Product::where('user_id', auth()->id())->latest()->take(3)->get();
        
        return Inertia::render('dashboard', [
            'stats' => [
                'totalProducts' => $totalProducts,
                'totalStock' => $totalStock,
                'lowStockProducts' => $lowStockProducts,
            ],
            'recentProducts' => $recentProducts,
        ]);
    }
}
