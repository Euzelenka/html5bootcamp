class Movie {

    constructor(tittle, year, duration) {
        this.tittle = tittle;
        this.year = year;
        this.duration = duration;    
    }

    play() {
        console.log("Play:" + this.tittle);
    }

    pause() {
        console.log("Pause:" + this.tittle);
    }

    resume() {
        console.log("Resume:" + this.tittle + "-" + "Duration:" + this.duration);
    }

}



//Created movies
let movie_1 = new Movie("Wanted", 2007, 90);
let movie_2 = new Movie("Hulk", 1997, 86);
let movie_3 = new Movie("Avatar", 2004, 120);
let movie_4 = new Movie("Titanic", 1997, 140);

movie_1.play();
movie_2.resume();
movie_3.pause();
movie_4.resume();

