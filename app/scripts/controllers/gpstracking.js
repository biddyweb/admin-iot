'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:GPSTracking
 * @description
 * # GPSTracking
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('GPSTrackingCtrl', function($scope, $http, $JXON) {
        $scope.currentPage = 1;
        $scope.paginateSize = 7;
        $scope.pageSize = 5;
        $http.get('/om2m/nscl/applications/GPSTracking/containers/DATA/contentInstances', {
            headers: {
                'Authorization': ' Basic ' + btoa('admin:admin')
            },
            dataType: 'xml'
        }).success(function(data) {
            $scope.datas = $JXON.stringToJs(data)['om2m:contentInstances']['om2m:contentInstanceCollection']['om2m:contentInstance'];
            console.log($scope.datas);
            $scope.datas.forEach(function(obj) {
                var xml = $.parseXML(atob(obj['om2m:content']['_'])).childNodes[0].children;
                console.log(xml);
                for (var i = 0; i < xml.length; i++) {
                    var name = xml[i].getAttribute('name');
                    var val = xml[i].getAttribute('val');
                    if ('appId' === name) {
                        obj.appid = val;
                    } else if ('userEmail' === name) {
                        obj.useremail = val;
                    } else if ('timestamp' === name) {
                        obj.timestamp = val;
                    } else if ('latitude' === name) {
                        obj.latitude = val;
                    } else if ('longtitude' === name) {
                        obj.longtitude = val;
                    } else if ('address' === name) {
                        obj.address = val;
                    } else if ('velocity' === name) {
                        obj.velocity = val;
                    };
                };
                console.log('obj: ');
                console.log(obj);
            });


        }).error(function(data) {
            console.log('error :((((((((((((');
            console.log(data);
        });

    });
