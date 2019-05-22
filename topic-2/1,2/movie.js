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
            event.forEach((callback) => {
                if (callback == 'function') {
                    callback();    
                }
                else {
                    console.log("The event doesn't exists.");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                }
             });
        }
    }

    off(eventName, callback) {

        const event = this.events[eventName];
        if (event == callback) {
            event.splice(eventName, 1 );
        }
        

    }

}

class Movie extends EventEmitter {

    constructor(tittle, year, duration) {
        
        super();
        this.tittle = tittle;
        this.year = year;
        this.duration = duration;    

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

}



//Created movies
/*let movie_1 = new Movie("Wanted", 2007, 90);
let movie_2 = new Movie("Hulk", 1997, 86);
let movie_3 = new Movie("Avatar", 2004, 120);
let movie_4 = new Movie("Titanic", 1997, 140);

movie_1.play();
movie_2.resume();
movie_3.pause();
movie_4.resume();
*/

/*
let a = new EventEmitter();
a.on("primero", 1);
a.on("segundo", 2);
a.off("segundo", 2);
*/


let film = new Movie("Titanic", 1997, 140);
film.play();

film.resume();

film.pause();




