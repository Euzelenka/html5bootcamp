class EventEmitter {
  /*initialize the events property as an empty object. 
    The purpose of the events property is to store 
    our events name as the key and the value as an array of subscribers.
  */
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  emit(eventName) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(call => {
        if (typeof call == 'function') {
          callback();
        } else {
          console.log("The event doesn't exists.");
        }
      });
    }
  }
  /**
   * This method eliminates the indicated callback.
   * Your reference name is eventName. 
   */


  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(function (eventCall) {
        return eventCall.name !== callback;
      });
    }
  }

  show_events() {
    console.log(this.events);
  }

}
/** 
 * The movie class becomes a subclass of EventEmitter 
 * and uses legacy methods to publish, pause, and resume 
 * events when the related method is called.
*/


const _event = new EventEmitter();

_event.on('play_call', function playEvent() {
  console.log("The movie is playing");
});

_event.on('pause_call', function pauseEvent() {
  console.log("The movie is playing");
});

_event.on('play_call', function resumeEvent() {
  console.log("The movie is playing");
});

_event.on('play_call', function pauseEvent() {
  console.log("The movie is playing");
});

const nameToDelete = 'playEvent';

_event.off('play_call', nameToDelete);