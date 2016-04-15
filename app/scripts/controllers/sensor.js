'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:SensorCtrl
 * @description
 * # SensorCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('SensorCtrl', function($scope, $http) {
        $scope.sensors = [{
            app: 'LAMP',
            name: 'Đo độ sáng',
            timecreate: 1460219923282,
            lastmodified: 1460211923282,
            desc: 'Đo ánh sáng trong tòa nhà'
        }, {
            app: 'TEMP',
            name: 'Đo nhiệt độ',
            timecreate: 1460219923282,
            lastmodified: 1460211923282,
            desc: 'Khảo sát nhiệt độ, độ ẩm của nông trại Hà Nam'
        }];

        // $http.get('http://localhost:8080/om2m/gscl/applications', {
        //     headers: {
        //         'Authorization': 'Basic YWRtaW46YWRtaW4='
        //             // 'Authorization': ' Basic ' + btoa('admin:admin')
        //     }
        // }).success(function(header, status, config, data) {
        //     console.log('success ');
        //     console.log('status: ' + status);
        //     console.log('config: ' + config);
        //     console.log(data);
        // }).error(function(header, status, config, data) {
        //     console.log('error');
        //     console.log('status: ' + status);
        //     console.log('config: ' + config);
        //     console.log(data);
        // })

        console.log('hello');
        usingajax();
        

    });

function usingajax(){
    $.ajax({
         type: "GET",
         url: 'http://localhost:8080/om2m/gscl/applications',
         headers: {"Authorization":"Basic YWRtaW46YWRtaW4="},
         beforeSend: function() {},
         timeout: 20000,
         error: function(xhr, status, error) {
             $("#error").html(xhr.status+' '+status+' '+error);
         },
         dataType: 'xml',
         success: function(response){
            console.log(response);
         }
     });
};