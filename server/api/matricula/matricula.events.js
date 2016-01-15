/**
 * Matricula model events
 */

'use strict';

import {EventEmitter} from 'events';
var Matricula = require('./matricula.model');
var MatriculaEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MatriculaEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Matricula.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MatriculaEvents.emit(event + ':' + doc._id, doc);
    MatriculaEvents.emit(event, doc);
  }
}

export default MatriculaEvents;
