'use strict';
let apiConfiguration = {
  "host": "http://localhost:3000/"
}
/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # storeApp
 *
 * Main module of the application.
 */
var app = angular
  .module('storeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/category/:categoryId', {
        templateUrl: 'views/category.html',
        controller: 'CategoryController',
        controllerAs: 'category'
      })
      .when('/product/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductController',
        controllerAs: 'product'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).value("API_CONFIG", apiConfiguration);
