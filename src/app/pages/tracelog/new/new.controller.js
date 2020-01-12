/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('TracelogNewController', TracelogNewController);

    /** @ngInject */
    function TracelogNewController(toastr, Notifier, $log, $rootScope, $state, Tracelog, $filter) {
        var vm = this;
        vm.traceLog = {};
        vm.processing = false;
        vm.reset = function () {
            vm.traceLog = {};
        };
        vm.save = function () {
            vm.processing = true;
            $rootScope.myPromise = Tracelog.save(vm.traceLog)
                    .then(function (response) {
                        vm.processing = false;
                        $state.go('tracelog.show', {id: response.data.id});
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.ADD_ERROR'));
            });
        };
        vm.saveAndAddNew = function () {
            vm.processing = true;
            $rootScope.myPromise = Tracelog.save(vm.traceLog)
                    .then(function () {
                        vm.processing = false;
                        toastr.success($filter('translate')('State.SUCCESS'), $filter('translate')('Message.ADD_CONFIRMATION'));
                        vm.traceLog = {};
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.ADD_ERROR'));
            });
        };

    }
})();