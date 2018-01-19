<?php

namespace App\Http\Controllers;

use App\Repositories\ProductRepository;
use Illuminate\Support\Facades\Crypt;

class ProductController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function index()
    {
        $productRepository = new ProductRepository;
        dd($productRepository->all());
        return response()->json(["restul" => $products ], 200);
    }
}
