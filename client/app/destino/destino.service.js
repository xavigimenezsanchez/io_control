'use strict';

angular.module('ioControlApp')
  .factory('Destino', function ($resource) {
    // Service logic
    // ...
    return $resource('/api/destinos/:id',{id: '@id'}, {'update':{method:'PUT'}});
  });
