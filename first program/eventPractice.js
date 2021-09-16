//class EventEmitter
const EventEmitter = require('events'); 



const Logger = require('./logger');
// create object
const logger = new Logger();
// Register a listener
logger.on('messageLogged', (arg) => { // e, eventArg
    console.log('Listener called', arg);
});

logger.log("message");

// // Raise an event. object + method
// emitter.emit('messageLogged', { id:1, url: 'http://' });

//emit means making a noise, produce - signalling

// Raise: logging (data: message)