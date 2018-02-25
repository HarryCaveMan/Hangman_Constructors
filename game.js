Inq = require('inquirer');
Wrd = require('./word.js')

function Game(){

	this.play=function(){
        console.log(Wrd.Word().toString());
    }
}

exports.Game = function(){
	return new Game();
}