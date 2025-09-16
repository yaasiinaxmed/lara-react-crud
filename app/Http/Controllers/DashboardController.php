<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Get statistics
        $totalProducts = Product::count();
        $totalUsers = User::count();
        
        // Get recent products (latest 3)
        $recentProducts = Product::latest()->take(3)->get();
        
        return Inertia::render('dashboard', [
            'stats' => [
                'totalProducts' => $totalProducts,
                'totalUsers' => $totalUsers,
            ],
            'recentProducts' => $recentProducts,
        ]);
    }
}
