'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:DetetingFallCtrl
 * @description
 * # DetetingFallCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('DetetingFallCtrl', function($scope, $http, $JXON) {
        $scope.currentPage = 1;
        $scope.paginateSize = 7;
        $scope.pageSize = 5;
       
        $http.get('/om2m/nscl/applications/DetatingFall/containers/DATA/contentInstances', {
            headers: {
                'Authorization': ' Basic ' + btoa('admin:admin')
            },
            dataType: 'xml'
        }).success(function(data) {
            $scope.datas = $JXON.stringToJs(data)['om2m:contentInstances']['om2m:contentInstanceCollection']['om2m:contentInstance'];
            $scope.datas.forEach(function(obj) {
                var xml = $.parseXML(atob(obj['om2m:content']['_'])).childNodes[0].children;
                for (var i = 0; i < xml.length; i++) {
                    var name = xml[i].getAttribute('name');
                    var val = xml[i].getAttribute('val');
                    if ('name' === name) {
                        obj.name = val;
                    } else if ('gender' == name) {
                        obj.gender = val;
                    } else if ('age' == name) {
                        obj.age = val;
                    } else if ('height' == name) {
                        obj.height = val;
                    } else if ('weight' == name) {
                        obj.weight = val;
                    } else if ('lat' == name) {
                        obj.lat = val;
                    } else if ('lng' == name) {
                        obj.lng = val;
                    }
                };
            });


        }).error(function(data) {
            console.log('error :((((((((((((');
            console.log(data);
        });

    });
