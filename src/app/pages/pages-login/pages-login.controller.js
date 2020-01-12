(function () {
    'use strict';

    angular
            .module('minotaur')
            .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(Security, $rootScope, $state, $log, toastr) {
        if (angular.isDefined(Security.getToken())) {
            $state.go('dashboard');
        }
        var vm = this;
        vm.user = {};
        vm.login = function () {
            $rootScope.myPromise = Security.login(vm.user).
                    then(function (response) {
                        $rootScope.token = response.data.token;
                        $log.log('resp: '+response.data);
                        Security.createTokenCookie();
                        $state.go('dashboard');
                    }, function (error) {
                        $log.log("Erreur :" + error);
                        toastr.error("Authentification échouée", "Verifiez vos identifiants de connexion");
                    });
        };
    }

})();
