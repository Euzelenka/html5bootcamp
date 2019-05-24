class Logger {

    constructor() {
    }

    log(info) {
        console.log("Logger: " + info);
    }
}

/** A logger instance was created that listens to the movie play event. */ 

const logger = new Logger();
const terminatorII = new Movie('TerminatorII', 1985, 60);
terminatorII.on('play', () => logger.log('play'));
logger.log('play');
terminatorII.play(); 

