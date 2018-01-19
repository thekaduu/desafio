<?php

namespace App\Repositories;

use App\Contracts\RepositoryInterface;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;

abstract class BaseRepository implements RepositoryInterface
{
    protected $model;

    public function __construct()
    {
        $this->makeModel();
    }

    /**
     * Must return a Model class name
     *
     * @author Carlos Eduardo L. Braz <carloseduardolbraz@gmail.com>
     * @return String
     */
    abstract public function model() : String;

    /**
     * Set model attribute
     *
     * @author Carlos Eduardo L. Braz <carloseduardolbraz@gmail.com>
     * @return void
     */
    protected function makeModel()
    {
        $modelName = '\\' . $this->model();
        $this->model = new $modelName;
    }

    public function all($columns = array('*'))
    {
        $cacheKey = get_class($this) . '.' . __FUNCTION__ . md5(serialize($columns));
        $resultCache = Cache::get($cacheKey);
        if ($resultCache) {
            return Crypt::decrypt($resultCache);
        }
        $resultSet = $this->model->all();
        Cache::put($cacheKey, Crypt::encrypt($resultSet), 10);
        return $resultSet;
    }

    public function paginate($perPage = 15, $columns = array('*'))
    {
        //
    }

    public function find($id, $columns = array('*'))
    {
        //
    }

    public function findBy($field, $value, $columns = array('*'))
    {
        //
    }
}