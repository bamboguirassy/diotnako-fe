/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular
            .module('minotaur')
            .factory('Tracelog', TracelogService);
    /**
     * @ngInject
     * @param {type} $http
     */
    function TracelogService($http, Config) {
        return {
            findAll: function () {
                return $http.get(Config.getAppMainUrl() + '/tracelog/');
            },
            find: function (id) {
                return $http.get(Config.getAppMainUrl() + '/tracelog/' + id);
            },
            save: function (traceLog) {
                return $http.post(Config.getAppMainUrl() + '/tracelog/new', traceLog);
            },
            clone: function (oldId, traceLog) {
                return $http.post(Config.getAppMainUrl() + '/tracelog/clone/' + oldId, traceLog);
            },
            update: function (traceLog) {
                return $http.put(Config.getAppMainUrl() + '/tracelog/' + traceLog.id + '/edit', traceLog);
            },
            remove: function (id) {
                return $http.delete(Config.getAppMainUrl() + '/tracelog/' + id);
            },
            removeSelection: function (selectedIds) {
                return $http.post(Config.getAppMainUrl() + '/tracelog/delete-selection/', selectedIds);
            }
        };
    }
})();