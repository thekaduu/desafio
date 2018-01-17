"use strict";
app.factory('Product', ['$resource','API_CONFIG', function($resource, API_CONFIG) {
    var url = API_CONFIG.host + 'product/:productId';
    return $resource(url);
}]);
