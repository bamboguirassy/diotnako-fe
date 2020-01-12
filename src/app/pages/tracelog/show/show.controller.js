/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('TracelogShowController', TracelogShowController);

    /** @ngInject */
    function TracelogShowController($state, $log, Notifier, $filter, $rootScope, Tracelog, toastr, $stateParams, SweetAlert) {
        var vm = this;
        vm.traceLog = {};
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

        //delete
        vm.remove = function () {
            SweetAlert.swal({
                title: $filter('translate')('Operation.DELETE') + ' ' + $filter('translate')('Table.TRACELOG'),
                text: $filter('translate')('Message.DELETION_CONFIRMATION_ASK'),
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
                closeOnCancel: false,
                confirmButtonText: $filter('translate')('State.CONFIRM'),
                cancelButtonText: $filter('translate')('State.CANCEL')
            },
                    function (isConfirm) {
                        if (isConfirm) {
                            $rootScope.myPromise = Tracelog.remove(vm.traceLog.id).then(function () {
                                //refresh list
                                Notifier.success($filter('translate')('State.SUCCESS'), $filter('translate')('Message.DELETION_CONFIRMATION'));
                                $state.go('tracelog.index');
                            }).catch(function (error) {
                                $log.log(error);
                                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.DELETION_ERROR'));
                            });
                        } else {
                            Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.DELETION_CANCELED'));
                        }
                    });
        };

    }
})();