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
