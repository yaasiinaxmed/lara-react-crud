<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){
        $products = Product::where('user_id', auth()->id())->get();
        return Inertia::render("Products/Index", compact("products"));
    }

    public function create(){
        return Inertia::render("Products/Create");
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0|max:999999.99',
            'description' => 'nullable|string|max:1000',
            'stock' => 'required|integer|min:0|max:999999',
        ]);
    
        Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'description' => $request->description,
            'stock' => $request->stock,
            'user_id' => auth()->id(),
        ]);
    
        return redirect()->route('products.index')
                         ->with('message', 'Product created successfully.');
    }

    public function edit(Product $product) {
        // Ensure user can only edit their own products
        if ($product->user_id !== auth()->id()) {
            abort(403, 'Unauthorized access to this product.');
        }
        
        return Inertia::render('Products/Edit', compact('product'));
    }

    public function update(Request $request, Product $product) {
        // Ensure user can only update their own products
        if ($product->user_id !== auth()->id()) {
            abort(403, 'Unauthorized access to this product.');
        }
        
        $request->validate([
            'name'=> 'required|string|max:255',
            'price'=> 'required|numeric|min:0|max:999999.99',
            'description'=> 'nullable|string|max:1000',
            'stock'=> 'required|integer|min:0|max:999999',
        ]);

        $product->update([
            'name'=> $request->input('name'),
            'price'=> $request->input('price'),
            'description'=> $request->input('description'),
            'stock'=> $request->input('stock'),
        ]);

        return redirect()->route('products.index')
                         ->with('message', 'Product updated successfully.');

    }

    public function destroy (Product $product) {
        // Ensure user can only delete their own products
        if ($product->user_id !== auth()->id()) {
            abort(403, 'Unauthorized access to this product.');
        }
        
        $product->delete();
        return redirect()->route('products.index')
                         ->with('message', 'Product deleted successfully.');
    }
    
}
