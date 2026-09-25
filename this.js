//i want to remove leading and trailing spaces from all the stings, what ever string is given 

const username = "sandeep     ";
const username2 = "sandeep       c   ";

String.prototype.removeSpaces = function(){ //name of the method is removeSpaces
    console.log(`the true length is ${this.trim().length}`) //and the method is applicable to all the STRINGS
}
username.removeSpaces();
username2.removeSpaces();
"what about the placement                   ".removeSpaces();