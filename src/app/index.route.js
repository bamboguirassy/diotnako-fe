(function () {
    'use strict';

    angular
            .module('minotaur')
            .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
                //dashboard
                .state('dashboard', {
                    url: '/app/dashboard',
                    templateUrl: 'app/pages/dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'dashboard'
                })

                //mail
                .state('mail', {
                    abstract: true,
                    url: '/app/mail',
                    controller: 'MailController',
                    controllerAs: 'ctrl',
                    templateUrl: 'app/pages/mail/mail.html'
                })
                //mail-inbox
                .state('mail.inbox', {
                    url: '/inbox',
                    templateUrl: 'app/pages/mail-inbox/mail-inbox.html',
                    controller: 'MailInboxController',
                    controllerAs: 'ctrl',
                    parent: 'mail',
                    specialClass: 'force-header-sm header-sm'
                })
                //tracelog
                .state('tracelog', {
                    abstract: true,
                    url: '/tracelog',
                    templateUrl: 'app/pages/tracelog/tracelog.html'
                })
                .state('tracelog.index', {
                    url: '/index',
                    templateUrl: 'app/pages/tracelog/index/index.html',
                    controller: 'TracelogIndexController',
                    controllerAs: 'ctrl',
                    parent: 'tracelog'
                })
                .state('tracelog.new', {
                    url: '/new',
                    templateUrl: 'app/pages/tracelog/new/new.html',
                    controller: 'TracelogNewController',
                    controllerAs: 'ctrl',
                    parent: 'tracelog'
                })
                .state('tracelog.clone', {
                    url: '/clone/{id}',
                    templateUrl: 'app/pages/tracelog/clone/clone.html',
                    controller: 'TracelogCloneController',
                    controllerAs: 'ctrl',
                    parent: 'tracelog'
                })
                .state('tracelog.edit', {
                    url: '/:id/edit',
                    templateUrl: 'app/pages/tracelog/edit/edit.html',
                    controller: 'TracelogEditController',
                    controllerAs: 'ctrl',
                    parent: 'tracelog'
                })
                .state('tracelog.show', {
                    url: '/:id/show',
                    templateUrl: 'app/pages/tracelog/show/show.html',
                    controller: 'TracelogShowController',
                    controllerAs: 'ctrl',
                    parent: 'tracelog'
                })
                //user
                .state('user', {
                    abstract: true,
                    url: '/user',
                    templateUrl: 'app/pages/user/user.html'
                })
                .state('user.index', {
                    url: '/index',
                    templateUrl: 'app/pages/user/index/index.html',
                    controller: 'UserIndexController',
                    controllerAs: 'ctrl',
                    parent: 'user'
                })
                .state('user.new', {
                    url: '/new',
                    templateUrl: 'app/pages/user/new/new.html',
                    controller: 'UserNewController',
                    controllerAs: 'ctrl',
                    parent: 'user'
                })
                .state('user.clone', {
                    url: '/clone/{id}',
                    templateUrl: 'app/pages/user/clone/clone.html',
                    controller: 'UserCloneController',
                    controllerAs: 'ctrl',
                    parent: 'user'
                })
                .state('user.edit', {
                    url: '/:id/edit',
                    templateUrl: 'app/pages/user/edit/edit.html',
                    controller: 'UserEditController',
                    controllerAs: 'ctrl',
                    parent: 'user'
                })
                .state('user.show', {
                    url: '/:id/show',
                    templateUrl: 'app/pages/user/show/show.html',
                    controller: 'UserShowController',
                    controllerAs: 'ctrl',
                    parent: 'user'
                })
                //comptediotnako
                .state('comptediotnako', {
                    abstract: true,
                    url: '/comptediotnako',
                    templateUrl: 'app/pages/comptediotnako/comptediotnako.html'
                })
                .state('comptediotnako.index', {
                    url: '/index',
                    templateUrl: 'app/pages/comptediotnako/index/index.html',
                    controller: 'ComptediotnakoIndexController',
                    controllerAs: 'ctrl',
                    parent: 'comptediotnako'
                })
                .state('comptediotnako.new', {
                    url: '/new',
                    templateUrl: 'app/pages/comptediotnako/new/new.html',
                    controller: 'ComptediotnakoNewController',
                    controllerAs: 'ctrl',
                    parent: 'comptediotnako'
                })
                .state('comptediotnako.clone', {
                    url: '/clone/{id}',
                    templateUrl: 'app/pages/comptediotnako/clone/clone.html',
                    controller: 'ComptediotnakoCloneController',
                    controllerAs: 'ctrl',
                    parent: 'comptediotnako'
                })
                .state('comptediotnako.edit', {
                    url: '/:id/edit',
                    templateUrl: 'app/pages/comptediotnako/edit/edit.html',
                    controller: 'ComptediotnakoEditController',
                    controllerAs: 'ctrl',
                    parent: 'comptediotnako'
                })
                .state('comptediotnako.show', {
                    url: '/:id/show',
                    templateUrl: 'app/pages/comptediotnako/show/show.html',
                    controller: 'ComptediotnakoShowController',
                    controllerAs: 'ctrl',
                    parent: 'comptediotnako'
                })
                //app core pages (errors, login,signup)
                .state('pages', {
                    url: '/app/pages',
                    template: '<div ui-view></div>'
                })
                //login
                .state('pages.login', {
                    url: '/login',
                    templateUrl: 'app/pages/pages-login/pages-login.html',
                    controller: 'LoginController',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                })
                //register
                .state('pages.signup', {
                    url: '/signup',
                    templateUrl: 'app/pages/pages-signup/pages-signup.html',
                    controller: 'SignupController',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                })
                //forgotpass
                .state('pages.forgotpass', {
                    url: '/forgotpass',
                    templateUrl: 'app/pages/pages-forgotpass/pages-forgotpass.html',
                    controller: 'ForgotPasswordController',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                })
                //404
                .state('pages.page404', {
                    url: '/page404',
                    templateUrl: 'app/pages/pages-404/pages-404.html',
                    controller: 'Page404Controller',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                })
                //500
                .state('pages.page500', {
                    url: '/page500',
                    templateUrl: 'app/pages/pages-500/pages-500.html',
                    controller: 'Page500Controller',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                })
                //offline
                .state('pages.offline', {
                    url: '/page-offline',
                    templateUrl: 'app/pages/pages-offline/pages-offline.html',
                    controller: 'PageOfflineController',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                })
                //locked
                .state('pages.locked', {
                    url: '/locked',
                    templateUrl: 'app/pages/pages-locked/pages-locked.html',
                    controller: 'LockedController',
                    controllerAs: 'ctrl',
                    parent: 'pages',
                    specialClass: 'core'
                });

        $urlRouterProvider.otherwise('/app/dashboard');
    }

})();
