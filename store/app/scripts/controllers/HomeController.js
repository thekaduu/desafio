
'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('HomeController',["Category", function (Category) {
      var ctrl = this;
    var entries = Category.query(function(){
        ctrl.categories = entries;
    });
  }]);
