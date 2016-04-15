'use strict';

/**
 * @ngdoc service
 * @name iotApp.authInterceptor
 * @description
 * # authInterceptor
 * Factory in the iotApp.
 */
angular.module('iotApp')
    .factory('authInterceptor', function($location, $q, $window) {
        // Service logic
        // ...

        var meaningOfLife = 42;

        // Public API here
        return {
            request: function(config) {
                config.headers = config.headers || {};

                config.headers.Authorization = 'Basic YWRtaW46YWRtaW4=';

                return config;
            }
        };
    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
