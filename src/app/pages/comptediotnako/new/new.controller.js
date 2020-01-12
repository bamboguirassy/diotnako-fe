/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('ComptediotnakoNewController', ComptediotnakoNewController);

    /** @ngInject */
    function ComptediotnakoNewController(toastr, Notifier, $log, $rootScope, $state, Comptediotnako, $filter) {
        var vm = this;
        vm.compteDiotnako = {};
        vm.processing = false;
        vm.reset = function () {
            vm.compteDiotnako = {};
        };
        vm.save = function () {
            vm.processing = true;
            $rootScope.myPromise = Comptediotnako.save(vm.compteDiotnako)
                    .then(function (response) {
                        vm.processing = false;
                        $state.go('comptediotnako.show', {id: response.data.id});
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.ADD_ERROR'));
            });
        };
        vm.saveAndAddNew = function () {
            vm.processing = true;
            $rootScope.myPromise = Comptediotnako.save(vm.compteDiotnako)
                    .then(function () {
                        vm.processing = false;
                        toastr.success($filter('translate')('State.SUCCESS'), $filter('translate')('Message.ADD_CONFIRMATION'));
                        vm.compteDiotnako = {};
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.ADD_ERROR'));
            });
        };

    }
})();