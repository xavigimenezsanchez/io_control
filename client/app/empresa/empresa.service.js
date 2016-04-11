'use strict';

angular.module('ioControlApp')
  .factory('Empresa', function ($resource) {
    // Service logic
    // ...

  //  var meaningOfLife = 42;

    // Public API here
  /*  return {
      someMethod: function () {
        return meaningOfLife;
      }
    }; */
    return $resource('/api/empresas/:id',{id: '@id'}, {'update':{method:'PUT'}});
  });

