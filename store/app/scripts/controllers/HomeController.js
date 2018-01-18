
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
		ctrl.slides = [{
			image: 'http://localhost:9000/images/category_decoration.jpg',
			text: ['Nice image','Awesome photograph','That is so cool','I love that'][10 % 4],
			id: 20
		  }];
		ctrl.myInterval = 5000;
		ctrl.noWrapSlides = false;
		ctrl.active = 0;

		var entries = Category.query(function(){
			ctrl.categories = entries;
		});
}]);
