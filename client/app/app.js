'use strict';

angular.module('ioControlApp', [
  'ioControlApp.auth',
  'ioControlApp.admin',
  'ioControlApp.constants',
  'ngCookies',
  'ngResource',
  'ui.select',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
