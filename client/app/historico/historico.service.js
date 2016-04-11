'use strict';

angular.module('ioControlApp')
  .factory('Historico', function ($resource) {
    return {
    	'all': $resource('/api/historico/:id',{id: '@id'}, {'out':{method:'PUT'}}),
    	'matricula': { 	'query' : $resource('/api/historico/matricula').query,
    					'in'	: $resource('/api/historico/matricula/in').query
    				}
    }
  });
