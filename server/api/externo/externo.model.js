'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var ExternoSchema = new mongoose.Schema({
  name: 	String,
  surname: 	String,
  dni: 		String,
  language: {
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Idioma'
  },
  info: 	String,
  haveNumberPlate: Boolean,
  matricula: {
  	//If matricula it is not necessary
  	//comany
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Matricula'
  },
  company: {
  	// If externo haven't matricula
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Empresa'
  },
  active: 	Boolean
});

ExternoSchema.plugin(deepPopulate);
export default mongoose.model('Externo', ExternoSchema);
