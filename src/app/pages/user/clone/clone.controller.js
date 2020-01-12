/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('UserCloneController', UserCloneController);

    /** @ngInject */
    function UserCloneController($log, $rootScope, toastr, User, $state, $stateParams, $filter) {
        var vm = this;
        vm.user = {};
        vm.processing = false;
        vm.id = $stateParams.id;
        vm.find = function () {
            $rootScope.myPromise = User.find(vm.id).then(function (response) {
                vm.user = response.data;
            }).catch(function (error) {
                $log.log(error);
                toastr.error($filter('translate')('State.ERROR'), $filter('translate')('Message.FIND_ERROR'));
            });

        };

        vm.find();
        vm.clone = function () {
            vm.user.id = null;
            //formatter la date js
            vm.processing = true;
            $rootScope.myPromise = User.clone(vm.id, vm.user)
                    .then(function (response) {
                        vm.processing = false;
                        $state.go('user.show', {id: response.data.id});
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                toastr.error($filter('translate')('State.ERROR'), $filter('translate')('Message.CLONE_ERROR'));
            });
        };
    }
})();