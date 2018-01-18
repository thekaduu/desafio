'use strict';

angular.module('storeApp')
  	.controller('ProductController',["Product","$location","$route","cartService", function (Product, $location, $route, cartService) {
		var ctrl = this;
		ctrl.productId = $route.current.params.productId;
		ctrl.qtd = 1;
		ctrl.amount = [
			{select: 1, label: 1},
			{select: 2, label: 2},
			{select: 3, label: 3},
			{select: 4, label: 4},
			{select: 5, label: 5},
			{select: 6, label: 6},
			{select: 7, label: 7},
			{select: 8, label: 8},
			{select: 9, label: 9}
		];


		Product.get({"productId": ctrl.productId}, function(product){
			ctrl.product = product;
		});

		ctrl.addCart = function(){
			cartService.add(ctrl.product, ctrl.qtd);
		}
	}]);
