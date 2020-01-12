/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular
            .module('minotaur')
            .factory('Security', SecurityService);
    /**
     * @ngInject
     * @param {type} $http
     */
    function SecurityService($http,Config,$cookies,$rootScope) {
        return {
            login: function (credentials) {
                return $http.post(Config.getAppMainUrl()+'/login_check',credentials);
            },
            getToken: function(){
                return $cookies.get('BAMBO');
            },
            createTokenCookie: function(){
                var today=new Date();
                var expirationDate=new Date(today);
                expirationDate.setSeconds(today.getSeconds()+86000);
                $http.defaults.headers.common['Authorization'] = "Bambo " + $rootScope.token;
                $cookies.put('BAMBO',$rootScope.token,{'expires':expirationDate});
            }
        };
    }
})();

