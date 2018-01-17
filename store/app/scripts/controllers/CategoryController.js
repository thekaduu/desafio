'use strict';

angular.module('storeApp')
  .controller('CategoryController',["Category","$route","$location", function (Category, $route, $location) {
      var ctrl = this;
      ctrl.categoryId = $route.current.params.categoryId;
    var entries = Category.get({"categoryId": ctrl.categoryId}, function(){
        ctrl.category = entries;
    },function(){
        $location.path( "/" );
    });
  }]);
