'use strict';

/**
 * @ngdoc overview
 * @name vietnam language
 * @description
 * # iotApp
 *
 * vietnam language
 */
angular
    .module('iotApp');

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
