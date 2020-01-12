/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('TracelogCloneController', TracelogCloneController);

    /** @ngInject */
    function TracelogCloneController($log, $rootScope, toastr, Tracelog, $state, $stateParams, $filter) {
        var vm = this;
        vm.traceLog = {};
        vm.processing = false;
        vm.id = $stateParams.id;
        vm.find = function () {
            $rootScope.myPromise = Tracelog.find(vm.id).then(function (response) {
                vm.traceLog = response.data;
            }).catch(function (error) {
                $log.log(error);
                toastr.error($filter('translate')('State.ERROR'), $filter('translate')('Message.FIND_ERROR'));
            });

        };

        vm.find();
        vm.clone = function () {
            vm.traceLog.id = null;
            //formatter la date js
            vm.processing = true;
            $rootScope.myPromise = Tracelog.clone(vm.id, vm.traceLog)
                    .then(function (response) {
                        vm.processing = false;
                        $state.go('tracelog.show', {id: response.data.id});
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                toastr.error($filter('translate')('State.ERROR'), $filter('translate')('Message.CLONE_ERROR'));
            });
        };
    }
})();