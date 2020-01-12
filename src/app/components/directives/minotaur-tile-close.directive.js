(function() {
  'use strict';

  angular
    .module('minotaur')
    .directive('minotaurTileClose', minotaurTileClose);

  /** @ngInject */
  function minotaurTileClose($log, alertify) {
    var directive = {
      restrict: 'E',
      template: '<a class="icon icon-danger icon-ef-4 icon-ef-4b icon-color"><i class="fa fa-times"></i></a>',
      link: function (scope, element) {
        var tile = element.parents('.tile');
        element.on('click', function(){
          alertify.confirm("Veux-tu vraiment fermer cette fenetre ?", function () {
            tile.addClass('closed').fadeOut();
          }, function() {
            // user clicked "cancel"
          });
        });
      }
    };

    return directive;

  }

})();
