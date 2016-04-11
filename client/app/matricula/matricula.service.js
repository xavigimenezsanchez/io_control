'use strict';

angular.module('ioControlApp')
  .factory('Matricula', function ($resource) {
    return $resource('/api/matriculas/:id',{id: '@id'}, {'update':{method:'PUT'}});
  });
