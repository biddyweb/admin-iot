'use strict';

/**
 * @ngdoc overview
 * @name english language
 * @description
 * # iotApp
 *
 * english language
 */
angular
    .module('iotApp');

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
