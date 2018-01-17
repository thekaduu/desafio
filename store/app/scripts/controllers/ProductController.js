'use strict';

angular.module('storeApp')
  .controller('ProductController',["Product", function (Product) {
      var ctrl = this;
    var entries = Product.get({"productId": 1}, function(){
        ctrl.product = entries;
    });
  }]);
