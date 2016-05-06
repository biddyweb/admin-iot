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
        $urlRouterProvider.otherwise('/main/dashboard');
        $stateProvider
            .state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'views/main.html'
            })
            .state('main.dashboard', {
                url: '/dashboard',
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            })
            .state('main.licenseplate', {
                url: '/license',
                templateUrl: 'views/licenseplate.html',
                controller: 'LicenseplateCtrl'
            })
            .state('main.deteingfall', {
                url: '/deteingfall',
                templateUrl: 'views/deteingfall.html',
                controller: 'DetetingFallCtrl'
            })
            .state('main.gpstracking', {
                url: '/GPSTracking',
                templateUrl: 'views/gpstracking.html',
                controller: 'GPSTrackingCtrl'
            })
            .state('main.healthy', {
                url: '/healthy',
                templateUrl: 'views/healthy.html',
                controller: 'HealthyCtrl'
            });

    }).config(function($translateProvider) {
        $translateProvider
            .translations('es', translations_es)
            .translations('vn', translations_vn)
            .preferredLanguage('es');
    }).config(function($JXONProvider) {
        var jxonConfig = {
            valueKey: '_', // default: 'keyValue'
            attrKey: '$', // default: 'keyAttributes'
            attrPrefix: '$', // default: '@'
            lowerCaseTags: false, // default: true
            trueIsEmpty: false, // default: true
            autoDate: false, // default: true
            ignorePrefixedNodes: false // default: true
        }
        $JXONProvider.config(jxonConfig);
    });

var translations_es = {
    HEADER: {
        LOGO: 'BK IoT Platform',
        APPLICATION: 'Applications',
        DASHBOARD: 'Introduction',
        DETEINGFALL: 'Detecting fall',
        GPSTRACKING: 'GPS Tracking',
        HEALTHY: 'Healthy',
        LICENSEPLATE: 'License plate',
        SEARCH: 'Search',
        ITEMPERPAGE: 'item per page'
    },
    INTRODUCTION: {
        CLICKLINK: 'This is a link',
        DESCRIPTION: {
            DETEINGFALL: 'Falls are a major cause of injuries and hospital admissions among elderly people. Thus, the caregiving process and the quality of life of older adults can be improved by adopting systems for the automatic detection of falls.',
            GPSTRACKING: 'Here is some more information about this product that is only revealed once clicked on.',
            HEALTHY: 'Here is some more information about this product that is only revealed once clicked on.',
            LICENSEPLATE: 'Here is some more information about this product that is only revealed once clicked on.'
        },
        M2MSTANDARDIZATION: {
            TITLE: 'M2M global standardization effort',
            P1: 'M2M promotes to connect billions of machines in near future covering multiple domains.',
            P2: 'The M2M market is highly fragmented with many players across numerous vertical domains.',
            P3: 'ETSI M2M and OneM2M are working on a standardized horizontal service platform for M2M interoperability.'
        },
        OM2MACHITETUDE: {
            TITLE: 'OM2M functional architecture',
            P1: 'OM2M provides a Service Capability Layer (SCL) including a set of common services for M2M interoperability',
            P2: 'An SCL can be deployed on the Network domain, or on the Device and Gateway domain.'
        },
        OM2MPROCEDUREANDRESOURCE: {
            TITLE: 'OM2M primitive procedures and resources',
            P1: 'OM2M implements a RESTful API.',
            P2: 'All M2M communications are performed based on simple primitive procedures.',
            P3: 'Each SCL data model is structured using a standardized resource tree.',
            P4: 'The resource can be easly triggered using simple CRUD requests. OM2M Primitive procedures'
        },
        OM2MEXPERIMENTAL: 'OM2M experimental'
    },
    FOOTER: {
        LINK: {
            TITLE: 'Links',
            HUST: 'Hanoi University of Science and Technology',
            SOICT: 'School of Information Communication and Technology',
            NCT: 'Data Commnution and Network Computing',
        },
        CONTENT: {
            TITLE: 'IoT',
            DESCRIPTION: 'Connect all the things'
        },
        LICENSE: {
            AUTH: '© 2016 Copyright by Tuyenng',
            LINK: 'Tuyen Nguyen Gia'
        }
    },
    LICENSEPLATE: {
        LICENSE: 'License',
        TIMEIN: 'Timein',
        TIMEOUT: 'Timeout'
    },
    GPSTRACKING: {
        APPID: 'AppId',
        EMAIL: 'Email',
        TIMESTAMP: 'Timestamp',
        LATITUDE: 'Latitude',
        LONGTITUDE: 'Longtitude',
        ADDRESS: 'Address',
        VELOCITY: 'Velocity'
    },
    DETETINGFALL: {
        FULLNAME: 'Full name',
        GENDER: 'Gender',
        AGE: 'Age',
        HEIGHT: 'Height',
        WEIGHT: 'Weight',
        LATITUDE: 'Latitude',
        LONGTITUDE: 'Longtitude'
    },
    HEALTHY: {
        APPNAME: 'Healthy',
        ID: 'ID',
        CATEGORY: 'Category',
        AGE: 'Age',
        SEX: 'Sex',
        REGION: 'Region',
        DOMAIN: 'Domain',
        SMOKING: 'Smoking',
        FAMILY: 'Family',
        PET: 'Pet',
        FEV1FVC: 'Fev1/fvc',
        FEV1FEV_PRE: 'Fev1/fev_pre',
        STATUS: 'Status',
        RESION: 'Resion'
    }
};

