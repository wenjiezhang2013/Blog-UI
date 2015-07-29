'use strict';

/**
 * @ngdoc overview
 * @name blogUiApp
 * @description
 * # blogUiApp
 *
 * Main module of the application.
 */
angular
  .module('blogUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl',
        controllerAs: 'Todo'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
