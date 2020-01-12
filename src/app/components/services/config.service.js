/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


(function () {
    'use strict';
    angular
            .module('minotaur')
            .factory('Config', ConfigService);
    /**
     * @ngInject
     */
    function ConfigService($filter, DTOptionsBuilder) {
        return {
            getAppMainUrl: function () {
                return 'http://127.0.0.1:8000/api';
            },
            getDatatableOptions: function () {
                return DTOptionsBuilder.newOptions()
                        .withBootstrap()
                        .withOption('order', [[1, 'asc']])
                        .withDOM('<"row"<"col-md-12 col-sm-12"<"inline-controls"l<"text-center"i>f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>')
                        .withLanguage({
                            "sEmptyTable": $filter('translate')('Datatable.sEmptyTable'),
                            "sInfo": $filter('translate')('Datatable.sInfo'),
                            "sInfoEmpty": $filter('translate')('Datatable.sInfoEmpty'),
                            "sInfoFiltered": $filter('translate')('Datatable.sInfoFiltered'),
                            "sInfoPostFix": $filter('translate')('Datatable.sInfoPostFix'),
                            "sInfoThousands": $filter('translate')('Datatable.sInfoThousands'),
                            "sLengthMenu": $filter('translate')('Datatable.sLengthMenu'),
                            "sLoadingRecords": $filter('translate')('Datatable.sLoadingRecords'),
                            "sProcessing": $filter('translate')('Datatable.sProcessing'),
                            "sSearch": $filter('translate')('Datatable.sSearch'),
                            "sZeroRecords": $filter('translate')('Datatable.sZeroRecords'),
                            "oPaginate": {
                                "sFirst": $filter('translate')('Datatable.sFirst'),
                                "sLast": $filter('translate')('Datatable.sLast'),
                                "sNext": $filter('translate')('Datatable.sNext'),
                                "sPrevious": $filter('translate')('Datatable.sPrevious')
                            },
                            "oAria": {
                                "sSortAscending": $filter('translate')('Datatable.sSortAscending'),
                                "sSortDescending": $filter('translate')('Datatable.sSortDescending')
                            }
                        })
                        .withButtons([
                            {
                                extend: 'colvis',
                                text: $filter('translate')('Datatable.FIELDS_TO_DISPLAY'),
                                titleAttr: $filter('translate')('Message.COLVIS_DESC')
                            },
                            {
                                extend: 'print',
                                text: $filter('translate')('Operation.PRINT'),
                                titleAttr: $filter('translate')('Operation.PRINT')
                            },
                            {
                                extend: 'csv',
                                text: 'CSV',
                                titleAttr: 'CSV'
                            },
                            {
                                extend: 'excel',
                                text: 'Excel',
                                titleAttr: 'Excel'
                            },
                            {
                                extend: 'pdf',
                                text: 'Pdf',
                                titleAttr: 'Pdf'
                            }
                            ,
                            {
                                extend: 'copy',
                                text: $filter('translate')('Operation.COPY'),
                                titleAttr: $filter('translate')('Operation.COPY')
                            }
                        ])
//                .withPaginationType('input')
//                        .withScroller()
//                        .withOption("sScrollY")
//                        .withOption("sScrollX")
                        .withColumnFilter();
            }
        };
    }
})();