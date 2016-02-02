'use strict';

angular.module('ioControlApp')
  .factory('Externo', function ($resource) {
    return $resource('/api/externos/:id',{id: '@id'}, {'update':{method:'PUT'},'validar':{method:'PUT', url:'/api/externos/validar/:id'}});
  });
