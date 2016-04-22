'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:ConfigRouterCtrl
 * @description
 * # ConfigRouterCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/sensor");
        $stateProvider
            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "views/main.html"
            })
            .state('main.dashboard', {
                url: "/dashboard",
                templateUrl: "views/dashboard.html",
                controller: 'DashboardCtrl'
            })
            .state('main.sensor', {
                url: "/sensor",
                templateUrl: "views/sensor.html",
                controller: 'SensorCtrl'
            })
            .state('main.chart', {
                url: "/chart",
                templateUrl: "views/chart.html"
            })
            .state('main.nscl', {
                url: "/nscl",
                templateUrl: "views/nscl.html"
            });

    }).config(function($translateProvider) {
        $translateProvider
            .translations('en', translations)
            .preferredLanguage('en');
    });


var translations = {
    DASHBOARD: 'Dashboard',
    SENSOR: 'Sensor',
    CHART: 'chart',
    NSCL: 'nscl'
};
