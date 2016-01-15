/**
 * Empresa model events
 */

'use strict';

import {EventEmitter} from 'events';
var Empresa = require('./empresa.model');
var EmpresaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EmpresaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Empresa.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EmpresaEvents.emit(event + ':' + doc._id, doc);
    EmpresaEvents.emit(event, doc);
  }
}

export default EmpresaEvents;
