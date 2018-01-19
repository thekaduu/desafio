<?php

namespace App\Contracts;

interface RepositoryInterface
{

    public function all($columns = array('*'));

    public function paginate($perPage = 15, $columns = array('*'));

    public function find($id, $columns = array('*'));

    public function findBy($field, $value, $columns = array('*'));
}
