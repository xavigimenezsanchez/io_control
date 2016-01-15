/**
 * Externo model events
 */

'use strict';

import {EventEmitter} from 'events';
var Externo = require('./externo.model');
var ExternoEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ExternoEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Externo.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ExternoEvents.emit(event + ':' + doc._id, doc);
    ExternoEvents.emit(event, doc);
  }
}

export default ExternoEvents;
