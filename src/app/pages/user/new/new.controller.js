/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('UserNewController', UserNewController);

    /** @ngInject */
    function UserNewController(toastr, Notifier, $log, $rootScope, $state, User, $filter) {
        var vm = this;
        vm.user = {};
        vm.processing = false;
        vm.reset = function () {
            vm.user = {};
        };
        vm.save = function () {
            vm.processing = true;
            $rootScope.myPromise = User.save(vm.user)
                    .then(function (response) {
                        vm.processing = false;
                        $state.go('user.show', {id: response.data.id});
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.ADD_ERROR'));
            });
        };
        vm.saveAndAddNew = function () {
            vm.processing = true;
            $rootScope.myPromise = User.save(vm.user)
                    .then(function () {
                        vm.processing = false;
                        toastr.success($filter('translate')('State.SUCCESS'), $filter('translate')('Message.ADD_CONFIRMATION'));
                        vm.user = {};
                    }).catch(function (error) {
                $log.log(error);
                vm.processing = false;
                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.ADD_ERROR'));
            });
        };

    }
})();