var translations_vn = {
    HEADER: {
        LOGO: 'BK IoT Platform',
        APPLICATION: 'Ứng dụng',
        DASHBOARD: 'Giới thiệu',
        DETEINGFALL: 'Phát hiện ngã',
        GPSTRACKING: 'Giám sát hành trình',
        HEALTHY: 'Dự đoán tình trạng phổi',
        LICENSEPLATE: 'Nhận diện biển số xe',
        SEARCH: 'Tìm kiếm',
        ITEMPERPAGE: 'Số lượng hiển thị'
    },

    INTRODUCTION: {
        CLICKLINK: 'Liên kết',
        DESCRIPTION: {
            DETEINGFALL: 'Ngã là nguyên nhân chính gây chấn thương ảnh hưởng đến sức khỏe ở những người cao tuổi. Như vậy, quá trình chăm sóc chất lượng cuộc sống của người cao tuổi có thể được cải thiện bằng việc áp dụng hệ thống tự động phát hiện khi xảy ra ngã',
            GPSTRACKING: 'Here is some more information about this product that is only revealed once clicked on.',
            HEALTHY: 'Here is some more information about this product that is only revealed once clicked on.',
            LICENSEPLATE: 'Here is some more information about this product that is only revealed once clicked on.'
        },
        M2MSTANDARDIZATION: {
            TITLE: 'M2M global standardization effort',
            P1: 'M2M promotes to connect billions of machines in near future covering multiple domains.',
            P2: 'The M2M market is highly fragmented with many players across numerous vertical domains.',
            P3: 'ETSI M2M and OneM2M are working on a standardized horizontal service platform for M2M interoperability.'
        },
        OM2MACHITETUDE: {
            TITLE: 'OM2M functional architecture',
            P1: 'OM2M provides a Service Capability Layer (SCL) including a set of common services for M2M interoperability',
            P2: 'An SCL can be deployed on the Network domain, or on the Device and Gateway domain.'
        },
        OM2MPROCEDUREANDRESOURCE: {
            TITLE: 'OM2M primitive procedures and resources',
            P1: 'OM2M implements a RESTful API.',
            P2: 'All M2M communications are performed based on simple primitive procedures.',
            P3: 'Each SCL data model is structured using a standardized resource tree.',
            P4: 'The resource can be easly triggered using simple CRUD requests. OM2M Primitive procedures'
        },
        OM2MEXPERIMENTAL: 'OM2M experimental'
    },
    FOOTER: {
        LINK: {
            TITLE: 'Liên kết',
            HUST: 'Đại học Bách Khoa Hà Nội',
            SOICT: 'Viện công nghệ thông tin và truyền thông',
            NCT: 'Khoa truyền thông và mạng máy tính'
        },
        CONTENT: {
            TITLE: 'Internet of Thing',
            DESCRIPTION: 'Kết nối tất cả những gì có thể'
        },
        LICENSE: {
            AUTH: '© 2016 Copyright by Tuyenng',
            LINK: 'Nguyễn Gia Tuyến'
        }
    },
    LICENSEPLATE: {
        LICENSE: 'Biển số xe',
        TIMEIN: 'Thời gian vào',
        TIMEOUT: 'Thời gian ra'
    },
    GPSTRACKING: {
        APPID: 'Ứng dụng',
        EMAIL: 'Email',
        TIMESTAMP: 'Thời gian',
        LATITUDE: 'Vĩ độ',
        LONGTITUDE: 'Kinh độ',
        ADDRESS: 'Địa chỉ',
        VELOCITY: 'Tốc độ'
    },
    DETETINGFALL: {
        FULLNAME: 'Họ tên',
        GENDER: 'Giới tính',
        AGE: 'Tuổi',
        HEIGHT: 'Chiều cao',
        WEIGHT: 'Cân nặng',
        LATITUDE: 'Vĩ độ',
        LONGTITUDE: 'Kinh độ'
    },
    HEALTHY: {
        APPNAME: 'Dự đoán tình trạng phổi',
        ID: 'ID',
        CATEGORY: 'Loại ứng dụng',
        AGE: 'Tuổi',
        SEX: 'Giới tính',
        REGION: 'Vùng',
        DOMAIN: 'Miền',
        SMOKING: 'Hút thuốc',
        FAMILY: 'Tiền sử gia đình',
        PET: 'Nuôi động vật',
        FEV1FVC: 'Fev1/fvc',
        FEV1FEV_PRE: 'Fev1/fev_pre',
        STATUS: 'Tình trạng',
        RESION: 'Dự đoán'
    }
};
