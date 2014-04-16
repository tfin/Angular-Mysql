'use strict';

angular.module('myApp.restServices', ['ngResource'])
    .factory('Employee', ['$resource',
        function ($resource) {
            //return $resource('http://localhost:3000/employees/:employeeId', {});
             return $resource('http://192.168.0.4:3000/employees/:employeeId', {});
        }])

    .factory('Report', ['$resource',
        function ($resource) {
            //return $resource('http://localhost:3000/employees/:employeeId/reports', {});
             return $resource('http://192.168.0.4:3000/employees/:employeeId/reports', {});
        }]);