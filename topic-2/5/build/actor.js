class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

}
/** 
  * A method was added to the Movie class as addCast (cast) 
  * that allows you to add one or more Actors to a movement.
*/


const terminator = new Movie('Terminator I', 1985, 60);
const arnold = new Actor('Arnold Schwarzenegger', 50);
const actors = [new Actor('Paul Winfield', 50), new Actor('Michael Biehn', 50), new Actor('Linda Hamilton', 50)];
terminator.addCast(arnold);
terminator.addCast(actors);