'use strict';

angular.module('ioControlApp')
  .factory('Idioma', function ($resource) {
    return $resource('/api/idiomas/:id',{id: '@id'}, {'update':{method:'PUT'}});
    });
