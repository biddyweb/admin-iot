'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('HeaderCtrl', function($scope, $translate) {
        // $scope.vn = false;
        $scope.changelang = function(lang) {
            if ('vn' === lang) {
                $translate.use('vn');
                $scope.vn = true;
            } else if ('es' === lang) {
                $translate.use('es');
                $scope.vn = false;
            }
        };
    });
