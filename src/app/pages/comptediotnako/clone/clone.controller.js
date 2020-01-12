/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('ComptediotnakoCloneController', ComptediotnakoCloneController);

    /** @ngInject */
    function ComptediotnakoCloneController($log, $rootScope, toastr, Comptediotnako, $state, $stateParams, $filter) {
        var vm = this;
        vm.compteDiotnako = {};
        vm.processing = false;
        vm.id = $stateParams.id;
        vm.find = function () {
            $rootScope.myPromise = Comptediotnako.find(vm.id).then(function (response) {
                vm.compteDiotnako = response.data;
            }).catch(function (error) {
                $log.log(error);
                toastr.error($filter('translate')('State.ERROR'), $filter('translate')('Message.FIND_ERROR'));
            });

        };

        vm.find();
        vm.clone = function () {
            vm.compteDiotnako.id = null;
            //formatter la date js
            vm.processing = true;
            $rootScope.myPromise = Comptediotnako.clone(vm.id, vm.compteDiotnako)
                    .then(function (response) {
                        vm.processing = false;
                        $state.go('comptediotnako.show', {id: response.data.id});
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                toastr.error($filter('translate')('State.ERROR'), $filter('translate')('Message.CLONE_ERROR'));
            });
        };
    }
})();