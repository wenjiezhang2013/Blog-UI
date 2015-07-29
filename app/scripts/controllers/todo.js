'use strict';

/**
 * @ngdoc function
 * @name blogUiApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the blogUiApp
 */
angular.module('blogUiApp')
    .controller('TodoCtrl', function($http) {
        // Simple GET request example :
        $http.get('http://localhost:8080/JAVA-REST-ANGULAR/rest/todo').
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


    });