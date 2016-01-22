'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ExternoSchema = new mongoose.Schema({
  number: Number,
  name: 	String,
  surname: 	String,
  dni: 		String,
  validate: {type: Date, default: Date.now },
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
ExternoSchema.plugin(autoIncrement.plugin, {model: 'Externo', field:'number'});
export default mongoose.model('Externo', ExternoSchema);
