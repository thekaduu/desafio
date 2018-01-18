"use strict";
angular.module("moblyResources", ['ngResource'])
    .factory('Category', ['$resource','API_CONFIG', function($resource, API_CONFIG) {
        var url = API_CONFIG.host + 'category/:categoryId';
        return $resource(url);
    }])
    .factory('Product', ['$resource','API_CONFIG', function($resource, API_CONFIG) {
        var url = API_CONFIG.host + 'product/:productId';
        return $resource(url);
    }]);
