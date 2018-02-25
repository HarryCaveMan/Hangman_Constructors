const Game = require('./game.js').Game();
const Inq = require('inquirer');
let inGame = true;

async function prpt(){   //recursive async prompt replaces synchronous while loop (since inquirer.prompt() is async)
	answer = await Inq.prompt([   //wait for inquirer prompt to return answer with await
    {
    type: "confirm",
    name: "start",
    message: "Would you like to play Hangman?"
  }]);
	   if (answer.start){   //if they want to play, run Game.play() and recursively call new prompt
	   	Game.play();
	   	prpt();
	   }
}


prpt(); //This is the outermost control loop (actually a recursion chain not a loop)











