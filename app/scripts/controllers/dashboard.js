'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('DashboardCtrl', function($scope, $timeout) {
        $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 12, 100]
        ];

        $scope.labels2 = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
        $scope.data2 = [300, 500, 100, 40, 120];


        $scope.labels3 = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series3 = ['Nhiệt độ', 'Độ sáng'];
        $scope.data3 = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];

        $scope.onClick = function(points, evt) {
            console.log(points, evt);
        };

        $scope.randomize = function() {
            $scope.data = $scope.data.map(function(data) {
                return data.map(function(y) {
                    y = y + Math.random() * 10 - 5;
                    return parseInt(y < 0 ? 0 : y > 100 ? 100 : y);
                });
            });
        
            $scope.data3 = $scope.data3.map(function(data3) {
                return data3.map(function(y) {
                    y = y + Math.random() * 10 - 5;
                    return parseInt(y < 0 ? 0 : y > 100 ? 100 : y);
                });
            });
        };


    });
