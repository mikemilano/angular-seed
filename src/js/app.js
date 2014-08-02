angular.module('app', ['ngRoute', 'app.controllers', 'app.directives', 'app.services', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: './views/main.html',
      controller: 'MainCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/main'
    });
  });