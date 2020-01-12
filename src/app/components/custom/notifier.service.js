/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

(function () {
    'use strict';
    angular
            .module('minotaur')
            .factory('Notifier', NotifierService);
    /**
     * @ngInject
     * @param {type} $http
     */
    function NotifierService(SweetAlert) {
        return {
            success: function(title, message){
              swal(title, message, 'success');
          },
          error: function(title, message){
              swal(title, message, 'error');
          },
          warning: function(title, message){
              swal(title, message, 'warning');
          }
        };
    }
})();
