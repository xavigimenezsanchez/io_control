'use strict';

angular.module('ioControlApp.auth', [
  'ioControlApp.constants',
  'ioControlApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
