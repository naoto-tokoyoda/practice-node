//class EventEmitter
const EventEmitter = require('events'); 


var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
    log(message){
        // send an http reaquest
        console.log(message);
    
        // Raise an event. object + method
        this.emit('messageLogged', { id:1, url: 'http://' });
    }

}


//how to export module
module.exports = Logger;




