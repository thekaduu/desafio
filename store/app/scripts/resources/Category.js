"use strict";
app.factory('Category', ['$resource','API_CONFIG', function($resource, API_CONFIG) {
    var url = API_CONFIG.host + 'category/:categoryId';
    return $resource(url);
}]);
