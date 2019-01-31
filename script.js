// Create JavaScript objects via constructor functions
function NBAPlayer(name, team, pos) {
  this.name = name;
  this.team = team;
  this.pos = pos;
}
// Passes new info into a variable
const curry = new NBAPlayer("Stephen Curry", "Golden State Warriors", "Point Guard");
// Adding a new prototype to the variable
NBAPlayer.prototype.dunk = function () {
  //code
};
//Access the prototype function via the NBAPlayer class and applies it down
curry.dunk();  // Method style
// It is useful to add the prototype outside of the function in order to limit
// repeated code and it can be accessed from the same method
