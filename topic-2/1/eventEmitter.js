class EventEmitter {
    
    /*initialize the events property as an empty object. 
      The purpose of the events property is to store 
      our events name as the key and the value as an array of subscribers.
    */
    constructor() {
        this.events = {};
    }

    on(eventName, callback) {
        if(!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        console.log(this.events);
    }

    emit(eventName) {
        const event = this.events[eventName];
        if(event) {
            event.forEach(fn => {
                fn.call(null);
             });
        }
        console.log(events);
    }

    off(eventName, callback) {
        let index = events.indexOf(eventName);
        events.splice(index, 1);
        console.log(events);
    }

}

let a = new EventEmitter();
a.on("primero", 1);