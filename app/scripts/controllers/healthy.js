'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:HealthyCtrl
 * @description
 * # HealthyCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('HealthyCtrl', function($scope, $http, $JXON) {
        $scope.currentPage = 1;
        $scope.paginateSize = 7;
        $scope.pageSize = 5;
       
        $http.get('/om2m/nscl/applications/Healthy/containers/DATA/contentInstances', {
            headers: {
                'Authorization': ' Basic ' + btoa('admin:admin')
            },
            dataType: 'xml'
        }).success(function(data) {
            $scope.datas = $JXON.stringToJs(data)['om2m:contentInstances']['om2m:contentInstanceCollection']['om2m:contentInstance'];
            $scope.datas.forEach(function(obj) {
                var xml = $.parseXML(atob(obj['om2m:content']['_'])).childNodes[0].children;
                console.log(xml);
                for (var i = 0; i < xml.length; i++) {
                    var name = xml[i].getAttribute('name');
                    var val = xml[i].getAttribute('val');
                    if ('ID' === name) {
                        obj.ID = val;
                    } else if ('category' === name) {
                        obj.category = val;
                    } else if ('age' === name) {
                        obj.age = val;
                    } else if ('sex' === name) {
                        obj.sex = val;
                    } else if ('region' === name) {
                        obj.region = val;
                    } else if ('domain' === name) {
                        obj.domain = val;
                    } else if ('smoking' === name) {
                        obj.smoking = val;
                    } else if ('tien su gd' === name) {
                        obj.tiensugd = val;
                    } else if ('pet' === name) {
                        obj.pet = val;
                    } else if ('fev1/fvc' === name) {
                        obj.fev = val;
                    } else if ('fvc/prefvc' === name) {
                        obj.fvc = val;
                    }

                };
                console.log(obj);
            });

        }).error(function(data) {
            console.log('error :((((((((((((');
            console.log(data);
        });

    });
