/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular
            .module('minotaur')
            .factory('User', UserService);
    /**
     * @ngInject
     * @param {type} $http
     */
    function UserService($http, Config) {
        return {
            findAll: function () {
                return $http.get(Config.getAppMainUrl() + '/user/');
            },
            find: function (id) {
                return $http.get(Config.getAppMainUrl() + '/user/' + id);
            },
            save: function (user) {
                return $http.post(Config.getAppMainUrl() + '/user/new', user);
            },
            clone: function (oldId, user) {
                return $http.post(Config.getAppMainUrl() + '/user/clone/' + oldId, user);
            },
            update: function (user) {
                return $http.put(Config.getAppMainUrl() + '/user/' + user.id + '/edit', user);
            },
            remove: function (id) {
                return $http.delete(Config.getAppMainUrl() + '/user/' + id);
            },
            removeSelection: function (selectedIds) {
                return $http.post(Config.getAppMainUrl() + '/user/delete-selection/', selectedIds);
            }
        };
    }
})();