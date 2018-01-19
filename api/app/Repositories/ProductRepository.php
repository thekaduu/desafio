<?php

namespace App\Repositories;

use App\Models\Product;

/**
 * Class ProductRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class ProductRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() : string
    {
        return Product::class;
    }
}
