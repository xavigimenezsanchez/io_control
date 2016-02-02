'use strict';

angular.module('ioControlApp')
  .factory('Historico', function ($resource) {
    return $resource('/api/historico/:id',{id: '@id'}, {'out':{method:'PUT'}});
  });
