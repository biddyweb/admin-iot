'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:LicenseplateCtrl
 * @description
 * # LicenseplateCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('LicenseplateCtrl', function($scope, $http, $JXON) {

        $scope.currentPage = 1;
        $scope.paginateSize = 7;
        $scope.pageSize = 5;

        $scope.globaldata = [];

        $http.get('/om2m/nscl/applications/LicensePlate/containers/DATA/contentInstances', {
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
                    if ('license' === name) {
                        obj.license = val;
                    } else if ('isIn' === name) {
                        if ('0' === val) {
                            obj.timein = obj['om2m:creationTime'];
                        } else {
                            obj.timeout = obj['om2m:creationTime'];
                        }
                    };
                };
                console.log('obj: ');
                console.log(obj);
            });

            $scope.globaldata = $scope.datas;
        }).error(function(data) {
            console.log('error :((((((((((((');
            console.log(data);
        });

        $scope.checkCard = function() {
            $scope.status = !$scope.status;
            if ($scope.status) {
                var arrs = [];
                var names = [];
                for (var i = 0; i < $scope.datas.length; i++) {
                    if (typeof $scope.datas[i].timeout === 'string') {
                        names.push($scope.datas[i].license);
                    } else {
                        arrs.push($scope.datas[i]);
                    }
                };
                var cards = [];

                // for (var i = 0; i < arrs.length; i++) {
                for (var i = arrs.length - 1; i >= 0; i--) {
                    if (names.indexOf(arrs[i].license) === -1) {
                        cards.push(arrs[i]);
                    };
                };
                $scope.datas = cards;
            } else {
                $scope.datas = $scope.globaldata;
            };

            console.log('arrs: ');
            console.log(arrs);
            console.log('names:');
            console.log(names);
        };
    });
