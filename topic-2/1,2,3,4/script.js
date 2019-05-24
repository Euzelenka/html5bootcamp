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
    }

    emit(eventName) {
        
        const event = this.events[eventName];
        if(event) {
            event.forEach((call) => {
                if (typeof call == 'function') {
                    callback();    
                }
                else {
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
        
        if(this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(function(eventCall) {
                return eventCall.name !== callback;
                });
          } 
    }

    show_events() {
        console.log(this.events);
    }

}




class Movie extends EventEmitter {

    constructor(tittle, year, duration) {
        
        super();
        this.tittle = tittle;
        this.year = year;
        this.duration = duration;    
        this.cast_actors = [];
    }

    play() {

        this.emit("Play");
        console.log("Play:" + this.tittle);
    }

    pause() {

        this.emit("Pause");
        console.log("Pause:" + this.tittle);
    }

    resume() {

        this.emit("Resume");
        console.log("Resume:" + this.tittle + "-" + "Duration:" + this.duration);
    }

    addCast(cast) {
        
        if (Array.isArray(cast)) {
            this.cast_actors = this.cast_actors.concat(cast);
          } else if (typeof cast === 'object') {
            this.cast_actors.push(cast);
                }    
    }
}

class Actor {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

class Logger {

    constructor() {
    }

    log(info) {
        console.log("Logger: " + info);
    }
}

const social = {share: function(friendName) {
                        console.log("Share " + friendName);
                        }, 
                like: function(friendName) {
                    console.log(friendName + " Like");
                        }
                };



/**
 * Some instances of the movie class are created 
 * and their methods are used. 
*/

const wanted = new Movie("Wanted", 2007, 90);
const hulk = new Movie("Hulk", 1997, 86);
const avatar = new Movie("Avatar", 2009, 170);
const thor = new Movie("Thor", 2011, 115);

wanted.play();
wanted.resume();
wanted.pause();

hulk.play();
hulk.resume();
hulk.pause();

avatar.play();
avatar.resume();
avatar.pause();

thor.play();
thor.resume();
thor.pause();

/*----------------------------------------------*/

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


/*----------------------------------------------*/

/** 
  * A method was added to the Movie class as addCast (cast) 
  * that allows you to add one or more Actors to a movement.
*/

const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [
    new Actor('Paul Winfield', 50),
    new Actor('Michael Biehn', 50),
    new Actor('Linda Hamilton', 50)
];
terminator.addCast(arnold);
terminator.addCast(actors);

/*--------------------------------------------------*/

/** A logger instance was created that listens to the movie play event. */ 

const logger = new Logger();
const terminatorII = new Movie('TerminatorII', 1985, 60);
terminatorII.on('play', () => logger.log('play'));
logger.log('play');
terminatorII.play(); 


/*--------------------------------------------------*/

/**
 * An object called social was created, defining the methods share (friendName) and 
 * like (friendName) that generates the following output that likes {friendName} / share {movieName}.
*/
const ironman = new Movie('Ironman', 2008, 126);
Object.assign(ironman, social);              //There’s no inheritance, but a simple method copying.
ironman.share('Mike Blossom');
