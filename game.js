let I = require('inquirer');
let W = require('./word.js');


function Game(){
	this.lives = 15;
	this.word = W.Word();

	var ui = new I.ui.BottomBar({bottomBar: this.word.toString()+'   lives:'+this.lives});

	this.play = async function(){  
		if(this.lives>0 && !this.word.isSolved()){    
			answer = await I.prompt([
			{
				type: 'input',
				name:'gprompt',
				message: 'make a guess'
			}
				]);

			if(this.word.search(answer.gprompt)){
				console.log('Good Job!');
				ui.updateBottomBar(this.word.toString()+'   lives:'+this.lives);
				await this.play();
			}else{
				console.log('Hmmm...No!');
				this.lives--;
				ui.updateBottomBar(this.word.toString()+'   lives:'+this.lives);
				await this.play();
			}
		}else if(this.word.isSolved()){
            ui.updateBottomBar('Gongradulations! You Win!')
		}else{
			ui.updateBottomBar('Game over!');
		}

	}
}

exports.Game = function(){
	return new Game();
}