const G = require('./game.js');
const I = require('inquirer');
let inGame = true;

async function main(){   //recursive async prompt replaces synchronous while loop (since inquirer.prompt() is async)
	answer = await I.prompt([   //wait for inquirer prompt to return answer with await
    {
    type: "confirm",
    name: "start",
    message: "Would you like to play Hangman?"
  }]);
	   if (answer.start){   //if they want to play, run Game.play() and recursively call new prompt
	   	await G.Game().play();    //play game (also async and recursive) owned by the "main()" frame that opened it
	   	main();    //next game is a new stack frame (frames alternate between names owning games owning names)
	   }
}

main(); //This is the first call to main (the first stack frame)