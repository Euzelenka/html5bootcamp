const social = {share: function(friendName) {
                            console.log("Share " + friendName);
                        }, 
                like: function(friendName) {
                            console.log(friendName + " Like");
                        }
                };


/**
 * An object called social was created, defining the methods share (friendName) and 
 * like (friendName) that generates the following output that likes {friendName} / share {movieName}.
*/
const ironman = new Movie('Ironman', 2008, 126);
Object.assign(ironman, social);              //There’s no inheritance, but a simple method copying.
ironman.share('Mike Blossom');