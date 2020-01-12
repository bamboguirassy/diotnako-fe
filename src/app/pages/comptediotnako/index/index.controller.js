/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('ComptediotnakoIndexController', ComptediotnakoIndexController);

    /** @ngInject */
    function ComptediotnakoIndexController(Comptediotnako, Config, $filter, $rootScope, $log, DTColumnDefBuilder, SweetAlert, Notifier) {
        var vm = this;
        vm.compteDiotnakos = [];

        vm.dtOptions = Config.getDatatableOptions();


        vm.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0).notSortable()
                    // DTColumnDefBuilder.newColumnDef(7).notSortable()
        ];

        vm.selectedAll = false;

        vm.selectAll = function () {
            angular.forEach(vm.compteDiotnakos, function (compteDiotnako) {
                compteDiotnako.selected = vm.selectedAll;
            });
        };

        vm.findAll = function () {
            $rootScope.myPromise = Comptediotnako.findAll()
                    .then(function (response) {
                        vm.compteDiotnakos = response.data;
                    }).catch(function (error) {
                $log.log(error);
            });
        };
        vm.findAll();

        //delete
        vm.remove = function (element) {
            SweetAlert.swal({
                title: $filter('translate')('Operation.DELETE') + ' ' + $filter('translate')('Table.COMPTEDIOTNAKO'),
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
                            $rootScope.myPromise = Comptediotnako.remove(element.id).then(function () {
                                //refresh list
                                Notifier.success($filter('translate')('State.SUCCESS'), $filter('translate')('Message.DELETION_CONFIRMATION'));
                                vm.compteDiotnakos.splice(element, 1);
                            }).catch(function (error) {
                                $log.log(error);
                                Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.DELETION_ERROR'));
                            });
                        } else {
                            Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.DELETION_CANCELED'));
                        }
                    });
        };
        //suppression multiple
        vm.removeSelection = function () {
            SweetAlert.swal({title: $filter('translate')('Operation.DELETE'),
                text: $filter('translate')('Message.DELETION_CONFIRMATION_ASK'),
                type: "warning",
                confirmButtonColor: "#DD6B55",
                confirmButtonText: $filter('translate')('State.CONFIRM'),
                cancelButtonText: $filter('translate')('State.CANCEL'),
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
                closeOnCancel: false},
                    function (isConfirm) {
                        if (isConfirm) {

                            vm.selectedIds = [];
                            for (var i = 0; i < vm.compteDiotnakos.length; i++) {
                                if (vm.compteDiotnakos[i].selected) {
                                    vm.selectedIds.push(vm.compteDiotnakos[i].id);
                                }
                            }
                            if (vm.selectedIds.length) {
                                $rootScope.myPromise = Comptediotnako.removeSelection(vm.selectedIds).then(function (data) {
                                    $log.log(data);
                                    Notifier.success($filter('translate')('State.SUCCESS'), $filter('translate')('Message.DELETION_CONFIRMATION'));
                                    vm.findAll();
                                }).catch(function (error) {
                                    $log.log(error);
                                    Notifier.error($filter('translate')('State.ERROR'), $filter('translate')('Message.DELETION_ERROR'));
                                });
                            } else {
                                Notifier.warning($filter('translate')('State.WARNING'), $filter('translate')('Message.SELECTION_EMPTY'));
                            }
                        } else {
                            Notifier.error($filter('translate')('Message.CANCELED_OPERATION'), $filter('translate')('Message.DELETION_CANCELED'));
                        }
                    });
        };
    }
})();