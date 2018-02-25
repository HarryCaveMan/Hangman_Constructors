const letr = require('./letter.js');
function Word(str){
	this.letterArray =[];
	for(let i=0 ; i<str.length ; i++){
		this.letterArray.push(letr.Letter(str[i]))
	}
	this.toString = function(){
		let output = [];
		for(let i=0 ; i<this.letterArray.length ; i++){
			output.push(this.letterArray[i].display());
		}
		return output.join('');
	}
}


exports.Word = function(input){
	return new Word(input);
}