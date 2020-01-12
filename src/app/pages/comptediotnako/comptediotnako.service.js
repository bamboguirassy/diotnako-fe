/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular
            .module('minotaur')
            .factory('Comptediotnako', ComptediotnakoService);
    /**
     * @ngInject
     * @param {type} $http
     */
    function ComptediotnakoService($http, Config) {
        return {
            findAll: function () {
                return $http.get(Config.getAppMainUrl() + '/comptediotnako/');
            },
            find: function (id) {
                return $http.get(Config.getAppMainUrl() + '/comptediotnako/' + id);
            },
            save: function (compteDiotnako) {
                return $http.post(Config.getAppMainUrl() + '/comptediotnako/new', compteDiotnako);
            },
            clone: function (oldId, compteDiotnako) {
                return $http.post(Config.getAppMainUrl() + '/comptediotnako/clone/' + oldId, compteDiotnako);
            },
            update: function (compteDiotnako) {
                return $http.put(Config.getAppMainUrl() + '/comptediotnako/' + compteDiotnako.id + '/edit', compteDiotnako);
            },
            remove: function (id) {
                return $http.delete(Config.getAppMainUrl() + '/comptediotnako/' + id);
            },
            removeSelection: function (selectedIds) {
                return $http.post(Config.getAppMainUrl() + '/comptediotnako/delete-selection/', selectedIds);
            }
        };
    }
})();