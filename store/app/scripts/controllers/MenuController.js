'use strict';
/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('MenuController', ["$rootScope","cartService", function ($rootScope, cartService) {
    this.orderItems = [];
    this.totalItemInCart = cartService.all();
  }]);
