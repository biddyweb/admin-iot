'use strict';

/**
 * @ngdoc function
 * @name iotApp.controller:SensorCtrl
 * @description
 * # SensorCtrl
 * Controller of the iotApp
 */
angular.module('iotApp')
    .controller('SensorCtrl', function($scope, $http, $JXON) {
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
        // usingajax();
        $scope.par = $JXON.stringToJs('<om2m:sclBase><om2m:accessRightID>nscl/accessRights/AR_ADMIN</om2m:accessRightID><om2m:searchStrings><om2m:searchString>ResourceType/SclBase</om2m:searchString><om2m:searchString>ResourceID/nscl</om2m:searchString></om2m:searchStrings><om2m:creationTime>2016-04-19T02:47:56.169+07:00</om2m:creationTime><om2m:lastModifiedTime>2016-04-19T02:47:56.172+07:00</om2m:lastModifiedTime><om2m:sclsReference>nscl/scls</om2m:sclsReference><om2m:applicationsReference>nscl/applications</om2m:applicationsReference><om2m:containersReference>nscl/containers</om2m:containersReference><om2m:groupsReference>nscl/groups</om2m:groupsReference><om2m:accessRightsReference>nscl/accessRights</om2m:accessRightsReference><om2m:subscriptionsReference>nscl/subscriptions</om2m:subscriptionsReference><om2m:discoveryReference>nscl/discovery</om2m:discoveryReference></om2m:sclBase>');

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